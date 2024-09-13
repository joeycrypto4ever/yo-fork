import React from 'react'
import MainButton from '../ui/mainButton'
import ProjectCard from '../ui/project-card'

function OurProjects() {
  return (
    <section id='Portfolio' className='flex flex-col justify-center items-center px-8 py-28 gap-12 md:gap-20 bg-gradient-to-b from-second to-white'>
        <article data-aos="fade-down" className='flex flex-col justify-center items-start w-full'>
            <p className='text-[16px] font-bold'>projects</p>
            <p className='text-[32px] md:text-[40px] font-bold'>Our Past Projects</p>
            <p className='text-[16px] '>Check out our previous work.</p>
        </article>
        <article className='flex flex-col justify-center items-start gap-8 w-full'>
            <ProjectCard />
        </article>
        <div data-aos="fade-up" className='w-1/2 md:w-1/4 '>
          <MainButton className='w-full  mx-auto py-2 px-6' >Get in Touch</MainButton>
        </div>
        </section>
  )
}

export default OurProjects