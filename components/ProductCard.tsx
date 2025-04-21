import React, { useState, useEffect } from 'react';

interface CardProps {
  imageUrl: string;
  linkUrl: string;
  productName: string;
  productDetail: string;
  thumbnails: string[];
}

const ProductCard: React.FC<CardProps> = ({
  linkUrl,
  imageUrl,
  productName,
  productDetail,
  thumbnails,
}) => {
  const [modalImage, setModalImage] = useState<string | null>(null);

  // ESC tuşuna basınca modal kapansın
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setModalImage(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      {/* Kart */}
      <div className="bg-background border border-neutral-200 rounded-lg flex items-center gap-4 w-full">
        {/* Sol: Logo */}
        <div className="p-12">
          <div className="w-64 h-64 rounded-full overflow-hidden border border-neutral-300">
            <img src={imageUrl} alt={`${productName} Logo`} className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Sağ: Metin ve Buton */}
        <div className="flex flex-col gap-2 justify-between h-full">
          <h2 className="text-2xl font-semibold text-neutral-900 mb-2">{productName}</h2>
          <p className="text-neutral-700 text-sm mb-4">{productDetail}</p>

          {/* Küçük Görseller */}
          <div className="flex items-center gap-2 mb-4">
            {thumbnails.map((thumbUrl, index) => (
              <div
                key={index}
                className="w-16 h-16 rounded-md overflow-hidden border border-neutral-300 cursor-pointer"
                onClick={() => setModalImage(thumbUrl)}
              >
                <img
                  src={thumbUrl}
                  alt={`${productName} Görseli ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Detaylar Butonu */}
          <div>
            <a
              href={`/${linkUrl}`}
              className="bg-dark-green text-white py-3 px-6 font-medium hover:-translate-y-1 transition-all rounded"
            >
              Detaylar
            </a>
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalImage && (
        <div
          className="fixed inset-0 z-50 backdrop-blur-md backdrop-brightness-75 bg-white/10 flex items-center justify-center"
          onClick={() => setModalImage(null)}
        >
          <div
            className="bg-white p-4 rounded-lg shadow-lg max-w-[90%] max-h-[90%]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={modalImage}
              alt="Büyük Görsel"
              className="max-w-full max-h-[80vh] object-contain rounded"
            />
          </div>
        </div>
      )}

    </>
  );
};

export default ProductCard;
