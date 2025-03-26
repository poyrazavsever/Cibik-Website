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
      <div className='mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        <ProductCard imageUrl='Logos/cibik.png' productName='Çıbık' linkUrl='cibik'/>
        {/* Yeni projeler eklenirse buraya eklenebilir */}
      </div>

    </div>
  )
}

export default Projects
