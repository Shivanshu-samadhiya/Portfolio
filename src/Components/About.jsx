import React from 'react'
import profile from "../assests/profile.png";
import { Styles } from '../utils/Style';
import Resume from "../assests/Resume.pdf"
import {TiArrowDownOutline} from "react-icons/ti"
import "../App.css"
export const About = () => {
  return (
    <div className='flex flex-wrap justify-center items-center mt-10 p-14 ' id='Home'>

      <div className='flex-1 py-10'>
        <span  className={Styles.heroHeadText}>
          Hi, I'm <span className='text-orange-600  ' >
            Shivanshu <br /> samadhiya
          </span>
          <br />
          <span className={Styles.heroSubText}>
            I am a MERN Stack Developer &
            <br />
            Web Designer 
          </span>
        </span>
        <br />
        <div className='w-[14rem] '>
          <a href={Resume}
            download="Resume"
            target='blank'
            rel='noreferrer'
          >
            <div className='p-4 mt-2 w-[13rem] rounded-lg text-orange-500 
          flex justify-center border-2 border-orange-500 hover:border-violet-500 
          shadow-lg hover:shadow-pink-500'>
            <TiArrowDownOutline className='text-lg mr-3 mt-1 text-orange-500' /> Resume 
            </div>
          </a>
        </div>
      </div>
       <div className='flex flex-wrap'>
          <img src={profile} alt="profile" className='element object-contain p-4' />
       </div>
    </div>
  )
}
