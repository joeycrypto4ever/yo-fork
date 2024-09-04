import React from 'react'

function MainButton({className}: {className?: string}) {
  return (
    <button className={`bg-main text-white text-[16px] px-4 py-3 rounded-full ${className}`}>Get in Touch</button>
  )
}

export default MainButton