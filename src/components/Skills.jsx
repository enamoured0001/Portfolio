import React from 'react'
import Html from '../images/Html.jpg'
import Css from '../images/Css.jpg'
import Javascript from '../images/Javascript.jpg'
import Tailwind from '../images/Tailwind.jpg'
import Js from '../images/Js.jpg'
import First from '../images/First.jpg'
import Canva from '../images/Canva.jpg'
import { useState } from 'react'
import Htmlproject from '../images/Htmlproject.png'
import Tagtrove from '../images/Tagtrove.png'
import Mymeduni from '../images/Mymeduni.png'
import Cproject from '../images/Cproject.png'
import Portfolio from '../images/Portfolio.png'
import Adabi from '../images/Adabi.png'

function Box1({ mohit,title,name,project }) {
  const [showproject, setShowproject] = useState(false);

  const handleClick2 = () => {
    setShowproject(true);
  }
  const handleclose2=()=>{
    setShowproject(false);
  }
  return (
    <div className=" p-5 mt-8  border border-gray-300 h-75 w-65 bg-white overflow-hidden ">
      <img src={mohit} className='w-full h-40  object-contain ' alt='mohit'/>
      <h2 className="text-lg font-bold ">{title}</h2>
      <h2 className="text-lg  ">{name}</h2>
      <button
        className="bg-blue-400 hover:bg-blue-600 500 text-black font-bold py-2 px-4 rounded"
        onClick={handleClick2}
      >
        see project
      </button>
          {showproject && (
 <div className='fixed top-0 left-0 w-full h-full bg-black  opacity-100 flex  flex-col justify-center items-center ' > (<img src={project} className='w-full h-120 object-contain ' alt='mohit'/>)
 <button onClick={handleclose2} className='bg-blue-600 rounded-2xl  p-1 mt-2 font-medium'> close</button>
 </div>
)}
</div>
);
}
const Skills = () => {
  return (
      <div class="Skills">
       <div  className="flex justify-cente flex-col pr-30 space-x-4">
          <div className=' bg-yellow-50  mb-10 flex'>
            <h1 className='text-4xl text-black font-bold pl-20 pt-5 mt-2'>
            I'M <span className='text-blue-600'>Specialized</span> in
            </h1>
            </div>
         <div className=' grid lg:grid-cols-4 lg:grid-rows-2 lg:pl-20 md:pl-20 pl-10 pt-5  md:grid-cols-3 md:grid-rows-4 sm:grid-cols-1 sm:grid-rows-7    gap-y-6 gap-x-8'>
         <Box1
           mohit={Html}
           title="Html"
           name="Resume"
           project={Htmlproject}
         />
           
         <Box1
           mohit={Css}
           title="Css"
           name="resume"
           project={Tagtrove}
         />
         <Box1
           mohit={Javascript}
           title="Javascript"
           name="Mymeduni"
           project={Mymeduni}
         />
           <Box1
           mohit={Tailwind}
           title="Tailwind"
           name="Tagtrove"
           project={Cproject}
         />
           <Box1
           mohit={Js}
           title="React"
           name="Portfolio"
           project={Portfolio}
         />
          <Box1
           mohit={First}
           title="C++"
           name="Many "
           project={Cproject}
         />
           <Box1
           mohit={Canva}
           title="Canva"
           name="Poster"
           project={Adabi}
         />
       </div>
       </div> 

</div>
   
       
  )
}



export default Skills