import React from 'react'
import Mohit from '../assets/Mohit.jpeg'
import Gmail from '../images/Gmail.jpg'
import Whatsapp from '../images/Whatsapp.jpg'
import Linkedin from '../images/Linkedin.jpg'
import Telegram from '../images/Telegram.jpg'
import { ReactTyped } from "react-typed";
import { useState } from 'react'



const Home = () => {
  const [showproject, setShowproject] = useState(false);
  
  const handleClick2 = () => {
    setShowproject(true);
  }
  const handleclose2=()=>{
    setShowproject(false);
  }
  return (

    <div class="Home">
      <div className='bg-yellow-50 lg:flex-row md:flex-col  sm:flex-col-reverse flex-col-reverse gap-y-5  pl-5  lg:pl-20 md:pl-10 sm:pl-10  lg:pt-40 md:pt-40 pt-20 pb-10 flex justify-center gap-x-30 '>
        <div>
        <h1 className='text-2xl'>
          Hello it's Me </h1>
          <h1 className='text-5xl gap-x-4 font-bold'>Mohit Kumar  
         <span className='font-bold pl-3 '>Pandey</span>
         </h1>
            <h1 className='text-2xl'> And i am a        
                 <ReactTyped
                 className='font-bold pl-3 text-blue-600'
          strings={["Software Devloper ","Progammer","Coder","Graphic designer"]}
          typeSpeed={40}
          backSpeed={50}
          loop={true}
          /> 
          </h1>
            <p className='flex pt-4'>I'm  passionate about creating user-friendly interfaces and solving complex problems .i'm proficient in html,css,javascript and react .i'm always thrive to learn  and explore more about intelligence and techonologies. </p>
            <p className='pt-5 font-bold'>Available On</p>
            <div className='flex gap-x-4 pt-4'>
            <a href="mailto:enamouredinsaan@gmail.com"><img src={Gmail} alt="linkedin" className='rounded-full hover:scale-110 duration-200 h-10 w-10' /></a>
            <a href="https://wa.me/9718082586"><img src={Whatsapp} alt="linkedin" className='rounded-full hover:scale-110 duration-200 h-10 w-10' /></a>
            <a href="https://www.linkedin.com/in/mohit-pandey-6a01a728a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><img src={Linkedin} alt="linkedin" className='rounded-full hover:scale-110 duration-200 h-10 w-10' /></a>
            <a href="https://telegram.org/dl"><img src={Telegram} alt="linkedin" className='rounded-full hover:scale-110 duration-200 h-10 w-10' /></a>
            </div>
           <a href="https://www.canva.com/design/DAGe4xegPx4/5A_z1C44sYO6-om-4PUytw/edit?utm_content=DAGe4xegPx4&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"> <button  className='bg-blue-600 hover:scale-110 duration-200 rounded-xl m-4 p-2 text-white font-medium'>
              Download CV
            </button></a>
           
        </div>
        <div className='lg:pr-30 md:pr-30 pr-5 ' >
        <img  className='lg:h-100 lg:w-260 md:h-100 md:w-260 h-90 w-400   rounded-full'  src={Mohit} alt="" ></img>
        </div  >
      
        
      </div>

    </div>
  )
}

export default Home