'use client'
import Image from 'next/image'
import { useState } from 'react'
import { SlMenu } from "react-icons/sl";
import { AiOutlineClose } from "react-icons/ai";
<<<<<<< HEAD
=======
import MainButton from '../ui/mainButton'
>>>>>>> yo-branch
import Link from 'next/link';
import MainButton from '../ui/mainButton';



export default function MobileHeader() {
    const [open, setOpen] = useState(false)

  return (
    <div className='lg:hidden  sticky top-0 z-50  bg-white/30 backdrop-blur-md '>
        <header className='flex justify-between items-center border-white/20 px-[20px]'>
            <div className='flex justify-between items-center gap-6'>
            <Link href="#Hero"><Image src="/logo.png" alt="logo" width={119} height={65} /></Link>

            </div>
            <button onClick={() => setOpen(!open)}>{open ? (<AiOutlineClose size={30} />) : (<SlMenu size={30} />)}</button>
        </header>
    
        {
        open && (<nav >
            <ul className='flex flex-col justify-between items-center gap-4 text-[16px] py-4'>
              <li className='text-md hover:text-main'><Link href='#Services'>Services</Link></li>
              <li className='text-md hover:text-main'><Link href='#Process'>Process</Link></li>
              <li className='text-md hover:text-main'><Link href='#Portfolio'>Portfolio</Link></li>
              <li className='text-md hover:text-main'><Link href='#Testemonial'>Testemonial</Link></li>
              <li className='text-md hover:text-main'><Link href='#Pricing'>Pricing</Link></li>
<<<<<<< HEAD
              <MainButton link='#contact'>Get in Touch</MainButton>
=======
              <MainButton data-aos="zoom-in" className='py-2 px-6'>Get in Touch</MainButton>

>>>>>>> yo-branch
            </ul>

        </nav>)
        }

    </div>
  )
}
