import React from 'react';
import ReferencesCard from '../ReferencesCard';

const References = () => {
  return (
    <div className='container mx-auto flex flex-col items-center md:items-start gap-12 py-24 px-6 md:px-12'>

      {/* Başlık Alanı */}
      <div className='flex flex-col items-center md:items-start text-center md:text-left gap-3'>
        <h2 className='text-xl md:text-2xl font-semibold text-dark-green'>Değerli Danışmanlarımız</h2>
        <p className='text-sm md:text-base text-neutral-700'>
          Danışmanlarımızla bu yolda daha sağlam ilerliyoruz!
        </p>
      </div>

      {/* Danışman Kartları */}
      <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-center justify-center'>
        <ReferencesCard logoUrl='Logos/ostimtechtto.jpeg' name='Ostimtech TTO' />
        <ReferencesCard logoUrl='Logos/smartnet.jpeg' name='Smart Net' />
        <ReferencesCard logoUrl='Logos/viveka.jpeg' name='Viveka' />
        <ReferencesCard logoUrl='Logos/konya.jpeg' name='Viveka' />
        <ReferencesCard logoUrl='Logos/fablab.jpeg' name='Fark Labs' />
      </div>

    </div>
  );
}

export default References;
