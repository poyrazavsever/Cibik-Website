import React from 'react';

interface CardProps {
  imageUrl: string,
  linkUrl: string,
  productName: string,
}

const ProductCard: React.FC<CardProps> = ({linkUrl, imageUrl, productName}) => {
  return (
    <div className="border border-neutral-200 py-6 px-12 rounded-lg w-80 flex flex-col items-center gap-4">
      {/* Logo */}
      <div className="flex justify-start mb-4">
        <img src={imageUrl} alt="Product Logo" className="w-full object-contain" />
      </div>

      {/* Ürün ismi */}
      <div className="text-center text-3xl font-semibold mb-4">{productName}</div>

      {/* Detaylar butonu */}
      <div className="flex justify-start">
        <a href={`/${linkUrl}`} className="bg-dark-green text-white py-3 px-8 hover:-translate-y-1 transition-all">
          Detaylar
        </a>
      </div>

    </div>
  );
};

export default ProductCard;
