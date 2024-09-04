import React from 'react'
import Card from '../ui/card'

function Pricing() {
  return (
    <section className='flex flex-col justify-center items-center px-8 py-28 gap-20'>
        <article className='flex flex-col justify-center items-center'>
            <p className='text-[16px] font-semibold'>Affordable</p>
            <p className='text-[48px] font-bold'>Pricing Plans</p>
            <p className='text-[18px]'>Choose the perfect plan for your business needs</p>
        </article>
        <article className='flex justify-center items-start gap-8'>
            <Card />
        </article>
    </section>
  )
}

export default Pricing