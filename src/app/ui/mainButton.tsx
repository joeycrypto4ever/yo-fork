import React from 'react'

function MainButton({className,children}:{className?:string,children:React.ReactNode}) {
  
  return (
    <a href="#contact">
      <button className={`bg-main text-white md:text-[13px] lg:text-[16px] md:py-2 px-4 lg:py-3 rounded-full ${className}`}>{children}</button>
    </a>
    
  )
}

export default MainButton