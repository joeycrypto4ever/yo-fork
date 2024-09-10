import MainButton from './mainButton'
import { cardData } from '../lib/card-data'
import Image from 'next/image'
function Card() {
  return (
    //map over cardData and return a card for each object in the array 
    cardData.map((card) => {
      return (
        <div data-aos="flip-right" key={card.id} className='flex flex-col justify-center items-center p-8 gap-8 border-2 border-main rounded-[20px]'>
          <div className='flex flex-col justify-center items-center '>
            <h1 className='md:text-[18px] lg:text-[20px] font-bold'>{card.title}</h1>
            <p className='text-[32px] lg:text-[48px] font-bold'>{card.price}</p>
            <p className='md:text-[12px] lg:text-[16px]'>{card.slogan}</p>
          </div>
          <div className='flex flex-col justify-center items-center gap-4'>
            <ul className='flex flex-col justify-start items-start gap-2 md:gap-4'>
              {card.features.map((feature) => {
                return (
                  <div key={feature} className='flex justify-start items-center gap-4'>
                    <Image src={"/check.png"} alt="logo" width={20} height={18.5} />
                    <li  className='md:text-[12px] lg:text-[16px]'>{feature}</li>
                  </div>
                )
                
              })} 
            </ul>
            <MainButton className='w-full py-2' >Get in Touch</MainButton>

          </div>
        </div>
      )
    })
  )
}

export default Card