import React from "react";
import { MdDeviceHub, MdPhoneIphone, MdEmojiEmotions } from "react-icons/md";
import { GiPlantSeed } from "react-icons/gi";


const Cibik: React.FC = () => {
  return (
    <div className="flex flex-col items-center p-6 max-w-5xl mx-auto my-8 md:my-16">

      {/* Üst Kısım */}
     
      <div className="relative w-full rounded-xl overflow-hidden mb-12">
        {/* Arkaplan Görseli */}
        <img
          src="Images/imageProductBg.png"
          alt="Background"
          className="w-full h-full object-cover absolute inset-0 z-0"
        />

        {/* Beyazlaştırma efekti */}
        <div className="absolute inset-0 bg-white/70 z-10" />

        {/* İçerik */}
        <div className="relative z-20 flex flex-col items-center text-center p-8">
          {/* Logo */}
          <div className="w-24 h-24 rounded-full mb-4">
            <img src="Logos/cibik.png" alt="CibikLogo" />
          </div>

          {/* Başlık */}
          <h1 className="text-3xl font-bold mb-4 text-dark-green">Çıbık</h1>

          {/* Açıklama Metni */}
          <p className="text-neutral-900 max-w-3xl">
            Projemiz, iç mekân bitki yetiştiriciliğini kolaylaştırmak ve daha verimli hale getirmek için bir cihaz ve mobil uygulama geliştirmiştir. Modern yaşamın getirdiği bilgi eksikliği ve zaman yetersizliği, bitki yetiştirme hevesini engellerken, araştırmalar bitki yetiştirmenin psikolojik ve fiziksel faydalarını göstermektedir. Geliştirdiğimiz cihaz, toprak nemi ve sıcaklık gibi kritik parametreleri ölçerek bu verileri mobil uygulamaya iletir. Uygulama, anlık bilgiler ve bitki türlerine özel bakım önerileriyle kullanıcıyı yönlendirir. Ayrıca, eğitici ve eğlenceli içeriklerle kullanıcıların ilgisi artırılır. Bu sayede bitki yetiştirme herkes için erişilebilir ve keyifli bir deneyim haline gelmektedir.
          </p>
        </div>
      </div>


      {/* Kartlar */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {[
          { title: "Akıllı Cihaz: Çıbık", desc: "Teknoloji ve doğanın birleşimi…", icon: <MdDeviceHub size={60} className="text-normal-green mb-4" />, link:"akillicihaz"},
          { title: "Mobil Uygulaması", desc: "Bitkilerinizi tek tıkla yönetin!", icon: <MdPhoneIphone size={60} className="text-normal-green mb-4" />, link:"mobiluygulama"},
          { title: "Eğlenceli İçerikler!", desc: "Eğlenirken öğrenin!", icon: <MdEmojiEmotions size={60} className="text-normal-green mb-4" />, link:"eglenceli-icerikler" },
          { title: "Tarım Malzemeleri", desc: "Ara ürün satışlarımız!", icon: <GiPlantSeed size={60} className="text-normal-green mb-4" />, link:"tarim-malzemeleri" },
        ].map((card, index) => (
          <div key={index} className="border border-neutral-200 p-4 rounded-lg flex flex-col items-center">
            {card.icon}
            <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
            <p className="text-gray-600 mb-4 text-center">{card.desc}</p>
            <a href={`cibik/${card.link}`} className="bg-dark-green text-white px-4 py-2 hover:bg-green-700 transition-all cursor-pointer">Daha Fazla</a>
          </div>
        ))}
      </div>

      {/* Fotoğraf Galerisi */}
      <div className="mt-12 w-full flex flex-col gap-6">
        {/* İlk Satır */}
        <div className="flex flex-col sm:flex-row justify-starts gap-6 w-full">
          {/* Dikey (1. fotoğraf) */}
          <div className="h-auto md:h-96 overflow-hidden">
            <img
              src="Images/image.png"
              alt="Galeri 1"
              className="w-full h-full object-fill"
            />
          </div>

          {/* Yatay (2. fotoğraf) */}
          <div className="h-auto md:h-96 overflow-hidden">
            <img
              src="Images/image2.png"
              alt="Galeri 2"
              className="w-full h-full object-fill"
            />
          </div>
        </div>

        {/* İkinci Satır */}
        <div className="flex flex-col sm:flex-row justify-start gap-6 w-full">
          {/* Yatay (3. fotoğraf) */}
          <div className="h-auto md:h-96overflow-hidden">
            <img
              src="Images/image3.png"
              alt="Galeri 3"
              className="w-full h-full object-fill"
            />
          </div>

          {/* Dikey (4. fotoğraf) */}
          <div className="h-auto md:h-96 overflow-hidden">
            <img
              src="Images/image4.png"
              alt="Galeri 4"
              className="w-full h-full object-fill"
            />
          </div>
        </div>

      </div>



    </div>
  );
};

export default Cibik;
