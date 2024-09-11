import Image from 'next/image'
import Button from './button'
import ProcessCard from '../ui/process-card'

export default function Process() {
    const steps = [
        {
          id: 1,
          step: "Step 1",
          title: 'Research ',
          description: "Prior to starting the design process, we spend some time getting to know and gain a deep understanding of our clients' businesses. As a top-rated SEO and web design firm, we spend a good chunk of time gaining expert-level knowledge of their industry, their competition, and the latest design trends within that industry.",
          image: '/research.jpg',
          
        },
        {
          id: 2,
          step: "Step 2",
          title: 'Wireframe',
          description: "The next step in our process is to wireframe the structure of the website. This is a pivotal step in planning how the website will appear and which elements take priority to ensure that your most important messages are seen first. This process allows us to visualize how the desired elements work together across all platforms.",
          image: '/wireframe.jpg',
          className : "flex md:flex-row-reverse"
        },
        {
          id: 3,
          step: "Step 3",
          title: 'Design',
          description: "This is the fun part! We take what we have learned, researched, and planned and start creating the look and feel of the site. Utilizing design software, we are able to create a mock-up of your site. Our graphic design team then gets to work with the client, making any needed revisions, in order to get full approval on the design. We don't move forward until our client is delighted with the new website design. Our dedication level is a key reason why we're the SEO and web design firm you want on your side.",
          image: '/design.jpg'
        },
        {
          id: 4,
          step: "Step 4",
          title: 'Build',
          description: "Once the design has been approved, we collaborate with our nerd army (aka the development team) to transform our plans into a live website This process involves testing the website on numerous devices, browers, and screen sizes to guarantee a phenomenal site experience however the site is accessed. Site visitors in Houston and anywhere in the world will have an amazing user experience.",
          image: '/build.jpg',
          className : "flex md:flex-row-reverse"
        },
        {
          id: 5,
          step: "Step 5",
          title: 'Launch',
          description: "When we launch your site, it will be put on your company's domain and made live for the world to see. After this point, your brand new site is accessible to represent your brand and your business. Even after the site is launched, we don't consider our work over. Because we are a fully-dedicated web design firm, we really enjoy working with our clients to evolve the site and continue to make some tweaks to keep you winning the digital game.",
          image: '/launch.jpg'
        }
    ]
  return (
    <section id='Process' className='text-center lg:text-left px-[24px] md:px-[64px] py-[64px]  bg-gradient-to-b from-second to-white md:bg-none md:bg-second' >
        <div className='relative flex flex-col lg:flex-row gap-[80px]'>
            {/* text content */}
            <div className='lg:sticky top-[100px] flex flex-col gap-[16px] lg:w-1/3  h-1/2 '>
                <p className='text-md font-semibold'>OUR PROCESS</p>
                <h3 className='text-3xl font-bold '>Crafting Unique Online Experiences</h3>
                <p className='text-md'>From initial consultation to final launch, we guide you through every step of the website development process.</p>
                <Button text='Get in Touch' className='lg:w-1/2 mx-auto md:mx-0 hidden lg:block' data-aos="zoom-in"/>
            </div>

            {/* card content : step + image */}

            <div className='flex flex-col gap-[48px] lg:w-2/3 ' data-aos="fade-up">
                {steps.map((step) => (<ProcessCard {...step} />




                   
                ))}
            </div>
            {/* button for small and medium screens */}
            <Button text='Get in Touch' className='w-1/2 mx-auto lg:hidden ' data-aos="zoom-in"/>

            
        </div>
    </section>
  )
}

