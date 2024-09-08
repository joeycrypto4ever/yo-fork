import Form from '../ui/form'
import Image from 'next/image'
import { roboto } from '../utils/font'
function GetInTouch() {
  return (
    <section className='bg-black text-white w-full flex justify-center items-center px-5 py-16 md:px-16 md:py-28'>
        <article className='w-full flex md:flex-row flex-col justify-between items-center gap-4'>
            <div className='flex flex-col justify-center items-center md:items-start gap-6 md:w-[55%] md:text-left text-center'>
                <p className={`text-[16px] ${roboto.className}`}>Get in touch</p>
                <h1 className={`text-[36px] md:text-[56px] font-bold ${roboto.style.fontWeight=700}`}>Let's bring your project to life</h1>
                <p className=' text-[16px] font-light'>Submit this form to receive a response from one of our project strategists.</p>
                <div className='hidden  w-full md:flex justify-start items-center gap-4'>
                    <Image src="/rocket.png" alt="logo" width={20} height={18.5} />
                    <p>Fast Reply</p>
                </div>
                <div className='hidden  w-full md:flex justify-start items-center gap-4'>
                    <Image src="/warning.png" alt="logo" width={20} height={18.5} />
                    <p>No spam</p>
                </div>
            </div>
            <Form />
        </article>
    </section>
  )
}

export default GetInTouch