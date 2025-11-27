
import React from 'react';
//import { Button } from "@/components/ui/button";
import Navbar from "./Navbar";
import Footer from "./Footer";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { CheckCircle, ShieldCheck, Rocket, List ,Wallet ,Globe,Layers} from 'lucide-react';
import {Link} from "react-router-dom"
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import img1 from "../assets/1home.jpg";
import img2 from "../assets/3home.jpg";
import img3 from "../assets/2home.avif";
import img4 from "../assets/4home.webp";
import ahome from "../assets/Abouthome.png";
import bg from "../assets/bg.png";
import { Trophy, BookMarked, Users, BadgeCheck } from "lucide-react";
import { useEffect } from "react";
import AOS from "aos";

  


const Home = () => {
 
   useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
 
  const features = [
  {
    icon: <CheckCircle className="w-10 h-10 text-white" />,
    title: "Beginner-Friendly Publishing",
    description: "A smooth and simple process designed for first-time authors to get started easily.",
    bg: "bg-gradient-to-r from-blue-500 to-indigo-600",
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-white" />,
    title: "Trusted & Transparent",
    description: "Clear guidelines and honest communication at every step of your publishing journey.",
    bg: "bg-gradient-to-r from-green-500 to-emerald-600",
  },
  {
    icon: <Rocket className="w-10 h-10 text-white" />,
    title: "Quick Publication Process",
    description: "Get your work published faster with our efficient and streamlined system.",
    bg: "bg-gradient-to-r from-pink-500 to-red-500",
  },
  {
    icon: <Wallet className="w-10 h-10 text-white" />,
    title: "Affordable for Everyone",
    description: "Minimal publishing fees to support researchers at the starting stage.",
    bg: "bg-gradient-to-r from-yellow-500 to-orange-500",
  },
  {
    icon: <Globe className="w-10 h-10 text-white" />,
    title: "Global Reach",
    description: "Your research will be accessible worldwide, boosting visibility and impact.",
    bg: "bg-gradient-to-r from-purple-500 to-blue-500",
  },
  {
    icon: <Layers className="w-10 h-10 text-white" />,
    title: "All Disciplines Welcome",
    description: "We accept innovative work from all fields — science, technology, and beyond.",
    bg: "bg-gradient-to-r from-teal-500 to-green-500",
  },
];




const stats = [
  {
    icon: <Trophy size={36} className="text-orange-500" />,
    value: "0",
    label: "Issue Released"
  },
  {
    icon: <BookMarked size={36} className="text-orange-500" />,
    value: "0",
    label: "Indexing"
  },
  {
    icon: <Users size={36} className="text-orange-500" />,
    value: "0",
    label: "Authors"
  },
  {
    icon: <BadgeCheck size={36} className="text-orange-500" />,
    value: "0",
    label: "Reviewers"
  }
];

  return (
   <>
  
  
<div
  className="min-h-screen m-full text-gray-800"
  style={{
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundRepeat: "repeat",
    backgroundPosition: "center",
  }}
>

         <Navbar />
        

      <main className=" md:px-0.1  ">
<div className="relative w-full h-screen mt-33 overflow-hidden">
  <Swiper
    modules={[Autoplay, EffectFade]}
    effect="fade"
    autoplay={{ delay: 4000, disableOnInteraction: false }}
    loop
    className="w-full h-full"
  >
    {[img1, img2, img3, img4].map((image, index) => (
      <SwiperSlide key={index}>
        <div
          className="w-full h-full flex flex-col items-center justify-center px-4 md:px-16 text-center bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.87), rgba(0, 0, 0, 0.41)), url(${image})`,
          }}
        >
          <div className="max-w-5xl mx-auto text-white font-playfair py-8">
            <h1 className="text-3xl md:text-5xl font-bold drop-shadow-lg font-style-EB Garamond">
             International Journal of Research Welfare Society
            </h1>
            <p className="mt-4 text-sm md:text-lg font-medium text-gray-300 ">
             An  peer-reviewed, open-access journal that aims to publish original, high-quality research across a wide range of scientific disciplines.It provides a professional platform for innovative studies that advance global scientific knowledge, with key focus areas including Pharmaceutical Sciences, Life Sciences, Health Sciences, Engineering, and related fields.
            </p>
            {/* <p className="mt-2 text-sm md:text-lg text-gray-300">
              (ISO 9001:2015 Certified International Journal) ISSN: 0975-4725;
              CODEN(USA): IJPS00
            </p> */}

            <div className="flex flex-col md:flex-row gap-4 justify-center mt-6">
              <a
                href="/submit"
                className="px-6 py-2 bg-orange-500 hover:bg-red-500 rounded-full text-sm md:text-lg font-semibold transition-all duration-300"
              >
                Submit Paper
              </a>
              {/* <Link
                to="https://docs.google.com/forms/d/e/1FAIpQLSc9NFQRIPuotTZ1yu5HQaOPWD27jBUd3dUrgM1EGZqlAsIgSA/viewform?usp=preview"
                className="px-6 py-2 bg-orange-500 hover:bg-red-500 rounded-full text-sm md:text-lg font-semibold transition-all duration-300"
              >
                Register Here
              </Link> */}
            </div>

            {/* <div className="flex flex-wrap justify-center gap-6 mt-6">
              <img
                src="https://www.ijpsjournal.com/assetsbackoffice/uploads/ISO.png"
                className="h-12 md:h-20 w-auto"
                alt="ISO"
              />
              <img
                src="https://www.ijpsjournal.com/assetsbackoffice/uploads/UGC_India_Logo (2).png"
                className="h-12 md:h-20 w-auto"
                alt="UGC"
              />
              <img
                src="https://www.ijpsjournal.com/assetsbackoffice/uploads/impact factor.png"
                className="h-12 md:h-20 w-auto"
                alt="Impact"
              />
              <img
                src="https://www.ijpsjournal.com/assetsbackoffice/uploads/ICV.png"
                className="h-12 md:h-20 w-auto"
                alt="ICV"
              />
            </div> */}
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>



       
        <section className="bg-white py-20" id="about">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div data-aos="fade-right">
            <img
              src={ahome}
              alt="About us"
              className="w-full "
            />
          </div>

          {/* Text */}
         <div data-aos="fade-left">
  <h2 className="text-4xl font-bold text-orange-600 mb-4">
    Who We Are
  </h2>
  <p className="text-gray-700 text-lg mb-6 text-justify">
    <strong>The   International journal of Research welfare society (IJRWS)</strong> is a new, open-access platform designed to support researchers, students, and professionals in publishing original work. We aim to simplify the publication process and provide a global stage for fresh ideas and discoveries.
  </p>

  <ul className="space-y-4">
    <li className="flex items-start gap-3" data-aos="fade-up" data-aos-delay="100">
      <span className="text-orange-600 text-xl">✍️</span>
      <span>
        <strong>Easy Publishing:</strong> Share your research with a simple, hassle-free process.
      </span>
    </li>
    <li className="flex items-start gap-3" data-aos="fade-up" data-aos-delay="200">
      <span className="text-orange-600 text-xl">🔎</span>
      <span>
        <strong>Transparent Review:</strong> Clear and fair review process for all submissions.
      </span>
    </li>
    <li className="flex items-start gap-3" data-aos="fade-up" data-aos-delay="300">
      <span className="text-orange-600 text-xl">🌍</span>
      <span>
        <strong>Global Reach:</strong> Accessible to researchers and readers worldwide.
      </span>
    </li>
    <li className="flex items-start gap-3" data-aos="fade-up" data-aos-delay="400">
      <span className="text-orange-600 text-xl">📈</span>
      <span>
        <strong>Growth Focused:</strong> Helping new authors build their research profile.
      </span>
    </li>
  </ul>

  <button
    className="mt-8 px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg shadow-lg transition duration-300"
    data-aos="zoom-in"
  >
    <Link to="/about">Learn More</Link>
  </button>
</div>

        </div>
      </div>
    </section>
 <div className="pb-12  bg-[#f9fafb]">
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`rounded-xl p-6 text-white shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${feature.bg}`}
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-sm leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
 <section className="bg-orange-100 py-12 text-center">
      <h2 className="text-2xl font-bold text-orange-600 uppercase mb-2">
        Our Statistics
      </h2>
      <p className="text-gray-600 mb-10">
        Guidance to Enhance the Quality of Research.
      </p>

      <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md px-6 py-6 w-64 flex items-center space-x-4"
          >
            <div className="bg-orange-100 p-3 rounded-xl">{stat.icon}</div>
            <div className="text-left">
              <p className="text-xl font-bold text-orange-600">{stat.value}</p>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

       
      </main>

      
    </div>
    <Footer/>
    </>
  );
};

export default Home;
