import React from "react";
import { FaYoutube, FaInstagram, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-normal-beige text-neutral-800 p-4">
      <div className="container mx-auto flex justify-between items-center">

        {/* Logo */}
        <div>
            <img src="Logos/cibik.png" alt="logoForNavbar" className="w-16" />
        </div>

        {/* Links */}
        <ul className="flex space-x-6">

          <li>
            <a href="#" className="hover:text-dark-green transition-all">Ana Sayfa</a>
          </li>

          <li>
            <a href="#" className="hover:text-dark-green transition-all">Hakkımızda</a>
          </li>

          <li>
            <a href="#" className="hover:text-dark-green transition-all">Projelerimiz</a>
          </li>

          <li>
            <a href="#" className="hover:text-dark-green transition-all">İletişim</a>
          </li>

        </ul>

        {/* Sosyal Medya */}
        <div className="flex space-x-4">
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