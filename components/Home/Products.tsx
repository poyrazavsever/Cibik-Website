import React from 'react';
import ProductCard from '../ProductCard';

const Products = () => {
  return (
    <div className='relative py-24 px-6 md:px-12'>
      <div className='flex flex-col items-start gap-12 z-10 container mx-auto'>

        {/* Başlık Alanı */}
        <div className='flex flex-col items-start gap-3'>
          <h2 className='text-xl md:text-2xl font-semibold text-dark-green'>Ürünlerimiz</h2>
          <p className='text-sm md:text-base text-neutral-700'>
            Ürünlerimizi keşfedin ve doğa dostu çözümlerimizle tanışın!
          </p>
        </div>

        {/* Ürün Kartları */}
        <ProductCard
          imageUrl='Logos/cibik.png'
          productName='Çıbık'
          linkUrl='cibik'
          productDetail='Projemiz, iç mekân bitki yetiştiriciliğini kolaylaştırmak ve daha verimli hale getirmek için bir cihaz ve mobil uygulama geliştirmiştir.'
          thumbnails={[
            'Images/image.png',
            'Images/image.png',
            'Images/image.png',
          ]}
        />

      </div>
    </div>
  );
};

export default Products;
