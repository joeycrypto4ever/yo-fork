import Image from "next/image"
import { projectsData } from "../lib/projects-data"
import Link from "next/link"
function ProjectCard() {
  return (
    //map over projectsData and return a card for each object in the array the name and description and the list of tags and the link view the project
    projectsData.map((project) => {
      return (
        <div key={project.id} className='flex justify-between items-center w-full gap-20 border-t-[1px] py-12'>
          <div className='flex flex-col justify-center items-start gap-2 p-8 '>
            <h3 className='text-[32px] font-bold'>{project.name}</h3>
            <p className='text-[16px] font-light'>{project.description}</p>
            <div className='flex flex-wrap justify-start items-center gap-4'>
              {project.tags.map((tag) => (
                <div key={tag} className='flex justify-center items-center gap-2'>
                  <p className='text-[16px] font-bold bg-gray px-4 py-4'>{tag}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-center items-center gap-2 mt-8">
            <Link  href={project.link} className=" text-[16px] underline">View Project</Link>
            <Image src="/arrow.png" alt="logo" width={7.12} height={11.41} />
            </div>
          </div>
          <div>
            <Image className="rounded-[20px]" src={project.image} alt="logo" width={616} height={600} />
          </div>
        </div>
      )
    })
    

  )
}

export default ProjectCard