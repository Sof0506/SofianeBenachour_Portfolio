import React from 'react'
import {
    PhoneIcon,
    MapPinIcon,
    EnvelopeIcon
} from "@heroicons/react/24/solid"
import {useForm,SubmitHandler} from "react-hook-form"
type Inputs={
name:string,
email:string,
subject:string,
message:string,
}
type Props = {}

export default function ContactMe({}: Props) {
  const {register,handleSubmit}=useForm <Inputs>();
  const onSubmit:SubmitHandler<Inputs>=(formData)=>{
    window.location.href= `mailto:sofiane.benachour@univ-constantine2.dz?subject=${formData.subject}&body=Hi,my name is ${formData.name}, ${formData.message}
    (${formData.email})`
  }
  return (
    <div className='relative h-screen flex flex-col text-center
     md:text-left md:flex-row px-10 justify-evenly mx-auto
      items-center'>
     <h3 className='absolute top-20 md:top-24 uppercase tracking-[20px] 
     text-gray-500
      text-sm md:text-2xl'>Contact</h3>
      <div className='mt-52 flex flex-col lg:flex-row space-y-20'>
    
     <div className='flex flex-col items-center justify-center space-x-20 lg:flex-row 
      '>

<div className='items-center space-y-8 -ml-48 -mt-24 mb-10'>
            
            <div className='flex pl-44 items-center mx-auto space-x-5'>
                <PhoneIcon className='h-4 w-4 md:h-6 md:w-6 text-[#F7AB0A] animate-pulse'/>
                <p className='text-sm md:text-lg'>+213 553 73 85
                 27</p>
            
            </div>
            <div className='flex  pl-44 items-center space-x-5'>
                <EnvelopeIcon className='h-4 w-4 md:h-6 md:w-6 text-[#F7AB0A] 
                animate-pulse'/>
                <p className='text-sm md:text-lg truncate'>
                  sofiane.benachour@univ-constantine2.dz</p>
            
            </div>
            <div className='flex pl-44 items-center space-x-5'>
                <MapPinIcon className='h-4 w-4 md:h-6 md:w-6 text-[#F7AB0A] animate-pulse'/>
                <p className='text-sm md:text-lg'>Tichy,Bejaia,Algeria</p>
            </div>
            </div>

     <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col h-[300px] lg:h-[500px] space-y-4 lg:space-y-10'>
            <div className='flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2 '>
                <input {...register('name')} className='contactInput' placeholder='Name' type="text" />
                <input {...register('email')} className='contactInput' placeholder='Email@' type="email" />
            </div>
            <input {...register('subject')} placeholder='Subject' className='contactInput' type="text" />
            <textarea {...register('message')} placeholder='Message' className='contactInput' />
            <button type='submit' className='bg-[#F7AB0A] py-2 lg:py-5 w-1/2 mx-auto md:w-full lg:px-10 rounded-md text-black font-bold text-lg'>Submit</button>
         
        </form>

     </div>
        
      </div>

    </div>
  )
}

