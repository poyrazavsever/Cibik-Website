import React from 'react'
import ProductCard from "../components/ProductCard"

const Projects = () => {
  return (
    <div className='container mx-auto my-16 px-4'>

      <div className='flex flex-col items-start gap-3'>
        <h2 className='text-2xl font-semibold text-dark-green'>Projelerimiz</h2>
        <p className='text-neutral-700'>Projelerimizi keşfedin ve doğa dostu çözümlerimizle tanışın!</p>
      </div>

      {/* Responsive Grid Layout */}
      <div className='mt-12'>
        <ProductCard imageUrl='Logos/cibik.png' productName='Çıbık' linkUrl='cibik' productDetail='Projemiz, iç mekân bitki yetiştiriciliğini kolaylaştırmak ve daha verimli hale getirmek için bir cihaz ve mobil uygulama geliştirmiştir. ' thumbnails={[
            'Images/image.png',
            'Images/image.png',
            'Images/image.png',
          ]}/>
        {/* Yeni projeler eklenirse buraya eklenebilir */}
      </div>

    </div>
  )
}

export default Projects
