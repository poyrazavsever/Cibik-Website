import React from "react";

const TarimMalzemeleri: React.FC = () => {
  return (
    <div className="flex flex-col items-center p-6 max-w-4xl mx-auto my-24">
        
      <h2 className="text-2xl font-semibold mt-6 text-dark-green">Ara Ürünler</h2>
      <p className="text-gray-700 text-center mb-6 mt-4">
      Gelecekte, proje kapsamında kullanıcıların bitki bakımı deneyimini zenginleştirmek amacıyla çeşitli ara ürünlerin satışı gerçekleştirilecektir. Her bitki için özel olarak hazırlanan toprak çeşitleri, yenilenebilir malzemelerle üretilmiş ve organik olarak dönüştürülebilir saksılar, bahçe küreği ve makas gibi botanik işlemler için gerekli ekipmanlar, bitkilerin sağlıklı gelişimi için ihtiyaç duyulan gübreler ve geniş bir tohum yelpazesi sunulacaktır. Bu ek ürünlerle, kullanıcılar hem sürdürülebilir bir yaklaşımla bitki bakımı yapabilecek hem de ihtiyaç duydukları tüm malzemelere kolayca ulaşarak daha kapsamlı bir deneyim yaşayabilecektir. Bu satış stratejisi, projenin botanik tutkunları için bir ekosistem oluşturmasını sağlayarak kullanıcı sadakatini artıracaktır.
      </p>
      
      {/* Fotoğraflar */}
      <div className="flex flex-col md:flex-row gap-6">
        <img src="https://ertechnology.net/wp-content/uploads/2025/01/a-682x1024.jpeg" alt="Tarım Malzemesi 1" className="w-full md:w-1/3 object-cover rounded-md shadow-md" />
        <img src="https://ertechnology.net/wp-content/uploads/2025/01/c-682x1024.jpeg" alt="Tarım Malzemesi 2" className="w-full md:w-1/3 object-cover rounded-md shadow-md" />
        <img src="https://ertechnology.net/wp-content/uploads/2025/01/b-682x1024.jpeg" alt="Tarım Malzemesi 3" className="w-full md:w-1/3 object-cover rounded-md shadow-md" />
      </div>
    </div>
  );
};

export default TarimMalzemeleri;
