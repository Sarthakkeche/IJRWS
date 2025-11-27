 import logo from "../assets/logo.png";

import React from "react";
import {
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Phone
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
                      <img src={logo} className="h-13 w-46 pb-3" alt="Logo" />
          
          <p className="text-sm mb-4">
            Empowering Research. Elevating Innovation. Join our global
            community of scholars and researchers.
          </p>
          <div className="flex space-x-4 mt-2">
            <Facebook className="w-5 h-5 hover:text-orange-500 cursor-pointer" />
            <Twitter className="w-5 h-5 hover:text-orange-500 cursor-pointer" />
            <Instagram className="w-5 h-5 hover:text-orange-500 cursor-pointer" />
            <Linkedin className="w-5 h-5 hover:text-orange-500 cursor-pointer" />
          </div>
        </div>

        {/* Explore */}
        <div>
          <h4 className="text-orange-500 font-semibold text-sm mb-4">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li>Home</li>
            <li>About Us</li>
            <li>Journals</li>
            <li>Editorial Board</li>
            <li>FAQs</li>
          </ul>
        </div>

        {/* Author & Policy */}
        <div>
          <h4 className="text-orange-500 font-semibold text-sm mb-4">For Authors</h4>
          <ul className="space-y-2 text-sm">
            <li>Submit Manuscript</li>
            <li>Author Guidelines</li>
            <li>Publication Ethics</li>
            <li>Review Process</li>
            <li>Processing Charges</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-orange-500 font-semibold text-sm mb-4">Contact Us</h4>
          <p className="flex items-center space-x-2 text-sm mb-2">
            <Mail className="w-4 h-4 text-orange-400" />
            <span>editorijrwsjournal@gmail.com</span>
          </p>
          <p className="flex items-center space-x-2 text-sm mb-2">
            <Phone className="w-4 h-4 text-orange-400" />
            <span>+91 9657778471</span>
          </p>
          <p className="flex items-center space-x-2 text-sm">
            <MapPin className="w-4 h-4 text-orange-400" />
            <span>India</span>
          </p>
          <div className="mt-4">
            <h5 className="text-sm mb-2">Newsletter</h5>
            <div className="flex items-center border border-gray-600 rounded overflow-hidden">
              <input
                type="email"
                placeholder="Your email"
                className="bg-black px-3 py-2 text-sm text-white outline-none w-full"
              />
              <button className="bg-orange-500 px-4 text-sm hover:bg-orange-600">
                →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-800 mt-12 pt-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} IJRWS Journal. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

