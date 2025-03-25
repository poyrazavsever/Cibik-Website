import React from 'react'
import ProductCard from '../ProductCard'

const Products = () => {
  return (
    <div className='container mx-auto my-48'>

      <div className='flex flex-col items-center gap-12'>

        <div className='flex flex-col items-center gap-3'>
          <h2 className='text-2xl font-semibold text-dark-green'>Ürünlerimiz</h2>
          <p className='text-neutral-700'>Ürünlerimizi keşfedin ve doğa dostu çözümlerimizle tanışın!</p>
        </div>

        <div>
          <ProductCard imageUrl='Logos/cibik.png' productName='Çıbık' linkUrl='cibik'/>
        </div>

      </div>


    </div>
  )
}

export default Products