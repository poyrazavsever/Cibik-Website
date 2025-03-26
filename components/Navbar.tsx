import React, { useState } from "react";
import { FaBars, FaTimes, FaYoutube, FaInstagram, FaLinkedin } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-background border-b border-neutral-200 text-neutral-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div>
          <img src="Logos/ertech.png" alt="logoForNavbar" className="w-16" />
        </div>

        {/* Menü Butonu */}
        <div className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
        </div>

        {/* Links */}
        <ul
          className={`absolute border-b border-neutral-400 !z-50 md:static top-16 left-0 w-full md:w-auto bg-background md:flex md:space-x-6 
                      md:items-center md:p-0 p-6 transition-all duration-300 
                      ${menuOpen ? "block" : "hidden"}`}
        >
          <li>
            <a href="/" className="block md:inline hover:text-dark-green transition-all p-2">Ana Sayfa</a>
          </li>
          <li>
            <a href="/hakkimizda" className="block md:inline hover:text-dark-green transition-all p-2">Hakkımızda</a>
          </li>
          <li>
            <a href="/projelerimiz" className="block md:inline hover:text-dark-green transition-all p-2">Projelerimiz</a>
          </li>
          <li>
            <a href="/iletisim" className="block md:inline hover:text-dark-green transition-all p-2">İletişim</a>
          </li>
        </ul>

        {/* Sosyal Medya */}
        <div className="hidden md:flex space-x-4">
          <a href="#" className="text-xl hover:text-red-600 transition-all">
            <FaYoutube />
          </a>
          <a href="#" className="text-xl hover:text-pink-600 transition-all">
            <FaInstagram />
          </a>
          <a href="#" className="text-xl hover:text-blue-600 transition-all">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
