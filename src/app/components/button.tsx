import React from 'react'
import { twMerge } from 'tailwind-merge'

export default function Button( {className, ...props} : {className?: string, text: string}) {
  return (
    <button className={twMerge('bg-main text-white text-[16px] px-4 py-2 rounded-full hover:scale-105 duration-300 ', className)}  >{props.text}</button> //className='bg-main text-white text-[16px] px-4 py-1 rounded-full'>Get in Touch</button>

  )
}
