import Image from "next/image"
import { servicesData } from "../lib/service-data"

    function ServiceCard() {
      return (
        servicesData.map((service) => {
          return (
            <div  key={service.id} className='flex flex-col items-center  justify-center h-full md:justify-start gap-[24px]' data-aos="fade-up">
              <Image src={service.image} alt={service.title} width={48} height={48} />
              <h5 className='text-xl font-bold'>{service.title}</h5>
              <p className='text-md'>{service.description}</p>
            </div>
        
          )
        })
        
    
      )
    }
    
    export default ServiceCard