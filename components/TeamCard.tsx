import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

interface TeamCardProps {
  name: string;
  role: string;
  imageUrl: string;
  bio: string;
  github: string;
  linkedin: string;
  email: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ name, role, imageUrl, bio, github, linkedin, email }) => {
  return (
    <div className="p-6 border border-neutral-200 rounded-sm flex flex-col items-center text-center w-80">
      {/* Profil Fotoğrafı */}
      <img src={imageUrl} alt={name} className="w-24 h-24 rounded-full object-cover mb-4" />

      {/* İsim ve Rol */}
      <h3 className="text-xl font-semibold text-dark-green">{name}</h3>
      <p className="text-neutral-600 text-sm mb-2">{role}</p>

      {/* Biyografi */}
      <p className="text-neutral-700 text-sm mb-4 px-4">{bio}</p>

      {/* Sosyal Medya Linkleri */}
      <div className="flex gap-4">

        {github == "" ? "" : <a href={github} target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-xl text-gray-700 hover:text-black transition-all" />
        </a>}

        {linkedin == "" ? "" : <a href={linkedin} target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-xl text-blue-600 hover:text-blue-800 transition-all" />
        </a>}

        {email == "" ? "" : <a href={`mailto:${email}`}>
          <FaEnvelope className="text-xl text-red-400 hover:text-red-700 transition-all" />
        </a>}

      </div>
    </div>
  );
};

export default TeamCard;
