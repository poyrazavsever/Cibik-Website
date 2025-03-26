import React from "react";

const Cibik: React.FC = () => {
  return (
    <div className="flex flex-col items-center p-6 max-w-5xl mx-auto my-16">
      {/* Logo */}
      <div className="w-24 h-24 rounded-full mb-4" >
          <img src="Logos/cibik.png" alt="CibikLogo" />
      </div>


      {/* Başlık */}
      <h1 className="text-3xl font-bold mb-4 text-dark-green">Çıbık</h1>

      {/* Açıklama Metni */}
      <p className="text-center text-neutral-600 mb-8">
        Projemiz, iç mekân bitki yetiştiriciliğini kolaylaştırmak ve daha verimli hale getirmek için bir cihaz ve mobil uygulama geliştirmiştir. Modern yaşamın getirdiği bilgi eksikliği ve zaman yetersizliği, bitki yetiştirme hevesini engellerken, araştırmalar bitki yetiştirmenin psikolojik ve fiziksel faydalarını göstermektedir. Geliştirdiğimiz cihaz, toprak nemi ve sıcaklık gibi kritik parametreleri ölçerek bu verileri mobil uygulamaya iletir. Uygulama, anlık bilgiler ve bitki türlerine özel bakım önerileriyle kullanıcıyı yönlendirir. Ayrıca, eğitici ve eğlenceli içeriklerle kullanıcıların ilgisi artırılır. Bu sayede bitki yetiştirme herkes için erişilebilir ve keyifli bir deneyim haline gelmektedir.
      </p>

      {/* Kartlar */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {[
          { title: "Akıllı Cihaz: Çıbık", desc: "Teknoloji ve doğanın birleşimi…", img: "akıllıcihaz.jpeg", link:"akillicihaz"},
          { title: "Mobil Uygulaması", desc: "Bitkilerinizi tek tıkla yönetin!", img: "mobiluygulama.jpeg", link:"mobiluygulama"},
          { title: "Eğlenceli İçerikler!", desc: "Eğlenirken öğrenin!", img: "eglenceliicerikler.jpeg" },
          { title: "Tarım Malzemeleri", desc: "Ara ürün satışlarımız!", img: "tarımmalzemeleri.jpeg" },
        ].map((card, index) => (
          <div key={index} className="border border-neutral-200 p-4 rounded-lg flex flex-col items-center">
            <img src={`Images/${card.img}`} alt={card.title} className="w-full max-h-96 object-cover rounded-sm mb-4" />
            <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
            <p className="text-gray-600 mb-4">{card.desc}</p>
            <a href={`cibik/${card.link}`} className="bg-dark-green text-white px-4 py-2 hover:bg-green-700 transition-all cursor-pointer">Daha Fazla</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cibik;
