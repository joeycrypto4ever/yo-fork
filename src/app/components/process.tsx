import ProcessCard from '../ui/process-card'
import MainButton from '../ui/mainButton'


export default function Process() {
   
  return (
    <section id='Process' className='text-center lg:text-left px-[24px] md:px-[64px] py-[64px] bg-second md:bg-none md:bg-second' >
        <div className='relative flex flex-col lg:flex-row gap-[80px]'>
            {/* text content */}
            <div className='lg:sticky top-[100px] flex flex-col gap-[16px] lg:w-1/3  h-1/2 '>
                <p className='text-md font-semibold'>OUR PROCESS</p>
                <h3 className='text-3xl font-bold '>Crafting Unique Online Experiences</h3>
                <p className='text-md'>From initial consultation to final launch, we guide you through every step of the website development process.</p>
                <MainButton className='lg:w-1/2 mx-auto md:mx-0 hidden lg:block' data-aos="zoom-in">Get in Touch</MainButton>
            </div>

            {/* card content : steps + image */}

            <div className='flex flex-col gap-[48px] lg:w-2/3 ' data-aos="fade-up">
                <ProcessCard />

            </div>
            {/* button for small and medium screens */}
            <div data-aos="fade-up">
              <MainButton className='w-1/2 mx-auto lg:hidden  py-2 px-6' >Get in Touch</MainButton>
            </div>


            
        </div>
    </section>
  )
}

