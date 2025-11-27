import { useEffect , useState} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import imga from "../assets/sak.webp";
import call from "../assets/call.jpeg";
import axios from "axios";

const ContactUsContent = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);


    const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const backendURL =
  import.meta.env.MODE === "development"
    ? "http://localhost:5000/send" // local testing
    : "https://ijspr.onrender.com/send"; // Render production


    try {
      const res = await axios.post("https://ijspr.onrender.com/send", form);
      setStatus("✅ Message sent successfully!");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("❌ Error sending message:", error);
      setStatus("❌ Failed to send message. Try again.");
    }
  };
  return (
    <div className="bg-gradient-to-b from-white to-blue-50 text-gray-800">
        <Navbar/>

      {/* Hero Section */}
      <section className="relative bg-blue-900 mt-33 text-white py-20 px-4 md:px-20 overflow-hidden "
      style={{
        backgroundImage: `linear-gradient( rgba(14, 12, 12, 0.85), rgba(36, 33, 33, 0.85)), url(${call})`,
        backgroundSize: "cover",
        backgroundRepeat: "repeat",
        backgroundPosition: "center mid 20px",
      }}
      >
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold" data-aos="fade-down">
            Get in <span className="text-orange-400">Touch With Us</span>
          </h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto" data-aos="fade-up">
            We're here to answer any questions, listen to your feedback, or guide you through your submission process.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6 py-16 text-center">
        {[
          {
            icon: "📞",
            title: "Phone",
            value: "+91 9657778471",
          },
          {
            icon: "📧",
            title: "Email",
            value: "editorijrwsjournal@gmail.com",
          },
          {
            icon: "📍",
            title: "Address",
            value: "Amravti, Maharashtra, India",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition"
            data-aos="fade-up"
            data-aos-delay={i * 100}
          >
            <div className="text-4xl mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold text-blue-800">{item.title}</h3>
            <p className="mt-2 text-gray-700">{item.value}</p>
          </div>
        ))}
      </section>

      {/* Form Section */}
      <section className="py-16 bg-white px-6 md:px-20">
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
        {/* Contact Form */}
        <form
          className="space-y-6"
          data-aos="fade-right"
          onSubmit={handleSubmit}
        >
          <h2 className="text-3xl font-bold text-blue-800">Send a Message</h2>

          {["Name", "Email", "Subject", "Message"].map((label, i) => (
            <div key={i}>
              <label className="block mb-2 text-sm font-semibold text-gray-600">
                {label}
              </label>
              {label !== "Message" ? (
                <input
                  type={label.toLowerCase()}
                  name={label.toLowerCase()}
                  value={form[label.toLowerCase()]}
                  onChange={handleChange}
                  placeholder={`Enter your ${label.toLowerCase()}`}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              ) : (
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Your message"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              )}
            </div>
          ))}

          <button
            type="submit"
            className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition font-semibold"
          >
            Send Message
          </button>
          <p className="text-sm text-gray-600 mt-2">{status}</p>
        </form>

        <img
          src={imga}
          alt="Contact Illustration"
          className="w-full max-w-md mx-auto"
          data-aos="fade-left"
        />
      </div>
    </section>
 <Footer/>
    </div>
  );
};

export default ContactUsContent;
