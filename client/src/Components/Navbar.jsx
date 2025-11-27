import React, { useState, useRef } from "react";
import { FiMenu, FiX, FiChevronDown, FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useLocation, Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const hideTimeoutRef = useRef(null);

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Editorial Board", to: "/Eboard" },
    {
      name: "For Authors",
      dropdown: [
        { name: "Submission Guidelines", to: "/subguide" },
          { name: "Information for Author", to: "/InfoAuthors" },
        { name: "Format Guidelines", to: "/subguide" },
      ],
    },
    { name: "Status", to: "/status" },
    {
      name: "Issue",
      dropdown: [
        { name: "Current issue", to: "/currentpage" },
          { name: "Archive", to: "/archive" },
        
      ],
    },
   // { name: "Tools For Author", to: "/tools" },
    // {
    //   name: "Blogs",
    //   dropdown: [
    //     { name: "Research Tips", to: "/blogs/research-tips" },
    //     { name: "Publishing News", to: "/blogs/news" },
    //   ],
    // },
    { name: "Contact Us", to: "/contact" },
  ];

  const handleMouseEnter = (name) => {
    clearTimeout(hideTimeoutRef.current);
    setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    hideTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 100);
  };


  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  // Map search terms to routes
  const routeMap = {
    "home": "/",
    "about us": "/about",
    "about":"/about",
    "contact": "/contact",
    "editorial board": "/Eboard",
    "guidelines": "/subguide",
    // "submit paper": "https://docs.google.com/forms/d/e/1FAIpQLSdxbgyaKw67_P-SLtto_Gi9qVgv4g3odG9_vxNisnAJVOdFCA/viewform?usp=header",
    "submit paper":"/submit",
    "archives": "/archives",
    "status":"/status"
  };

  const handleSearch = (e) => {
  if (e.key === "Enter") {
    const searchKey = query.trim().toLowerCase();

    if (routeMap[searchKey]) {
      navigate(routeMap[searchKey]); // Absolute path
    } else {
      alert("❌ Invalid search! Page not found.");
    }
  }
};

  return (
    <nav className="w-full fixed top-0 left-0 z-[9999] bg-white shadow">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-4 py-3 md:px-8">
        <div className="text-red-600 font-bold text-xl">
          <img src={logo} className="h-13 w-46" alt="Logo" />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6 text-sm font-medium">
          {navLinks.map((link, index) =>
            link.dropdown ? (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => handleMouseEnter(link.name)}
                onMouseLeave={handleMouseLeave}
              >
                <button className="flex items-center space-x-1 hover:text-blue-600">
                  <span>{link.name}</span>
                  <FiChevronDown />
                </button>
                <div
                  className={`absolute bg-white mt-2 rounded shadow z-50 transition-opacity duration-300 ${
                    activeDropdown === link.name
                      ? "opacity-100 visible"
                      : "opacity-0 invisible"
                  }`}
                >
                  {link.dropdown.map((item, i) => (
                    <Link
                      key={i}
                      to={item.to}
                      className="block px-4 py-2 hover:bg-gray-100 whitespace-nowrap"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={index}
                to={link.to}
                className={`hover:text-blue-600 ${
                  location.pathname === link.to ? "text-blue-600 font-semibold" : ""
                }`}
              >
                {link.name}
              </Link>
            )
          )}
        </div>

        {/* Mobile Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black text-white px-4 py-2 flex flex-col md:flex-row items-center justify-end md:px-8 gap-3">
        <div className="flex items-center bg-gray-900 rounded-full px-3 py-1 w-full md:w-1/3">
      <FiSearch className="text-gray-400 mr-2" />
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleSearch}
        className="bg-transparent outline-none w-full text-sm text-white"
      />
    </div>
        <button className="bg-orange-500 px-5 py-2 rounded-full text-white font-medium hover:bg-orange-600 transition">
        <a href="/submit">  Submit Manuscript</a>
        </button>
      </div>
{/* https://docs.google.com/forms/d/e/1FAIpQLSdxbgyaKw67_P-SLtto_Gi9qVgv4g3odG9_vxNisnAJVOdFCA/viewform?usp=header */}
      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow px-4 pb-4 space-y-2">
          {navLinks.map((link, index) =>
            link.dropdown ? (
              <div key={index}>
                <button
                  onClick={() =>
                    setActiveDropdown(activeDropdown === link.name ? null : link.name)
                  }
                  className="w-full text-left flex items-center justify-between py-2"
                >
                  <span>{link.name}</span>
                  <FiChevronDown
                    className={`transform transition-transform ${
                      activeDropdown === link.name ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {activeDropdown === link.name && (
                  <div className="ml-4">
                    {link.dropdown.map((item, i) => (
                      <Link
                        key={i}
                        to={item.to}
                        className="block py-1 text-sm hover:text-blue-600"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={index}
                to={link.to}
                className={`block py-2 font-medium hover:text-blue-600 ${
                  location.pathname === link.to ? "text-blue-600 font-semibold" : ""
                }`}
              >
                {link.name}
              </Link>
            )
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
