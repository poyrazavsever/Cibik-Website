import React from "react";

const AkilliCihaz: React.FC = () => {
  return (
    <div className="flex flex-col items-center p-6 max-w-5xl mx-auto my-24">
      {/* İlk Bölüm */}
      <h1 className="text-2xl font-semibold mb-4 text-dark-green">Cihazın Güncel Durumu</h1>
      <p className="text-gray-700 mb-6">
      Akıllı cihaz “Çıbık”, sıcaklık, nem ve güneş miktarını ölçebilen bir yapıya sahiptir. Bu parametreler sayesinde ortam analizi yapılabilir ve analiz sonuçlarına dayanarak kullanıcılara ortamlarına uygun bitki tavsiyeleri sunulabilir. Bitki önerileri kolay, orta ve zor seviyelerde kategorize edilerek kullanıcı tercihlerini kolaylaştırır. Çıbık, güneş paneliyle 100 güne kadar şarj dayanıklılığı sunar ve modüler tasarımı sayesinde Type-C bağlantısıyla da şarj edilebilir. Bu özellikler, cihazın pratik ve uzun ömürlü bir kullanım sağlamasına olanak tanır.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <img src="https://ertechnology.net/wp-content/uploads/2025/01/11-576x1024.jpeg" alt="Cihaz 1" className="w-full object-cover rounded-sm" />
        <img src="https://ertechnology.net/wp-content/uploads/2025/01/33-576x1024.jpeg" alt="Cihaz 2" className="w-full object-cover rounded-sm" />
        <img src="https://ertechnology.net/wp-content/uploads/2025/01/22-576x1024.jpeg" alt="Cihaz 3" className="w-full object-cover rounded-sm" />
      </div>

      {/* İkinci Bölüm */}
      <h2 className="text-2xl font-semibold mb-4 text-dark-green">Cihazın Geleceği</h2>
      <p className="text-gray-700 mb-6">
      Gelecekteki versiyonlarıyla, akıllı cihaz “Çıbık Pro” ve “Çıbık Pro+” daha da gelişmiş özellikler sunacaktır. “Çıbık Pro”, uzun süreli otomasyon bakımı için optimize edilmiş bir çözüm sunarken, otomatize sulama sistemi sayesinde su pompası, nem sensöründen gelen verilere dayanarak toprağın ihtiyacına göre çalıştırılacak ve 1 litrelik su haznesinden doğru miktarda sulama yapabilecektir. Ayrıca, toprak sıcaklığı kontrolü için eklenen ısıtıcı ped, sıcaklık sensöründen alınan verilere dayanarak eşik değerlerin altına düştüğünde aktive olacak ve toprağı optimum sıcaklıkta tutacaktır. Artan enerji ihtiyacını karşılamak için güneş panelleri ikiye çıkarılarak menteşeli bir tasarımla cihazlara entegre edilecektir. Nem sensörü ve sıcaklık sensörü sayesinde toprak durumu daha hassas bir şekilde ölçülecek, enerji kaynağı olarak ise güneş panelleri ve uzun ömürlü Li-Po bataryalar kullanılacaktır.
      </p>

      <p className="text-gray-700 mb-6">
      Cihazın daha gelişmiş sürümü olan “Çıbık Pro+”, LCD ekran destekli olarak sunulacaktır. Bu model, telefon yerine LCD ekran üzerinden bitkilerin sağlık durumunu ve diğer önemli parametreleri takip edebilme imkânı sunarak plazalarda yoğun kullanıma uygun hale gelecektir. Böylece, plazalarda yoğun çalışan kullanıcıların bitkilerini rahatça bakım altında tutmasını sağlayacaktır. Yani 3 ürünün de satışa sunulmasıyla kullanıcalar ihtiyaçlarına göre dilediklerini kullanabilirler.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <img src="https://ertechnology.net/wp-content/uploads/2025/01/111-682x1024.jpeg" alt="Özellik 1" className="w-full object-cover rounded-sm" />
        <img src="https://ertechnology.net/wp-content/uploads/2025/01/333-682x1024.jpeg" alt="Özellik 2" className="w-full object-cover rounded-sm" />
        <img src="https://ertechnology.net/wp-content/uploads/2025/01/222-682x1024.jpeg" alt="Özellik 3" className="w-full object-cover rounded-sm" />
      </div>
    </div>
  );
};

export default AkilliCihaz;
