import React from "react";
import TeamCard from "../components/TeamCard";
import { FaLightbulb, FaLeaf, FaShieldAlt } from "react-icons/fa";

const Hakkimizda = () => {
  return (
    <div className="container mx-auto px-6 py-16 space-y-16">
      
      {/* Misyon & Vizyon */}
      <section className="grid md:grid-cols-2 gap-12 text-center md:text-left">
        <div>
          <h2 className="text-3xl font-bold text-dark-green">Misyonumuz</h2>
          <div className="flex flex-col items-start gap-4">
            <p className="text-neutral-700 mt-4 max-w-2xl">
            Misyonumuz, bireylerin doğayla bağ kurmasını sağlamak, çevreye duyarlı bir nesil yetiştirilmesine katkıda bulunmak ve sürdürülebilir bir yaşam tarzını teşvik etmektir. Bitki yetiştirme süreçlerini herkes için kolay, keyifli ve erişilebilir hale getirerek, toprakla uğraşmanın fiziksel ve zihinsel sağlığa olan olumlu etkilerini yaygınlaştırmayı hedefliyoruz.</p>

            <p>Projemizle, özellikle çocuklara çevre bilinci kazandırmayı, onların doğayı tanımasını ve bitki yetiştirmenin sorumluluk bilinci oluşturan etkilerini deneyimlemelerini amaçlıyoruz. Eğitim kitlerimiz, çocuklara toprakla buluşma, doğayı keşfetme ve çevreyi koruma konularında rehberlik ederken; ailelerin birlikte kaliteli zaman geçirmesini sağlayacak araçlar sunuyoruz. Bu süreçte, aile huzurunu ve çocukların doğayla olan bağlarını güçlendirmek önceliklerimiz arasında yer almaktadır.</p>

            <p>Toplumun her kesiminde çevre bilincini artırarak, daha yeşil ve yaşanabilir bir dünya için çalışıyoruz. Her zaman Gazi Mustafa Kemal Atatürk'ün "Ey yükselen yeni nesil, istikbal sizindir." sözünü rehber edinerek, geleceğe umutla bakan, çevresine duyarlı ve fark yaratan bireyler yetiştirmek için kararlılıkla ilerliyoruz..</p>
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-dark-green">Vizyonumuz</h2>
          <div className="flex flex-col items-start gap-4">
            <p className="text-neutral-700 mt-4 max-w-2xl">Vizyonumuz, bireylerin doğayı tanıdığı, çevre bilincini içselleştirdiği ve sürdürülebilir bir yaşam tarzını benimseyerek çevresine katkı sağladığı bir dünya oluşturmaktır. Teknoloji, eğitim ve doğayı bir araya getirerek, daha yeşil ve yaşanabilir bir geleceği şekillendirmek için öncülük etmeyi hedefliyoruz.</p>

            <p>Amacımız, çocuklardan yetişkinlere kadar herkesin çevreyle uyum içinde yaşayabileceği bir kültür oluşturmak ve tarımda yenilikçi teknolojilerle daha verimli, sürdürülebilir üretim modellerini yaygınlaştırmaktır. Gelecek nesillerin çevresel sorumluluğa sahip, doğaya saygılı bireyler olarak yetiştiği bir dünya hayal ediyoruz.</p>

            <p>Bu doğrultuda, her bireyin çevresel farkındalıkla hareket ettiği, doğayı korumayı bir yaşam biçimi haline getirdiği ve sürdürülebilir tarım teknolojileriyle toplumların kendi geleceklerini güvence altına aldığı bir vizyonu benimsemekteyiz.</p>
          </div>
        </div>
      </section>

      {/* Değerlerimiz */}
      <section className="my-48">
        <h2 className="text-2xl font-semibold text-dark-green mb-6">Değerlerimiz</h2>
        <div className="grid md:grid-cols-3 gap-8">

          <div className="px-4 py-6 border border-neutral-200 rounded-sm flex flex-col gap-6 items-start space-x-4">
            <FaLightbulb className="text-dark-green text-3xl" />
            <div>
              <h3 className="text-xl font-semibold text-dark-green">İnovasyon</h3>
              <p className="text-neutral-700 mt-2">Sürekli yenilik peşindeyiz.</p>
            </div>
          </div>

          <div className="px-4 py-6 border border-neutral-200 rounded-sm flex flex-col gap-6 items-start space-x-4">
            <FaLeaf className="text-dark-green text-3xl" />
            <div>
              <h3 className="text-xl font-semibold text-dark-green">Sürdürülebilirlik</h3>
              <p className="text-neutral-700 mt-2">Geleceğe duyarlı çözümler geliştiriyoruz.</p>
            </div>
          </div>

          <div className="px-4 py-6 border border-neutral-200 rounded-sm flex flex-col gap-6 items-start space-x-4">
            <FaShieldAlt className="text-dark-green text-3xl" />
            <div>
              <h3 className="text-xl font-semibold text-dark-green">Güven</h3>
              <p className="text-neutral-700 mt-2">Şeffaflık ve dürüstlük ilkemizdir.</p>
            </div>
          </div>

        </div>
      </section>

      {/* Takım Bölümü */}
      <section className="my-36">
        <h2 className="text-2xl font-semibold text-start text-dark-green mb-6">Takımımız</h2>
        <div className="grid md:grid-cols-3 gap-8 mt-6">
          {/* Takım üyeleri */}

          <TeamCard 
            name="Ahmet Yılmaz" 
            role="Kurucu" 
            imageUrl="Team/emirkemal.jpeg"
            bio="2004 yılında Konya’da doğdum. İlk ve Orta öğrenimimi Konya’da tamamladım. Ortaokul ve lise döneminde farklı spor branşları ile ilgilendim. Güncel olarak lisanslı geleneksel okçuluk yapmaktayım. Ankara Ostim Teknik Üniversitesi’nde tam burslu Elektrik-Elektronik Mühendisliği okuyorum."
            linkedin="https://www.linkedin.com/in/emir-kemal-eraslan-3075b2271/"
            github=""
            email="emirkemaleraslan@gmail.com"
          />

        </div>
      </section>
    </div>
  );
};

export default Hakkimizda;
