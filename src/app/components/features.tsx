import Image from 'next/image'
import Button from './button'

export default function Features() {
  const features = [
    {
      id: 1,
      title: 'SEO Optimization',
      description: "Improve your website's visibility and rank higher in search engine results.",
      image: '/vector1.png'
    },  
    {
      id: 2,
      title: 'Responsive Design',
      description: 'Ensure your website looks great on all devices.',
      image: '/vector2.png'
    },
    {
      id: 3,
      title: 'Customizable Solutions',
      description: 'Tailored to your unique business needs.',
      image: '/vector3.png'
    },
    {
      id: 4,
      title: 'Maintenance & Support',
      description: 'Keeping your website secure, updated, and running smoothly with ongoing support.',
      image: '/vector4.png'
    }
  ]
  return (
    <section id='Services' className='text-center flex flex-col gap-[48px] md:gap-[80px] items-center justify-center px-[20px] md:px-[64px] py-[64px]  md:pt-[112px] bg-gradient-to-b from-white to-second'> 
      
      <div data-aos="fade-up" className='flex flex-col gap-[25px]'>
        <p className='text-md font-semibold'>WEBSITES WITH A PURPOSE</p>
        <h3 className='text-3xl font-bold'>WE'VE GOT YOU COVERED</h3>
        <p className='text-md md:w-2/3 w-full text-center mx-auto'>At Winxo Desings, we know precisely what needs to get done to build the right digital experience for your clients. Our team creates digital solutions that aren't just great to look at, but get outstanding results for your company.</p>
      </div>  
        
      <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[32px] items-center justify-center' >
        {features.map((feature) => (
          <div  key={feature.id} className='flex flex-col items-center  justify-center h-full md:justify-start gap-[24px]' data-aos="fade-up">
            <Image src={feature.image} alt={feature.title} width={48} height={48} />
            <h5 className='text-xl font-bold'>{feature.title}</h5>
            <p className='text-md'>{feature.description}</p>
          </div>
        ))}
      </div>
      <Button  text='Get in Touch' className='bg-main px-8 py-4' data-aos="zoom-in" />

    </section>
  )
}
