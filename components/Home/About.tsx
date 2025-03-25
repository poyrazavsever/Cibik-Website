import React from 'react'

const About = () => {
  return (
    <div className='container mx-auto my-24'>
        
        <div className='flex items-center justify-between gap-16'>

            <div className='flex flex-col gap-4 items-start w-1/2'>
                <h2 className='text-2xl font-semibold text-dark-green'>Hakkımızda</h2>

                <p className='text-base text-neutral-700'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta modi non dolore eveniet? Veniam vel, ducimus eligendi magnam, dicta aperiam ad hic quis suscipit consequatur officiis expedita? Repudiandae unde aliquam quas rerum saepe voluptatibus. Dignissimos eum porro laudantium natus sapiente exercitationem dolorum hic. Molestias eos, perferendis quis ut nemo ullam debitis maxime libero vitae nihil iusto consectetur natus non qui!</p>

                <a href="#" className='py-3 px-8 bg-dark-green text-background cursor-pointer hover:-translate-y-1 transition-all'>Daha Fazla</a>

            </div>

            <div>
              <img src="https://picsum.photos/500" alt="teamPhoto" /> 
            </div>


        </div>
        
    </div>
  )
}

export default About