import Link from 'next/link'
import React from 'react'
import { twMerge } from 'tailwind-merge'

function MainButton({className,children,link}:{className?:string,children:React.ReactNode,link?:string}) {
  
  return (
    <Link href={link? link : "#contact"}>
      <button className={twMerge('bg-main text-white md:text-[13px] lg:text-[16px] py-3 px-6 rounded-full hover:scale-105 duration-300 ', className)}
      >{children}</button>
    </Link>
    
  )
}

export default MainButton