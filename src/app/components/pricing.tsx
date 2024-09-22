import React from 'react'
import Card from '../ui/card'

function Pricing() {
  return (
    <section id='Pricing' className='flex flex-col justify-center items-center py-28 gap-20 px-[20px] md:px-[64px]  bg-gradient-to-b from-second to-white'>
        <article data-aos="fade-up" className='flex flex-col justify-center items-center'>
            <p className='text-center text-[16px] font-semibold'>Affordable</p>
            <p className='text-center text-[32px] md:text-[48px] font-bold'>Pricing Plans</p>
            <p className='text-center text-[16px]'>Choose the perfect plan for your business needs</p>
        </article>
        <article className='flex flex-col md:flex-row justify-center items-start gap-4 md:gap-8'>
            <Card />
        </article>
    </section>
  )
}

export default Pricing