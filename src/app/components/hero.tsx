import React from 'react'
<<<<<<< HEAD
import Button from './button'
import MainButton from '../ui/mainButton';
=======
import MainButton from '../ui/mainButton'
import {Images, LeftImages, RightImages} from '../lib/hero-data'
>>>>>>> yo-branch

export default function Hero() {
    
  return (
    <section id='Hero' className='flex flex-col lg:flex-row items-center justify-center bg-white gap-8 py-8 lg:py-0 lg:px-[64px]'>
        
        {/* Mobile Image Scroll */}
        <div className="lg:hidden relative overflow-hidden">
            <div className="flex gap-4 animate-scroll">
                {[...Images, ...Images].map((src, index) => (
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
<<<<<<< HEAD
                <MainButton link='#contact'>Get in Touch</MainButton>
                <MainButton link='#projects' className='bg-white text-main outline outline-main outline-2 px-8 py-4'>Our Work</MainButton>
                {/* <Button   text='Get in Touch'  className='px-8 py-4'/>
                <Button text='Our Work' className='bg-white text-main outline outline-main outline-2 px-8 py-4' /> */}
=======
                <MainButton  className='py-4 px-8'>Get in Touch</MainButton>
                <MainButton  className='bg-white text-main outline outline-main outline-2 px-8 py-4' linked='#Portfolio' >Our Work</MainButton>
>>>>>>> yo-branch
            </div>
        </div>

        {/* Desktop Image Scroll */}
        <div className='flex  gap-4 w-1/2 max-h-[800px]'>
            <div className="hidden lg:block relative overflow-hidden">
                <div className="flex flex-col gap-4 animate-move">
                    {[...LeftImages, ...LeftImages, ...LeftImages, ...LeftImages, ...LeftImages, ...LeftImages, ...LeftImages, ...LeftImages, ...LeftImages, ...LeftImages, ...LeftImages].map((src, index) => (
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
                    {[...RightImages, ...RightImages, ...RightImages, ...RightImages, ...RightImages, ...RightImages, ...RightImages, ...RightImages, ...RightImages, ...RightImages].map((src, index) => (
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
