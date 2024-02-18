import React from 'react'
import { GrLinkedinOption,GrMail,GrGithub} from "react-icons/gr";

const Fotter = () => {
  return (
    <div>
         <div className='w-[screen]  bg-black'>
            <div className='flex flex-row p-2 flex-wrap justify-around'>
               <a href="https://www.linkedin.com/in/shivanshu-samadhiya/" target='blank' className='text-lg flex flex-row text-violet-300'>
                <div  className='h-[30px] w-[30px]  rounded-full flex justify-center items-center bg-violet-400'>
                <GrLinkedinOption className='text-white'> </GrLinkedinOption> 
                </div>
                <span className='text-white ml-1 mt-[0.1rem]'>Linkedin</span>
               </a>
    

               <a href="gmail.com" target='blank' className='text-lg flex flex-row text-violet-300'>
                <div  className='h-[30px] w-[30px]  rounded-full flex justify-center items-center bg-violet-400'>
                <GrMail className='text-white'> </GrMail> 
                </div>
                <span className='text-white ml-1 mt-[0.1rem]'>Gmail</span>
               </a>
            
               <a href="https://github.com/Shivanshu-samadhiya" target='blank' className='text-lg flex flex-row text-violet-300'>
                <div  className='h-[30px] w-[30px]  rounded-full flex justify-center items-center bg-violet-400'>
                <GrGithub className='text-white'> </GrGithub> 
                </div>
                <span className='text-white ml-1 mt-[0.1rem]'>Github</span>
               </a>


            </div>

         </div>

     
    </div>
  )
}

export default Fotter