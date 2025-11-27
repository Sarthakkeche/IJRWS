// import { useEffect, useState } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import Navbar from "./Navbar";
// import Footer from "./Footer";
// import axios from "axios";
// import paperImg from "../assets/paper.jpg"; // add an illustration image for style
// import uploadBg from "../assets/uplaod.jpg"; // bg image for hero section

// const SubmitManuscriptPage = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000 });
//   }, []);

//   const [form, setForm] = useState({
//     authorName: "",
//     paperTitle: "",
//   });
//   const [paperFile, setPaperFile] = useState(null);
//   const [uniqueCode, setUniqueCode] = useState("");
//   const [status, setStatus] = useState("");

//   const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
//   const handleFileChange = (e) => setPaperFile(e.target.files[0]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus("Uploading...");

//     const data = new FormData();
//     data.append("authorName", form.authorName);
//     data.append("paperTitle", form.paperTitle);
//     data.append("paperfile", paperFile);

//     try {
//       const res = await axios.post("https://ijspr.onrender.com/api/manuscripts/submit", data);

//       setUniqueCode(res.data.uniqueCode);
//       setStatus("✅ Paper submitted successfully!");
//       setForm({ authorName: "", paperTitle: "" });
//       setPaperFile(null);
//     } catch (error) {
//       setStatus("❌ Failed to submit paper.");
//     }
//   };

//   return (
//     <div className="bg-gradient-to-b from-white to-blue-50 text-gray-800">
//       <Navbar />

//       {/* Hero Section */}
//       <section
//         className="relative bg-blue-900 mt-33 text-white py-20 px-4 md:px-20 overflow-hidden"
//         style={{
//           backgroundImage: `linear-gradient(rgba(14, 12, 12, 0.85), rgba(36, 33, 33, 0.85)), url(${uploadBg})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         <div className="max-w-5xl mx-auto text-center">
//           <h1 className="text-4xl md:text-5xl font-bold" data-aos="fade-down">
//             Submit Your <span className="text-orange-400">Manuscript</span>
//           </h1>
//           <p className="mt-4 text-lg max-w-2xl mx-auto" data-aos="fade-up">
//             Upload your research paper and get a unique tracking code to check its status anytime.
//           </p>
//         </div>
//       </section>

//       {/* Form Section */}
//       <section className="py-16 bg-white px-6 md:px-20">
//         <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
//           {/* Submit Form */}
//           <form className="space-y-6" data-aos="fade-right" onSubmit={handleSubmit}>
//             <h2 className="text-3xl font-bold text-blue-800">Upload Manuscript</h2>

//             <div>
//               <label className="block mb-2 text-sm font-semibold text-gray-600">Author Name</label>
//               <input
//                 type="text"
//                 name="authorName"
//                 value={form.authorName}
//                 onChange={handleChange}
//                 placeholder="Enter author name"
//                 className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
//                 required
//               />
//             </div>

//             <div>
//               <label className="block mb-2 text-sm font-semibold text-gray-600">Paper Title</label>
//               <input
//                 type="text"
//                 name="paperTitle"
//                 value={form.paperTitle}
//                 onChange={handleChange}
//                 placeholder="Enter paper title"
//                 className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
//                 required
//               />
//             </div>

//             <div>
//               <label className="block mb-2 text-sm font-semibold text-gray-600">Upload Paper</label>
//               <input
//                 type="file"
//                 name="paperfile"
//                 onChange={handleFileChange}
//                 className="w-full px-4 py-2 rounded-lg border border-gray-300"
//                 required
//               />
//             </div>

//             <button
//               type="submit"
//               className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition font-semibold"
//             >
//               Submit Paper
//             </button>

//             <p className="text-sm text-gray-600 mt-2">{status}</p>

//             {uniqueCode && (
//               <p className="mt-4 text-green-700 font-semibold">
//                 🎉 Your tracking code is: <span className="text-blue-800">{uniqueCode}</span>
//                 <p>Please copy this , this is one time code for fetching the Status of your paper</p>
//               </p>
//             )}
//           </form>

//           <img
//             src={paperImg}
//             alt="Upload Illustration"
//             className="w-full max-w-md mx-auto"
//             data-aos="fade-left"
//           />
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default SubmitManuscriptPage;
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";
import paperImg from "../assets/paper.jpg";
import uploadBg from "../assets/uplaod.jpg";

const SubmitManuscriptPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [form, setForm] = useState({
    authorName: "",
    paperTitle: "",
  });
  const [paperFile, setPaperFile] = useState(null);
  const [uniqueCode, setUniqueCode] = useState("");
  const [status, setStatus] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
  const handleFileChange = (e) => setPaperFile(e.target.files[0]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Uploading...");

    const data = new FormData();
    data.append("authorName", form.authorName);
    data.append("paperTitle", form.paperTitle);
    data.append("paperfile", paperFile);

    try {
      const res = await axios.post(
        "https://ijspr.onrender.com/api/manuscripts/submit",
        data
      );
      // const res = await axios.post(
      //   "http://localhost:5000/api/manuscripts/submit",
      //   data
      // );

      setUniqueCode(res.data.uniqueCode);
      setStatus("✅ Paper submitted successfully!");
      setForm({ authorName: "", paperTitle: "" });
      setPaperFile(null);
    } catch (error) {
      setStatus("❌ Failed to submit paper.");
    }
  };

  return (
    <div className="bg-gradient-to-b from-white to-blue-50 text-gray-800">
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative bg-blue-900 mt-33 text-white py-20 px-4 md:px-20 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(14, 12, 12, 0.85), rgba(36, 33, 33, 0.85)), url(${uploadBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-5xl mx-auto text-center">
          <h1
            className="text-4xl md:text-5xl font-bold"
            data-aos="fade-down"
          >
            Submit Your <span className="text-orange-400">Manuscript</span>
          </h1>
          <p
            className="mt-4 text-lg max-w-2xl mx-auto"
            data-aos="fade-up"
          >
            Upload your research paper and get a unique tracking code to
            check its status anytime.
          </p>
        </div>
      </section>

      {/* ⚠️ Important Info Section */}
      <section className="px-6 md:px-20 py-10">
        <div
          className="relative bg-white text-gray-800 p-6 rounded-xl shadow-lg border-4 animate-borderGlow"
          data-aos="zoom-in"
        >
          <h2 className="text-xl font-bold text-red-600 mb-3">
            ⚠️ Important Submission Guidelines
          </h2>
          <p className="mb-4">
            For publishing your paper in <b>IJRWS</b>, you must submit your
            manuscript strictly in the{" "}
            <span className="font-semibold text-blue-700">
              official journal template
            </span>
            . Submissions not following the format will be{" "}
            <span className="font-bold text-red-600">rejected</span>.
             <a href="#" className="text-green-400">  Click here for more Information</a>
          </p>
        
          <a
            href="/IJRWS_Template.docx" // put your real template file path here
            download
            className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-md hover:from-blue-700 hover:to-purple-700 transition"
          >
            ⬇️ Download Template
          </a>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-white px-6 md:px-20">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
          {/* Submit Form */}
          <form
            className="space-y-6"
            data-aos="fade-right"
            onSubmit={handleSubmit}
          >
            <h2 className="text-3xl font-bold text-blue-800">
              Upload Manuscript
            </h2>

            <div>
              <label className="block mb-2 text-sm font-semibold text-gray-600">
                Author Name
              </label>
              <input
                type="text"
                name="authorName"
                value={form.authorName}
                onChange={handleChange}
                placeholder="Enter author name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-semibold text-gray-600">
                Paper Title
              </label>
              <input
                type="text"
                name="paperTitle"
                value={form.paperTitle}
                onChange={handleChange}
                placeholder="Enter paper title"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-semibold text-gray-600">
                Upload Paper
              </label>
              <input
                type="file"
                name="paperfile"
                onChange={handleFileChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition font-semibold"
            >
              Submit Paper
            </button>

            <p className="text-sm text-gray-600 mt-2">{status}</p>

            {uniqueCode && (
              <p className="mt-4 text-green-700 font-semibold">
                🎉 Your tracking code is:{" "}
                <span className="text-blue-800">{uniqueCode}</span>
                <br />
                <span className="text-gray-700 text-sm">
                  Please copy this, it is a one-time code for checking your
                  paper status.
                </span>
              </p>
            )}
          </form>

          <img
            src={paperImg}
            alt="Upload Illustration"
            className="w-full max-w-md mx-auto"
            data-aos="fade-left"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SubmitManuscriptPage;
