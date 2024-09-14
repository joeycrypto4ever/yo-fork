import Image from "next/image"
import { projectsData } from "../lib/projects-data"
import Link from "next/link"
function ProjectCard() {
  return (
    projectsData.map((project) => {
      return (
        <div key={project.id} className='flex flex-col md:flex-row justify-between  text-center md:text-left items-center w-full gap-5 md:gap-20 border-t-[1px] py-12'>
          <div data-aos="fade-down" className='flex md:order-1 order-2 flex-col justify-center  md:items-start gap-2  '>
            <h3 className='text-[32px] font-bold'>{project.name}</h3>
            <p className='text-[16px] font-light'>{project.description}</p>
            <div className='flex md:flex-nowrap flex-wrap w-full justify-center md:justify-start items-center gap-2'>
              {project.tags.map((tag) => (
                <div key={tag} className='flex justify-start items-center'>
                  <p className='text-[14px] font-bold bg-gray px-1 lg:px-4 py-2 w-full'>{tag}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-center items-center gap-2 mt-6 md:mt-8">
              <Link  href={project.link} className=" text-[16px] underline hover:text-main">View Project</Link>
              <Image src="/arrow.png" alt="logo" width={7.12} height={11.41} />
            </div>
          </div>
            <div data-aos="fade-down" className="md:order-2 order-1 ">
              <Image className="rounded-[20px] hover:scale-105 transition-all" src={project.image} alt="logo" width={516} height={500} />
            </div>
        </div>
      )
    })
    

  )
}

export default ProjectCard