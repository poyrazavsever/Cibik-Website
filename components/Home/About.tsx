import React from 'react';

const About = () => {
  return (
    <div className='container mx-auto my-24 px-6 md:px-12'>
      
      <div className='flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16'>

        {/* Metin Alanı */}
        <div className='flex flex-col gap-4 items-start w-full md:w-1/2 text-center md:text-left'>
          <h2 className='text-xl md:text-2xl font-semibold text-dark-green'>Hakkımızda</h2>

          <p className='text-sm md:text-base text-neutral-700'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta modi non dolore eveniet? 
            Veniam vel, ducimus eligendi magnam, dicta aperiam ad hic quis suscipit consequatur officiis expedita? 
            Repudiandae unde aliquam quas rerum saepe voluptatibus.
          </p>

          <a href="#" className='py-3 px-6 md:px-8 bg-dark-green text-background cursor-pointer hover:-translate-y-1 transition-all'>
            Daha Fazla
          </a>
        </div>

        {/* Görsel Alanı */}
        <div className='w-full md:w-1/2 flex justify-center'>
          <img 
            src="https://picsum.photos/500" 
            alt="teamPhoto" 
            className="w-full max-w-[400px] md:max-w-[500px] rounded-lg shadow-lg"
          />
        </div>

      </div>
      
    </div>
  );
}

export default About;
