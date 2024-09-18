import Image from "next/image"
import { twMerge } from 'tailwind-merge'

export default function ProcessCard({...props}) {
  return (
    <div key={props.id} className={twMerge('flex flex-col md:flex-row gap-[48px] items-center justify-center w-full', props?.className)} >
        <div className='flex flex-col gap-[24px] w-full md:w-1/2'>
            <p className='text-md font-semibold'>{props.step}</p>
            <h4 className='text-2xl font-bold'>{props.title}</h4>
            <p className='text-md text-justify'>{props.description}</p>
        </div>
        <Image src={props.image} alt='process' width={376} height={460} className='rounded-xl  w-full md:h-[460px] md:w-1/2' />
    </div>
  )
}
