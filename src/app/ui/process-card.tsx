
    import Image from "next/image"
    import { processData } from "../lib/process-data" 
    import Link from "next/link"
    import { twMerge } from 'tailwind-merge'

    function ProcessCard() {
      return (
        processData.map((step) => {
          return (
            <div key={step.id} className={twMerge('flex flex-col md:flex-row gap-[48px] items-center justify-center w-full', step?.className)} data-aos="fade-up" >
                <div className='flex flex-col gap-[24px] w-full md:w-1/2'>
                    <p className='text-md font-semibold'>{step.step}</p>
                    <h4 className='text-2xl font-bold'>{step.title}</h4>
                    <p className='text-md text-justify'>{step.description}</p>
                </div>
                <Image src={step.image} alt='process' width={376} height={400} className='rounded-xl  w-full md:h-[420px] md:w-1/2' />
            </div>
        
          )
        })
        
    
      )
    }
    
    export default ProcessCard