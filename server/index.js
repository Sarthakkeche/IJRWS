
import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import mongoose from "mongoose";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
import AWS from "aws-sdk";

// Setup __dirname for ES Module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// ✅ CORS
const corsOptions = {
  origin: [
    
    "http://localhost:5173",
    "https://ijrwsadmin.vercel.app"
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
};
app.use(cors(corsOptions));
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads"))); // still here (legacy)

// ✅ MongoDB
mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/ijrws", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ MongoDB error:", err));

// ✅ AWS S3

const manuscriptUpload = multer({ storage: multer.memoryStorage() });
const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION || "ap-south-1"
});

// ✅ Schemas
const volumeSchema = new mongoose.Schema({ name: String });
const Volume = mongoose.model("Volume", volumeSchema);

const issueSchema = new mongoose.Schema({
  name: String,
  volumeId: { type: mongoose.Schema.Types.ObjectId, ref: "Volume" }
});
const Issue = mongoose.model("Issue", issueSchema);

const paperSchema = new mongoose.Schema({
  title: { type: String, required: true },
  Author: { type: String },
  Date: { type: String },
  fileUrl: { type: String, required: true },
  issueId: { type: mongoose.Schema.Types.ObjectId, ref: "Issue", required: true },
  uniqueCode: { type: String, index: true }
}, { timestamps: true });
const Paper = mongoose.model("Paper", paperSchema);

const manuscriptSchema = new mongoose.Schema({
  authorName: { type: String, required: true },
  paperTitle: { type: String, required: true },
  paperFile: { type: String, required: true },
  uniqueCode: { type: String, required: true, unique: true }
}, { timestamps: true });
const Manuscript = mongoose.model("Manuscript", manuscriptSchema);

// ✅ Multer (memory for S3 uploads)
const upload = multer({ storage: multer.memoryStorage() });

// =================== ROUTES ===================

// Volumes
app.get("/api/volumes", async (req, res) => {
  try {
    const volumes = await Volume.find();
    res.json(volumes);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});
app.post("/api/volumes", async (req, res) => {
  try {
    const volume = new Volume({ name: req.body.name });
    await volume.save();
    res.json(volume);
  } catch (err) {
    res.status(500).json({ message: "Failed to create volume" });
  }
});

// Issues
app.get("/api/issues/:volumeId", async (req, res) => {
  const issues = await Issue.find({ volumeId: req.params.volumeId });
  res.json(issues);
});
app.post("/api/issues/:volumeId", async (req, res) => {
  const issue = new Issue({ name: req.body.name, volumeId: req.params.volumeId });
  await issue.save();
  res.json(issue);
});
app.get("/api/issues", async (req, res) => {
  try {
    const issues = await Issue.find();
    res.json(issues);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});
app.get("/api/issues/:issueId", async (req, res) => {
  try {
    const issue = await Issue.findById(req.params.issueId);
    res.json(issue);
  } catch (err) {
    res.status(500).json({ message: "Issue not found" });
  }
});
app.get("/api/issues/all", async (req, res) => {
  try {
    const issues = await Issue.find();
    res.json(issues);
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
});

// Papers
app.get("/api/papers/latest", async (req, res) => {
  try {
    const latestPapers = await Paper.find().sort({ createdAt: -1 }).limit(10);
    res.json(latestPapers);
  } catch {
    res.status(500).json({ message: "Error fetching latest papers" });
  }
});
app.get("/api/papers/:issueId", async (req, res) => {
  const papers = await Paper.find({ issueId: req.params.issueId });
  res.json(papers);
});
app.post("/api/papers/:issueId", upload.single("file"), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "❌ File required" });
  }

  const params = {
    Bucket: process.env.S3_BUCKET,  // ✅ match with .env key
    Key: `papers/${Date.now()}-${req.file.originalname}`,
    Body: req.file.buffer,
    ContentType: req.file.mimetype
  };

  try {
    const data = await s3.upload(params).promise();

    const paper = new Paper({
      title: req.body.title,
      Author: req.body.Author,
      Date: req.body.Date,
      fileUrl: data.Location,       // ✅ S3 URL
      issueId: req.params.issueId,
      uniqueCode: req.body.uniqueCode
    });

    await paper.save();

    res.json({
      success: true,
      message: "✅ Paper uploaded successfully",
      paper,
    });
  } catch (err) {
    console.error("❌ Paper upload error:", err); // ✅ log real error
    res.status(500).json({ message: "Failed to upload file", error: err.message });
  }
});



// Manuscripts
app.post("/api/manuscripts/submit", manuscriptUpload.single("paperfile"), async (req, res) => {
  try {
    const { authorName, paperTitle } = req.body;

    if (!req.file) {
      return res.status(400).json({ success: false, message: "❌ No file received. Use field name 'paperfile'" });
    }

    const fileName = `manuscripts/${Date.now()}-${req.file.originalname}`;

    const params = {
      Bucket: process.env.S3_BUCKET,
      Key: fileName,
      Body: req.file.buffer,
      ContentType: req.file.mimetype
    };

    const uploadResult = await s3.upload(params).promise();

    // Generate unique tracking code
    const uniqueCode = Math.random().toString(36).substring(2, 10).toUpperCase();

    const manuscript = new Manuscript({
      authorName,
      paperTitle,
      paperFile: uploadResult.Location,  // Public URL
      uniqueCode,
    });

    await manuscript.save();

    res.json({
      success: true,
      message: "✅ Manuscript submitted successfully",
      uniqueCode,
      fileUrl: uploadResult.Location,
    });
  } catch (error) {
    console.error("❌ Manuscript submission error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
});


app.get("/api/papers/status/:code", async (req, res) => {
  try {
    const paper = await Paper.findOne({ uniqueCode: req.params.code });
    if (paper) return res.json({ status: "Completed" });
    return res.json({ status: "Pending", message: "Your paper has not been published yet." });
  } catch {
    res.status(500).json({ status: "Error", message: "Server error" });
  }
});

app.get("/api/manuscripts/pending", async (req, res) => {
  try {
    const publishedCodes = (await Paper.find().distinct("uniqueCode")).map(c => c?.trim().toUpperCase());
    const allManuscripts = await Manuscript.find().sort({ createdAt: -1 }).lean();
    const pending = allManuscripts.filter(m => !publishedCodes.includes(m.uniqueCode?.trim().toUpperCase()));
    res.json(pending);
  } catch {
    res.status(500).json({ message: "Server error" });
  }
});

// Mail
app.post("/send", async (req, res) => {
  const { name, email, message } = req.body;
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS }
    });
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_USER,
      subject: `New message from ${name}`,
      html: `<h3>Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>`
    });
    res.status(200).json("Message sent!");
  } catch (err) {
    res.status(500).json("Failed to send message.");
  }
});

// Root
app.get("/", (req, res) => res.send("✅ IJRWS backend is running!"));

// Start
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
