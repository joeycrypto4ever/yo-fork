"use client"
import { useState } from 'react';
import { userSchema } from '../lib/utils'; 
import z, { ZodError, ZodIssue } from 'zod'
import { log } from 'console';
import Thanks from '../components/Thanks';
function Form() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [emailData, setEmailData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [validationErrors, setValidationErrors] = useState<ZodIssue[] | null>(null); // State for validation errors

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const validatedData = userSchema.parse(emailData);
      setValidationErrors(null);
  
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/send`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(validatedData),
      });
  
      const data = await res.json();
      if (res.ok) {
        setEmailData({ name: '', email: '', message: '' });
        setIsSubmitted(true);
      } else {
        console.error('Error fetching data:', data.error);
      }
  
    } catch (error) {
      if (error instanceof ZodError) {
        setValidationErrors(error.issues);
      } else {
        console.error('An error occurred:', error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col w-full md:w-[45%] gap-6'>
      {isSubmitted ? <Thanks /> : 
        <>
            <div data-aos="fade-down" className='flex flex-col gap-0'>
      <label htmlFor="name">Name</label>
      <input
        value={emailData.name}
        onChange={(e) => setEmailData({ ...emailData, name: e.target.value })}
        className='h-12 text-black px-4'
        type="text"
        id="name"
      />
      {validationErrors &&
          validationErrors.filter((error) => error.path[0] === 'name').map((error) => (
            <p key={error.code} className="text-red-500 text-xs mb-2">
              {error.message}
            </p>
          ))}
    </div>
    <div data-aos="fade-down" className='flex flex-col'>
      <label htmlFor="email">Email</label>
      <input
        value={emailData.email}
        onChange={(e) => setEmailData({ ...emailData, email: e.target.value })}
        className='h-12 text-black px-4'
        type="email"
        id="email"
      />
      {validationErrors &&
          validationErrors.filter((error) => error.path[0] === 'email').map((error) => (
            <p key={error.code} className="text-red-500 text-xs mb-2">
              {error.message}
            </p>
          ))}
    </div>
    <div data-aos="fade-down" className='flex flex-col'>
      <label htmlFor="message">Message</label>
      <textarea
        value={emailData.message}
        onChange={(e) => setEmailData({ ...emailData, message: e.target.value })}
        className='min-h-[180px] text-black px-4 py-2'
        id="message"
      />
      {validationErrors &&
          validationErrors.filter((error) => error.path[0] === 'message').map((error) => (
            <p key={error.code} className="text-red-500 text-xs mb-2">
              {error.message}
            </p>
          ))}
    </div>
    <div data-aos="fade-down">
      <button
        type='submit'
        className='bg-main text-white md:text-[13px] w-full hover:scale-105 duration-300 lg:text-[16px] md:py-2 px-4 lg:py-3 rounded-full'
      >
        Submit
      </button>
    </div>
        </>
      }
    
    </form>
  )
}

export default Form