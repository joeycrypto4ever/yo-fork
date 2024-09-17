import Image from 'next/image'
import { compagnies } from '../lib/compagnies-data'
function Compagnies() {
  
  return (
   <section className='flex justify-center items-center py-8 px-5 md:px-0 md:py-28'>
    <article className='flex flex-col justify-center items-center gap-6'>
        <p data-aos="fade-up" className='text-black text-[16px] font-semibold text-center'>Trusted by top companies around the globe</p>
        <ul data-aos="fade-up" className='flex md:flex-nowrap flex-wrap justify-evenly items-center gap-8'>
            {compagnies.map((compagnie) => (
                <li key={compagnie.name}>
                        <Image width={140} height={60} src={compagnie.logo} alt={compagnie.name} />
                </li>
            ))}
        </ul>
    </article>
   </section>
  )
}

export default Compagnies