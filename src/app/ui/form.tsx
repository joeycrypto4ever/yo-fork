"use client"
import { useState } from 'react';
import { addUser } from '../lib/utils';


function Form() {
  const [emailData, setEmailData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:3000/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData),
      });

      const data = await res.json();

      if (res.ok) {
        console.log('Data fetched successfully:', data);
        // Handle success
      } else {
        console.error('Error fetching data:', data.error);
        // Handle error (e.g., display an error message)
      }
    } catch (error) {
      console.error('An error occurred:', error);
      // Handle general errors
    }
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col w-full md:w-[45%] gap-6'>
        <div  data-aos="fade-down" className='flex flex-col gap-0'>
          <label htmlFor="name">Name</label>
          <input onChange={(e) => setEmailData({ ...emailData, name: e.target.value })} className='h-12 text-black px-4' type="text" id="name" />
        </div>
        <div  data-aos="fade-down" className='flex flex-col'>
          <label htmlFor="email">Email</label>
          <input onChange={(e) => setEmailData({ ...emailData, email: e.target.value })} className='h-12 text-black px-4' type="email" id="email" />
        </div>
        <div  data-aos="fade-down" className='flex flex-col'>
          <label htmlFor="message">Message</label>
          <textarea onChange={(e) => setEmailData({ ...emailData, message: e.target.value })} className='min-h-[180px] text-black px-4 py-2' id="message" />
        </div>
        <div data-aos="fade-down">
          <button  type='submit' className='bg-main text-white md:text-[13px] w-full hover:scale-105 duration-300 lg:text-[16px] py-3 px-4 rounded-full'>Submit</button>
        </div>
    </form>
  )
}

export default Form