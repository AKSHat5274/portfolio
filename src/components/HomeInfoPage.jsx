import Link from 'next/link';
import React from 'react';
import { arrow } from '../../assets/icons';
const InfoPopup=({text, link,btnText})=>{
    <div className='info-box z-1000'>
        <p className='font-medium sm:text-xl text-center'>
        {text}
        </p>
        <Link href={link} className='neo-brutalism white neo-btn'>
            {btnText}
            <img src={arrow} className='w-4 h-4 object-contain'/>
        </Link>
    </div>
}
const renderContent={
    1:(
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
            Hi, I am <span className='font-semibold'>Akshat Sharma</span>
            <br/>
           A Software Developer and avid Cloud enthusiast
        </h1>
    ),
    // 2:(
    //     <InfoPopup 
    //     text="Expereinced Developer in full stack technologies with expereince in FrontEnd and Backend Development"
    //     link="/about"
    //     btnText="Learn more"
    //     />
    // ),
    2: (
        <div className='info-box'>
          <p className='font-medium sm:text-xl text-center'>
          Expereinced Developer in full stack technologies with expereince in FrontEnd and Backend Development
          </p>
  
          <Link href='/about' className='neo-brutalism-white neo-btn'>
            Learn more
            <img src={arrow.src} alt='arrow' className='w-4 h-4 object-contain' />
          </Link>
        </div>
      ),
    // 3:(
    //     <InfoPopup 
    //     text="Always curious to learn, Here are a few projects i made during my journey"
    //     link="/projects"
    //     btnText="Visit My Portfolio"
    //     />
    // ),
    3:(
        <div className='info-box'>
        <p className='font-medium text-center sm:text-xl'>
        Always curious to learn, Here are a few projects i made during my journey        </p>

        <Link href='/projects' className='neo-brutalism-white neo-btn'>
          Visit my portfolio
          <img src={arrow.src} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    ),
    4:(
        // <InfoPopup
        // text="Need to contact me or looking for a dev"
        // link="/contact"
        // btnText="Contact Me"
        // />
        <div className='info-box'>
      <p className='font-medium sm:text-xl text-center'>
        Need a project done or looking for a dev? <br/> I am just a few keystrokes away
      </p>

      <Link href='/contact' className='neo-brutalism-white neo-btn'>
        Lets talk
        <img src={arrow.src} alt='arrow' className='w-4 h-4 object-contain' />
      </Link>
    </div>
    )

}

const HomeInfoPage = ({currentStage}) => {
    console.log(renderContent[3])
  return renderContent[currentStage]||null;
}

export default HomeInfoPage