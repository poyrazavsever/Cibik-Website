import React from "react";
import { FaYoutube, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-neutral-200 text-neutral-800 p-10 py-16">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0">
        {/* Logo */}
        <div>
          <img src="Logos/ertech.png" alt="logoForFooter" className="w-24" />
        </div>
        
        {/* Menüler */}
        <div className="flex flex-col md:flex-row gap-36 space-y-6 md:space-y-0 md:space-x-16">

          {/* Hızlı Linkler */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Hızlı Linkler</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-dark-green transition-all">Ana Sayfa</a></li>
              <li><a href="#" className="hover:text-dark-green transition-all">Hakkımızda</a></li>
              <li><a href="#" className="hover:text-dark-green transition-all">Projeler</a></li>
              <li><a href="#" className="hover:text-dark-green transition-all">İletişim</a></li>
            </ul>
          </div>
          
          {/* Projeler */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Projeler</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-dark-green transition-all">Proje 1</a></li>
              <li><a href="#" className="hover:text-dark-green transition-all">Proje 2</a></li>
              <li><a href="#" className="hover:text-dark-green transition-all">Proje 3</a></li>
            </ul>
          </div>
          
          {/* Bizi Takip Edin */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Bizi Takip Edin</h3>
            <div className="flex flex-col space-y-3">
              <a href="#" className="flex items-center space-x-2  hover:text-red-600 transition-all">
                <FaYoutube /> <span>Youtube</span>
              </a>
              <a href="#" className="flex items-center space-x-2  hover:text-pink-600 transition-all">
                <FaInstagram /> <span>Instagram</span>
              </a>
              <a href="#" className="flex items-center space-x-2  hover:text-blue-600 transition-all">
                <FaLinkedin /> <span>LinkedIn</span>
              </a>
            </div>
          </div>

        </div>
      </div>
      
      {/* Copyright n İmza*/}
      <div className="text-center text-sm text-neutral-600 mt-16 flex flex-col items-center gap-4">
        <p>© 2025 Tüm Hakları Saklıdır.</p>

        <p>Created by <a href="https://www.pavsever.com" target="_blank" className="font-mono font-semibold text-neutral-950 hover:text-neutral-600 transition-all">Poyraz Avsever</a> </p>
      </div>
    </footer>
  );
};

export default Footer;
