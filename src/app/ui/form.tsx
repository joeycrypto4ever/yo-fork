import React from 'react'

function Form() {
  return (
    <form className='flex flex-col w-[45%] gap-6'>
        <div className='flex flex-col gap-0'>
        <label htmlFor="name">Name</label>
        <input className='h-12 text-black px-4' type="text" id="name" />
        </div>
        <div className='flex flex-col'>
        <label htmlFor="email">Email</label>
        <input className='h-12 text-black px-4' type="email" id="email" />
        </div>
        <div className='flex flex-col'>
        <label htmlFor="message">Message</label>
        <textarea className='min-h-[180px] text-black px-4 py-2' id="message" />
        </div>
        <button className='bg-main text-white text-[16px] px-4 py-1 rounded-full'>Submit</button>
    </form>
  )
}

export default Form