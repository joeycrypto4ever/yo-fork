import Link from 'next/link'
import React from 'react'
<<<<<<< HEAD
import { cn } from '../lib/utils'

function MainButton({className,children,link}:{className?:string,children:React.ReactNode,link:string })  {
  
  return (
    <a href={link}>
    <button className={cn('bg-main text-white md:text-[13px] hover:scale-105 duration-300 lg:text-[16px] md:py-2 px-4 lg:py-3 rounded-full', className)}>
      {children}
    </button>
  </a>
=======
import { twMerge } from 'tailwind-merge'

function MainButton({className,children,linked}:{className?:string,children:React.ReactNode,linked?:string}) {
  
  return (
    <Link href={linked? linked : "#contact"}>
      <button className={twMerge('bg-main text-white md:text-[13px] lg:text-[16px] py-3 px-6 rounded-full hover:scale-105 duration-300 ', className)}
      >{children}</button>
    </Link>
>>>>>>> yo-branch
    
  )
}

export default MainButton