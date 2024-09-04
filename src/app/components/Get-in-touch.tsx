import Form from '../ui/form'
import Image from 'next/image'
import { roboto } from '../utils/font'
function GetInTouch() {
  return (
    <section className='bg-black text-white w-full flex justify-center items-center px-16 py-28'>
        <article className='w-full flex justify-between items-center gap-4'>
            <div className='flex flex-col justify-start items-start gap-6 w-[55%]'>
                <p className={`text-[16px] ${roboto.className}`}>Get in touch</p>
                <h1 className={`text-[56px] font-bold ${roboto.style.fontWeight=700}`}>Let's bring your project to life</h1>
                <p className='text-[16px] font-light'>Submit this form to receive a response from one of our project strategists.</p>
                <div className='w-full flex justify-start items-center gap-4'>
                    <Image src="/rocket.png" alt="logo" width={20} height={18.5} />
                    <p>Fast Reply</p>
                </div>
                <div className='w-full flex justify-start items-center gap-4'>
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