import React from "react";

const MobilUygulama: React.FC = () => {
  return (
    <div className="flex flex-col items-center p-6 max-w-5xl mx-auto my-24">
      {/* Fotoğraf + Yazı Bölümleri */}
      {[
        { img: "https://ertechnology.net/wp-content/uploads/2025/01/1-474x1024.jpeg", text: "Mobil uygulama, kullanıcıların IoT cihazlarla entegre çözümlerden faydalanabilmesini sağlamaya yönelik çeşitli özellikler sunmaktadır. Öncelikle, IoT cihazlardan gelen gerçek zamanlı verilerin mobil uygulamaya aktarılması ve bu verilerin bulut tabanlı bir altyapıda saklanması sağlanır. Kullanıcılar, bu verileri grafikler şeklinde görüntüleyerek geçmiş analizlerini yapabilir. Bildirim özelliğiyle, bitki bakımına yönelik ihtiyaç bilgileri kullanıcılara sunulur. “Bitkiniz susadı, su verin!” gibi bildirimlerin yanı sıra, kullanıcılara ortama uygun bitki önerileri ve günün bitkisi gibi öneriler de sunulabilir." },

        { img: "https://ertechnology.net/wp-content/uploads/2025/01/3-473x1024.jpeg", text: "IoT cihazlarının ev Wi-Fi’ına kolayca bağlanması için bir Wi-Fi bağlanma sihirbazı geliştirilmiştir. Bu sihirbaz, otomatik yeniden bağlanma özelliği ve kullanıcı dostu QR kod sistemiyle desteklenerek bağlantı sürecini kolaylaştırır. Ayrıca Bitki kütüphanesi özelliği sayesinde, çeşitli bitkiler için temel bakım bilgileri, ortam gereksinimleri ve bitkilerin hikayelerini de bulunur. Her bitki için sunulan bakım videoları ve rehberler, kullanıcılara daha derinlemesine bilgi sağlar." },

        { img: "https://ertechnology.net/wp-content/uploads/2025/01/4.jpeg", text: "Uygulamanın anlık veri takibi özelliği sayesinde, kullanıcılar bitkilerinin durumunu anında takip edebilir. Sıcaklık, nem ve su seviyesi gibi önemli parametreler grafiklerle görüntülenebilir. Tüm bu özellikler, kullanıcıların bitki bakımını kolay ve etkili bir şekilde yönetmesine olanak tanır." }
      ].map((item, index) => (
        <div key={index} className={`flex flex-col md:flex-row items-center mb-8 justify-between ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
          <img src={item.img} alt={`Mobil Uygulama ${index + 1}`} className="w-64 object-cover rounded-md shadow-md" />
          <p className="text-neutral-600 text-lg md:w-1/2 px-4 text-center md:text-left">{item.text}</p>
        </div>
      ))}
      
      {/* Alt Başlık ve Metin */}
      <h2 className="text-2xl font-semibold mt-6 text-dark-green">Mobil Uygulamanın Geleceği</h2>
      <p className="text-neutral-600 mt-4">
      Çıbık projesi kapsamında, görüntü işleme teknolojisi kullanılarak bitki sağlık analizi yapılması hedeflenmektedir. Bu sistem, bitkilerin türüne özgü sağlık parametrelerini analiz ederek kullanıcıya özelleştirilmiş bakım önerileri sunacaktır. Tohum ekiminden çiçek açma aşamasına kadar olan süreçte, yaprak sayısı ve büyüklüğü, yaprak ve gövde renk tonu, gövde eğimi, gövde uzunluğu ve hastalık/leke analizi gibi parametreler değerlendirilerek bitkinin genel durumu takip edilecektir. Çiçek açma aşamasında ise corolla ve floral diameter ölçümleri, yaprak, gövde ve çiçek renk tonları, yaprak ve çiçek sayısı ile hastalık ve leke analizine odaklanılacaktır.
      </p>

      <p className="text-neutral-600 mt-4">
      Bu süreçte kullanılacak görüntü işleme modelinin geliştirilmesi için ziraat uzmanlarının desteğiyle parametrelerin belirlenmesi, sağlık verilerinin yer aldığı bir veri tabanının oluşturulması ve modelin yüksek doğruluk oranı sağlayacak şekilde optimize edilmesi planlanmaktadır. Modelin, hem bulut tabanlı çözümler hem de mobil cihazlara uygun formatlarda çalışabilecek şekilde tasarlanması öngörülmektedir. Son olarak, kullanıcı dönütlerine dayalı revizyonlarla modelin gerçek dünya uygulamalarına uygun hale getirilmesi sağlanacaktır. Bu sistem, kullanıcıların bitkilerinin sağlık durumunu etkili bir şekilde izlemelerine olanak tanırken, doğru bakım uygulamaları için rehberlik edecektir.
      </p>
    </div>
  );
};

export default MobilUygulama;