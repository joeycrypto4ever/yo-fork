import Image from 'next/image'
import React from 'react'

function Compagnies() {
    //create list of compagnies and their logo and link to their website 
    const compagnies = [
        {
            name: "Company 1",
            logo: "/logo.png",
            link: "https://www.company1.com"
        },
        {
            name: "Company 2",
            logo: "/logo.png",
            link: "https://www.company2.com"
        },
        {
            name: "Company 3",
            logo: "/logo.png",
            link: "https://www.company3.com"
        },
        {
            name: "Company 4",
            logo: "/logo.png",
            link: "https://www.company4.com"
        },
    ]




  return (
   <section className='flex justify-center items-center py-8 px-5 md:px-0 md:py-28'>
    <article className='flex flex-col justify-center items-center gap-6'>
        <p data-aos="fade-up" className='text-black text-[16px] font-semibold text-center'>Trusted by top companies around the globe</p>
        <ul data-aos="fade-up" className='flex md:flex-nowrap flex-wrap justify-between items-center gap-2'>
            {compagnies.map((compagnie) => (
                <li key={compagnie.name}>
                    <a className='flex justify-center items-center'  href={compagnie.link}>
                        <p>{compagnie.name}</p>
                        <Image width={80} height={50} src={compagnie.logo} alt={compagnie.name} />
                    </a>
                </li>
            ))}
        </ul>
    </article>
   </section>
  )
}

export default Compagnies