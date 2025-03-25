import React from 'react'
import ProductCard from "../components/ProductCard"
const Projects = () => {
  return (
    <div className='container mx-auto my-16'>

        <div className='flex flex-col items-start gap-3'>
          <h2 className='text-2xl font-semibold text-dark-green'>Projelerimiz</h2>
          <p className='text-neutral-700'>Projelerimizi keşfedin ve doğa dostu çözümlerimizle tanışın!</p>
        </div>

        <div className='mt-16'>
          <ProductCard imageUrl='Logos/cibik.png' productName='Çıbık' linkUrl='cibik'/>
        </div>

    </div>
  )
}

export default Projects