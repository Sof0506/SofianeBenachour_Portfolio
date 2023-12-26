import React from 'react'
import {motion} from "framer-motion"
import { Project } from '../typings'
import { urlFor } from '../sanity';
import Link from 'next/link';
import Image from 'next/image';

type Props = {
  projects:Project[];
}

export default function Projects({projects}: Props) {
  
  return (
    <div className='relative h-screen flex overflow-hidden
     flex-col text-left md:flex-row max-w-full justify-evenly 
     mx-auto items-center z-0'>
    <h3 className='absolute top-24 uppercase tracking-[20px]
     text-gray-500 text-2xl'>Projects</h3>
     <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]'>
       {/*Projects */}
       {projects?.map((project,i)=>(
        <div key={project._id || i} className='w-screen flex-shrink-0 snap-center md:flex-col 
        space-y-5 items-center p-28 justify-center  md:p-44 h-screen'>
            <motion.img
            initial={{y:-300,opacity:0}}
            transition={{duration:1.5}}
            whileInView={{opacity:1,y:0}}
            viewport={{once:true}}
            className='h-16 w-16 mt-20 mx-auto'
            src={urlFor(project.image).url()} 
              alt="Project Title"
              />
        <div className='space-y-10 px-0 md:px-10 mx-auto '>
            <h4 className='text-xs md:text-xl lg:text-2xl font-semibold
             text-center'>
            <span className='underline text-xs md:text-xl lg:text-2xl decoration-[#F7AB0A]/50'>
              Project {i+1} of {projects.length}: </span>
               <Link href={`${project?.linktoBuild}`}>
               <span className='cursor-progress animate-pulse'>{project?.title} </span>
               </Link>
             
                </h4>
                <div className='flex items-center space-x-2 justify-center'>
                {project?.technologies.map((tech,i)=>(
                   <Image
    key={tech._id || i}
    className='h-12 w-12 cursor-pointer'
    src={urlFor(tech.image).url()}
    alt="LOGO"
    width={48}
    height={48}
  />
                ))}
               
                  </div>
                  <p className='pl-5 h-[150px] md:h-full overflow-scroll scrollbar-none text-sm md:text-xl lg:text-xl w-[300px] md:w-full md:text-left'>
                    {project?.summary}
                </p>
                
        </div>
        </div>

       ))}

     </div>

     <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10
      left-0 h-[300px] -skew-y-12'>

     </div>

    </div>
  )
}
