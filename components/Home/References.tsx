import React from 'react'
import ReferencesCard from '../ReferencesCard'


const References = () => {
  return (
    <div className='container mx-auto flex flex-col items-start gap-12 py-36'>

        <div className='flex flex-col items-start gap-3'>
          <h2 className='text-2xl font-semibold text-dark-green'>Değerli Danışmanlarımız</h2>
          <p className='text-neutral-700'>Ürünlerimizi keşfedin ve doğa dostu çözümlerimizle tanışın!</p>
        </div>

        <div className='w-full flex flex-wrap gap-12 items-start justify-start'>
            <ReferencesCard logoUrl='Logos/ostimtechtto.jpeg' name='Ostimtech TTO'/>
            <ReferencesCard logoUrl='Logos/smartnet.jpeg' name='Smart Net'/>
            <ReferencesCard logoUrl='Logos/viveka.jpeg' name='Viveka'/>
        </div>
    </div>
  )
}

export default References