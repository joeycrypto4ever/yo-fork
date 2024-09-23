import Image from 'next/image'
import React from 'react'
import { compagnies } from '../lib/compagnies-data'

function Compagnies() {
   return (
   <section className='flex justify-center items-center py-8  md:py-28 w-full px-[20px] md:px-[64px]'>
    <article className='flex flex-col justify-center items-center gap-6 w-full'>
        <p data-aos="fade-up" className='text-black text-[16px] font-semibold text-center'>Trusted by top companies around the globe</p>
        <ul data-aos="fade-up" className='flex md:flex-nowrap flex-wrap justify-evenly items-center gap-2 w-full'>
            {compagnies.map((compagnie) => (
                <li key={compagnie.name}>
                    <a className='flex justify-center items-center'>
                        <Image width={160} height={80} src={compagnie.logo} alt={compagnie.name} />
                    </a>
                </li>
            ))}
        </ul>
    </article>
   </section>
  )
}

export default Compagnies