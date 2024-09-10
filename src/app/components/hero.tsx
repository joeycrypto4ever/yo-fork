import React from 'react'
import Button from './button'

export default function Hero() {
    const images = [
        '/hero 1.jpg',
        '/hero 3.jpg',
        '/hero 4.jpg',
        '/hero 5.jpg',
        '/hero 6.jpg',
        '/hero 2.jpg',
      ];

    const LeftImages = [
        '/hero 1.jpg',
        '/hero 2.jpg',
        '/hero 3.jpg',  
          
    ]
    const RightImages = [
        '/hero 4.jpg',
        '/hero 5.jpg',
        '/hero 6.jpg',
       
    ]
  return (
    <section id='Hero' className='flex flex-col lg:flex-row items-center justify-center gap-8 py-8 lg:py-0 lg:px-[64px]'>
        
        {/* Mobile Image Scroll */}
        <div className="lg:hidden relative overflow-hidden">
            <div className="flex gap-4 animate-scroll">
                {[...images, ...images].map((src, index) => (
                <img
                    key={index}
                    src={src}
                    alt={`Image ${index + 1}`}
                    className="w-[220px] h-[265px] object-cover rounded-2xl"
                />
                ))}
            </div>
        </div>
                
        {/* Text Section */}
        <div className='flex flex-col gap-4 px-8  lg:gap-8 lg:w-1/2 text-center lg:text-left'>
            <h2 className='text-4xl font-bold'  >Transform Your Business<br /> with a Stunning Website</h2>
            <p className='text-md ' >We create professional, tailored websites that help businesses establish a strong online presence. From concept to launch, we deliver engaging digital solutions that attract customers and boost your visibility in the digital marketplace</p>
            <div className='flex justify-center lg:justify-start items-center gap-4' data-aos="zoom-in" >
                <Button   text='Get in Touch'  className='px-8 py-4'/>
                <Button text='Our Work' className='bg-white text-main outline outline-main outline-2 px-8 py-4' />
            </div>
        </div>

        {/* Desktop Image Scroll */}
        <div className='flex  gap-4 w-1/2 max-h-[800px]'>
            <div className="hidden lg:block relative overflow-hidden">
                <div className="flex flex-col gap-4 animate-move">
                    {[...LeftImages, ...LeftImages].map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`Image ${index + 1}`}
                        className="w-[320px] h-[340px] object-cover rounded-2xl"
                    />
                    ))}
                </div>
            </div>

            <div className="hidden lg:block relative overflow-hidden">
                <div className="flex flex-col gap-4 animate-down">
                    {[...RightImages, ...RightImages].map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`Image ${index + 1}`}
                        className="w-[320px] h-[340px] object-cover rounded-2xl"
                    />
                    ))}
                </div>
            </div>

        </div>


    </section>
  )
}
