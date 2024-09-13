import MainButton from '../ui/mainButton'
import ServiceCard from '../ui/service-card'

export default function Services() {
  
  return (
    <section id='Services' className='text-center flex flex-col gap-[48px] md:gap-[80px] items-center justify-center px-[20px] md:px-[64px] py-[64px]  md:pt-[112px] bg-gradient-to-b from-white to-second'> 
      
      <div data-aos="fade-up" className='flex flex-col gap-[25px]'>
        <p className='text-md font-semibold'>WEBSITES WITH A PURPOSE</p>
        <h3 className='text-3xl font-bold'>WE'VE GOT YOU COVERED</h3>
        <p className='text-md md:w-2/3 w-full text-center mx-auto'>At Winxo Desings, we know precisely what needs to get done to build the right digital experience for your clients. Our team creates digital solutions that aren't just great to look at, but get outstanding results for your company.</p>
      </div>  
        
      <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[32px] items-center justify-center' >
        <ServiceCard />
      </div>
      <div data-aos="fade-up">
        <MainButton className='bg-main px-6 py-3' >Get in Touch</MainButton>
      </div>
     

    </section>
  )
}
