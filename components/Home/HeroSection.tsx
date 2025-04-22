import React from 'react';

const HeroSection = () => {
  return (
    <div className="container mx-auto flex flex-col md:flex-row gap-8 bg-transparent mt-12 md:mt-24 px-4 md:px-0">
      {/* Sol Bölüm */}
      <div className="relative flex-1 flex items-center justify-center border border-neutral-200 rounded-lg overflow-hidden py-16 md:py-24">
        <div className="z-20 flex flex-col items-start gap-6 md:gap-10 lg:gap-12 px-4 sm:px-6 md:px-12">
          <h4 className="text-lg md:text-xl lg:text-2xl font-semibold text-green-950">İlhamımızı Doğadan alıyoruz.</h4>
          <div className="flex flex-col items-start gap-2 md:gap-4">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-neutral-900">Kendin Üret Çünkü</h1>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-neutral-50">Dünya İçin Daha İyi</h1>
          </div>
        </div>
        <img
          src="Images/herobanner.png"
          alt="BannerForHeroSection"
          className="absolute top-0 left-0 w-full h-full object-cover -z-10 opacity-70"
        />
      </div>

      {/* Sağ Bölüm */}
      <div className="flex-1 flex flex-col justify-center items-start border border-neutral-200 rounded-lg px-4 sm:px-6 md:px-12 py-12 md:py-24">
        <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900 mb-4">
          Bizi <span className="text-dark-green">Keşfet</span>
        </h2>
        <p className="text-sm md:text-base text-neutral-700 mb-8">
        Çıbık, şehirde yaşayan bireyler ve çocuklar için doğayla yeniden bağ kurmanın teknolojik yoludur. Akıllı sensörlerle donatılmış cihazımız ve yapay zeka destekli mobil uygulamamız sayesinde bitki bakımını kolay, keyifli ve verimli hale getiriyoruz. STEM odaklı eğitim kitimizle çocuklara doğa sevgisi, sorumluluk bilinci ve sürdürülebilir yaşam alışkanlıkları kazandırıyoruz.
        Bitki yetiştiriciliğini herkes için erişilebilir kılan bu sistemi şimdi keşfedin.
        </p>
        <a href='/hakkimizda' className="bg-dark-green hover:-translate-y-1 transition-all text-white font-medium py-3 px-6 rounded cursor-pointer">
          Keşfet
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
