import React from 'react';
import ProductCard from '../ProductCard';

const Products = () => {
  return (
    <div className='relative py-36'>
      {/* Arka Plan Deseni */}
      <div className='absolute inset-0 bg-patterns -z-10 w-full'></div>

      <div className='flex flex-col items-center gap-12  z-10 container mx-auto'>

        <div className='flex flex-col items-center gap-3'>
          <h2 className='text-2xl font-semibold text-dark-green'>Ürünlerimiz</h2>
          <p className='text-neutral-700'>Ürünlerimizi keşfedin ve doğa dostu çözümlerimizle tanışın!</p>
        </div>

        <div>
          <ProductCard imageUrl='Logos/cibik.png' productName='Çıbık' linkUrl='cibik'/>
        </div>

      </div>
    </div>
  );
}

export default Products;
