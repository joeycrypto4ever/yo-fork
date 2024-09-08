import React from 'react'
import MainButton from '../ui/mainButton'
import ProjectCard from '../ui/project-card'

function OurProjects() {
  return (
    <section className='flex flex-col justify-center items-center px-8 py-28 gap-12 md:gap-20'>
        <article className='flex flex-col justify-center items-start w-full'>
            <p className='text-[16px] font-bold'>projects</p>
            <p className='text-[32px] md:text-[40px] font-bold'>Our Past Projects</p>
            <p className='text-[16px] '>Check out our previous work.</p>
        </article>
        <article className='flex flex-col justify-center items-start gap-8 w-full'>
            <ProjectCard />
        </article>
        <MainButton className='py-2 px-4'>Get in Touch</MainButton>
        </section>
  )
}

export default OurProjects