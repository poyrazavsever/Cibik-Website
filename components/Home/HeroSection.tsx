import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative h-[60vh] md:h-[70vh] lg:h-96 flex items-center">
      <div className="container mx-auto z-20 flex flex-col items-start gap-6 md:gap-10 lg:gap-12 px-6 md:px-12">
        
        <h4 className="text-lg md:text-xl lg:text-2xl font-semibold text-green-950">İlhamımızı Doğadan alıyoruz.</h4>
        
        <div className="flex flex-col items-start gap-2 md:gap-4">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-neutral-900">Kendin Üret Çünkü</h1>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-neutral-50">Dünya İçin Daha İyi</h1>
        </div>

      </div>

      {/* Background banner */}
      <img 
        src="Images/herobanner.png" 
        alt="BannerForHeroSection" 
        className="w-full h-[60vh] md:h-[70vh] lg:h-96 object-cover absolute top-0 left-0 -z-10" 
      />
    </div>
  );
};

export default HeroSection;
