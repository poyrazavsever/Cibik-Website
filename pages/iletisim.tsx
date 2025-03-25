import React, { useState } from 'react';

const Iletisim = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Mesajınız gönderildi!');
    // Burada form verilerini backend'e göndermek için gerekli kodu yazabilirsiniz.
  };

  return (
    <div className="container mx-auto px-6 py-16 space-y-12">
      <section className="text-center">
        <h2 className="text-4xl font-bold text-dark-green">Bize Ulaşın</h2>
        <p className="text-neutral-700 mt-4 max-w-2xl mx-auto">
          Herhangi bir sorunuz, öneriniz veya geri bildiriminiz için bizimle iletişime geçebilirsiniz. Size en kısa sürede dönüş yapacağız!
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-16">
        {/* İletişim Formu */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-3xl font-semibold text-dark-green mb-4">İletişim Formu</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-lg text-dark-green" htmlFor="name">Adınız</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-4 mt-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-dark-green"
                placeholder="Adınızı girin"
                required
              />
            </div>

            <div>
              <label className="block text-lg text-dark-green" htmlFor="email">E-posta</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-4 mt-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-dark-green"
                placeholder="E-posta adresinizi girin"
                required
              />
            </div>

            <div>
              <label className="block text-lg text-dark-green" htmlFor="message">Mesajınız</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-4 mt-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-dark-green"
                rows="4"
                placeholder="Mesajınızı buraya yazın"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 mt-6 bg-dark-green text-white rounded-lg hover:bg-dark-green/80 transition duration-300"
            >
              Gönder
            </button>
          </form>
        </div>

        {/* İletişim Bilgileri */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-3xl font-semibold text-dark-green mb-4">İletişim Bilgileri</h3>
          <p className="text-lg text-neutral-700 mb-4">
            Bizimle şu şekilde iletişime geçebilirsiniz:
          </p>

          <div className="space-y-4">
            <div className="flex items-center">
              <span className="text-dark-green mr-4">📧</span>
              <a href="mailto:info@yourcompany.com" className="text-lg text-dark-green hover:underline">
                info@ertech.com
              </a>
            </div>

            <div className="flex items-center">
              <span className="text-dark-green mr-4">📞</span>
              <a href="tel:+1234567890" className="text-lg text-dark-green hover:underline">
                +90 (234) 567-890
              </a>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Iletisim;
