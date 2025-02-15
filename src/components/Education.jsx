import React from 'react'
import Dav from '../images/Dav.jpg'
import KV from '../images/KV.jpg'
import Adgips from '../images/Adgips.jpg'
import { useState } from 'react'
import Adgipsresult from '../images/Adgipsresult.jpeg'
import Result10 from '../images/Result10.jpeg'
import Result12 from '../images/Result12.jpeg'

function Box({ mohit,title,percentage, result, image }) {
  const [showResult, setShowResult] = useState(false);

  const handleClick = () => {
    setShowResult(true);
  };
  const handleclose=()=>{
    setShowResult(false);
  }
  return (
    <div className="h-85 w-90  p-4 bg-gray-100  border border-gray-300  rounded">
      <img src={mohit} className='w-full h-50 object-contain ' alt='mohit'/>
      <h2 className="text-lg font-bold mb-2">{title}</h2>
      <h2 className="text-lg  mb-2">{percentage}</h2>
      <button
        className="bg-blue-400 hover:bg-blue-600 500 text-black font-bold py-2 px-4 rounded"
        onClick={handleClick}
      >
        show Result
      </button>
            {showResult && (
 <div className='fixed top-0 left-0 w-full h-full bg-black  opacity-100 flex  flex-col justify-center items-center ' > (<img src={image} className='w-full h-120 object-contain ' alt='mohit'/>)
         <button onClick={handleclose} className='bg-blue-600 rounded-2xl  p-1 mt-2 font-medium'> close</button>
         </div>
      )}
    </div>
  );
}


const education = () => {
  return (
    <div class="Education">
    <div  className="flex  justify-center  pr-30 flex-col space-x-4">
       <div className=' bg-yellow-50  mb-10 flex'>
         <h1 className='text-4xl text-blue-600 font-bold pl-20 pt-5 mt-2'>
           <span className='text-black'>Educational</span> Qualification 
         </h1>
         </div>
      <div className='flex lg:flex-row md:flex-row sm:flex-col  contain-style flex-col lg:pl-20 pl-5  pt-5  gap-y-6 gap-x-4'>
      <Box
        mohit={Dav}
        title="Matriculation"
        percentage="percentage=89%"
        result="Result of mohit Matriculation"
        image={Result10}
      />
      <Box
       mohit={KV}
        title="Intermediate"
        percentage="percentage=86%"
        result="Result of mohit intermediate"
        image={Result12}
      />
      <Box
        mohit={Adgips}
        title="B.tech"
        percentage=" percentage=9.2 cgpa"
        result="Result of mohit b.tech"
        image={Adgipsresult}
      />
    </div>
    </div> 
    </div>
  );

}

export default education