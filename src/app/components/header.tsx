import Image from 'next/image'
import React from 'react'
import Button from './button'
import Link from 'next/link'
import MainButton from '../ui/mainButton'

function Header() {
  return (
    <header className='hidden sticky top-0 z-50  lg:flex justify-between items-center bg-white/30 backdrop-blur-md  border-white/20 px-[64px] border-b-2'>
      <div className='flex justify-between items-center gap-6'>
      <Link href="#Hero"><Image src="/logo.png" alt="logo" width={119} height={65} /></Link>
      <nav>
        <ul className='flex justify-between items-center gap-4 text-[16px]'>
          <li className='text-md hover:text-main'><Link href='#Services'>Services</Link></li>
          <li className='text-md hover:text-main'><Link href='#Process'>Process</Link></li>
          <li className='text-md hover:text-main'><Link href='#Portfolio'>Portfolio</Link></li>
          <li className='text-md hover:text-main'><Link href='#Testemonial'>Testemonial</Link></li>
          <li className='text-md hover:text-main'><Link href='#Pricing'>Pricing</Link></li>
        </ul>
      </nav>
      </div>
      <MainButton link='#contact'>Get in Touch</MainButton>
    </header>
  )
}

export default Header