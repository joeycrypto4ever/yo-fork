import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <header className='flex justify-between items-center px-8'>
      <div className='flex justify-between items-center gap-6'>
      <Image src="/logo.png" alt="logo" width={100} height={50} />
      <nav>
        <ul className='flex justify-between items-center gap-4 text-{16px]'>
          <li>Services</li>
          <li>Process</li>
          <li>Portfolio</li>
          <li>Testemonial</li>
          <li>Pricing</li>
          <li>About Us</li>
        </ul>
      </nav>
      </div>
      <button className='bg-main text-white text-[16px] px-4 py-1 rounded-full'>Get in Touch</button>
    </header>
  )
}

export default Header