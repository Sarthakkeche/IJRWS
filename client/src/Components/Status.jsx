import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";
import statusImg from "../assets/status.jpg";
import checkBg from "../assets/checkbg.jpg";

// ✅ API base URL config
const API_BASE_URL = "https://ijspr.onrender.com";

const CheckStatusPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [code, setCode] = useState("");
  const [status, setStatus] = useState("");

  const handleCheck = async (e) => {
    e.preventDefault();
    setStatus("⏳ Checking...");
    try {
      const res = await axios.get(`${API_BASE_URL}/api/papers/status/${code}`);
      setStatus(`📌 Status: ${res.data.status}`);
    } catch (error) {
      console.error("❌ Error fetching status:", error);
      setStatus("❌ Error checking status. Please try again.");
    }
  };

  return (
    <div className="bg-gradient-to-b from-white to-blue-50 text-gray-800">
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative bg-blue-900 mt-33 text-white py-20 px-4 md:px-20 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(14, 12, 12, 0.85), rgba(36, 33, 33, 0.85)), url(${checkBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold" data-aos="fade-down">
            Check <span className="text-orange-400">Manuscript Status</span>
          </h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto" data-aos="fade-up">
            Enter your tracking code below to see if your paper is processed or still pending.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-white px-6 md:px-20">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
          {/* Status Form */}
          <form className="space-y-6" data-aos="fade-right" onSubmit={handleCheck}>
            <h2 className="text-3xl font-bold text-blue-800">Track Your Paper</h2>

            <div>
              <label className="block mb-2 text-sm font-semibold text-gray-600">
                Unique Code
              </label>
              <input
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Enter your tracking code"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition font-semibold"
            >
              Check Status
            </button>

            {status && <p className="text-sm text-gray-700 mt-2">{status}</p>}
          </form>

          <img
            src={statusImg}
            alt="Status Illustration"
            className="w-full max-w-md mx-auto"
            data-aos="fade-left"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CheckStatusPage;
