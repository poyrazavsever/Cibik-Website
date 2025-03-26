import React from "react";

const EglenceliIcerikler: React.FC = () => {
  return (
    <div className="flex flex-col items-center p-6 max-w-5xl mx-auto my-24">
      {/* Başlık ve Metin */}
      <h2 className="text-2xl text-dark-green font-semibold mb-4">Gelecek Eğlence Projeleri</h2>
      <p className="text-neutral-700 mb-6"> 
        Akıllı cihazın mobil uygulamasında yer alacak eğlence bölümü, kullanıcıların hem eğlenmesini hem de bitki bakımı konusunda bilgi sahibi olmasını hedefler. Bu bölümde, gerçek zamanlı simülasyon oyunlarıyla bitkilerin su, ışık, sıcaklık ve besin ihtiyaçları simüle edilecek ve kullanıcılar, bildirimler ve hava durumu entegrasyonu gibi fonksiyonlarla bitki bakımını öğrenirken keyifli zaman geçirecek. Değişen görevler ve dinamik zorluklar sayesinde, başarılarını ödüller ve rozetlerle taçlandırabilir. Eğitici içeriklerle desteklenen bu bölümde, animasyonlar ve kısa derslerle bitki bakımı ipuçları paylaşılırken, sosyal etkileşim alanı sayesinde kullanıcılar yarışmalara katılıp liderlik tablosunda yer alabilir. Sürpriz etkinlikler ve hava durumu etkileri gibi özellikler, uygulamayı daha ilgi çekici hale getirirken, fotoğraf tanıma ve paylaşım fonksiyonlarıyla kullanıcılar yetiştirdikleri bitkilerin fotoğraflarını paylaşabilir ve diğer kullanıcılarla etkileşime geçebilir. Eğlence bölümü, bitki bakımı deneyimini hem öğretici hem de eğlenceli bir hale getirerek kullanıcıların uygulamayla güçlü bir bağ kurmasını sağlar.
      </p>
      
      {/* Fotoğraflar */}
      <div className="flex gap-6">
        <img src="https://ertechnology.net/wp-content/uploads/2025/01/1111-1.jpeg" alt="Eğlenceli İçerik 1" className="w-full object-cover rounded-md" />
        <img src="https://ertechnology.net/wp-content/uploads/2025/01/2222-1-1024x682.jpeg" alt="Eğlenceli İçerik 2" className="w-full object-cover rounded-md" />
      </div>
    </div>
  );
};

export default EglenceliIcerikler;