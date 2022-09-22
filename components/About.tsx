import React from 'react'
import {motion} from "framer-motion"
import { PageInfo } from '../typings';
import { urlFor } from '../sanity';

type Props = {
  pageInfo:PageInfo;
}

export default function About({pageInfo}: Props) {
  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className='relative flex flex-col h-screen mx-auto text-center md:text-left
     md:flex-row max-w-6xl justify-evenly items-center'>
<h3 className='absolute top-20 uppercase 
 tracking-[20px] text-gray-400 text-sm lg:text-2xl'>
  About</h3>
    <motion.img
    initial={{x:-200,opacity:0}}
    transition={{duration:1.5}}
    whileInView={{opacity:1,x:0}}
src={urlFor(pageInfo?.heroImage).url()}
className='-mb-14 mt-10 md:mt-0  md:mb-0 flex-shrink-0 w-32 h-32 
rounded-full object-cover
 md:rounded-lg md:w-72 md:h-72
'
    />
    <div className='space-y-10 mt-10 md:mt-0 rounded-lg border-2 border-[#F7AB0A]/20 md:p-5'>
      <h4 className='text-xl mt-6 text-center animate-pulse font-semibold'>
        Let me introduce myself
        </h4>
        <p className='text-base w-[300px] 
        h-36 overflow-y-scroll mx-auto lg:w-[450px] scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]'>
      {pageInfo?.backgroundInformation}

        </p>

    </div>
  


    </motion.div>
  )
}