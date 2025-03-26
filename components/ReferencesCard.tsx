import React from 'react';

interface ReferencesCardProps {
  logoUrl: string;
  name: string;
}

const ReferencesCard: React.FC<ReferencesCardProps> = ({ logoUrl, name }) => {
  return (
    <div className="bg-white border border-neutral-100 rounded-md flex items-center justify-start w-full max-w-md">
      {/* Logo */}
      <div className="flex-shrink-0">
        <img src={logoUrl} alt="Logo" className="w-36 object-contain py-2" />
      </div>

      {/* İsim */}
      <div className="ml-6">
        <h3 className="text-xl font-semibold text-neutral-800">{name}</h3>
      </div>
    </div>
  );
};

export default ReferencesCard;
