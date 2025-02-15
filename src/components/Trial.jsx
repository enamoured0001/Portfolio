import React, { useState } from 'react';
import Dav from '../images/Dav.jpg'
import KV from '../images/KV.jpg'
import Adgips from '../images/Adgips.jpg'
import adgipsresult from '../images/adgipsresult.jpeg'
import Result10 from '../images/Result10.jpeg'
import Result12 from '../images/Result12.jpeg'
function Box({ title, result, images }) {
  const [showResult, setShowResult] = useState(false);

  const handleClick = () => {
    setShowResult(true);
  };

  return (
    <div className="w-1/3 p-4 bg-gray-100 border border-gray-300 rounded">
      <h2 className="text-lg font-bold mb-2">img</h2>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleClick}
      >
        Show Result
      </button>
      {showResult && (
        <div className="mt-2">
          <p className="text-lg font-bold">{result}</p>
          {images.map((image, index) => (
            <img
              src={image}
              alt={`Result Image ${index + 1}`}
              className="w-full h-48 object-cover mt-2"
              key={index}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function Trail() {
  return (
    <div className="flex justify-center space-x-4">
      <Box
        title="Box 1"
        result="This is the result of Box 1"
        images={[
          {Dav},{Kv}
        ]}
      />
      <Box
        title="Box 2"
        result="This is the result of Box 2"
        images={[
          
            {Dav},{Kv}
        ]}
      />
      <Box
        title="Box 3"
        result="This is the result of Box 3"
        images={[
         
            {Dav},{Kv}
        ]}
      />
    </div>
  );
}

export default Trial;




















const education = () => {
  const [showimage,setshowimage]=useState(false);

  const handleclick=()=> {
    setshowimage(true);
  }
  const handleclose=()=>{
    setshowimage(false);
  }
  const handleclick1=()=> {
    setshowimage(true);
  }
  const handleclose1=()=>{
    setshowimage(false);
  }
  return (
    <div  class="Education" >
       <div className=' bg-yellow-50 flex'>
         <h1 className='text-4xl text-blue-600 font-bold pl-20 pt-5 mt-2'>
           <span className='text-black'>Educational</span> Qualification 
         </h1>
         </div>
         <div className=' bg-yellow-50 flex justify-evenly  gap-x-4 p-5 pl-20 pr-30 mt-8' >
         <box1 className="h-75 w-95 bg-white rounded-2xl hover:scale-110 duration-200 overflow-hidden">
         <img src={Dav}  className="w-full h-40 "alt="Dav" />
         <div className='text-center m-4'>
            <p className='font-bold pb-2'>Matriculation</p>
         <p className='font-medium '>Dav Public School</p>
         <p>percentage marks-89%</p>
         <button onClick={handleclick} className='bg-blue-600 rounded-2xl p-1 mt-2 font-medium'>see result</button>
         {showimage && <div className='fixed top-0 left-0 w-full h-full bg-black  opacity-100 flex  flex-col justify-center items-center ' > (<img src={Result10 } className='w-full h-50 object-contain ' alt='mohit'/>)
         <button onClick={handleclose} className='bg-blue-600 rounded-2xl  p-1 mt-2 font-medium'> close</button>
         </div>}
 </div>
        
         </box1>
         <box1 className="h-75 w-95 bg-white hover:scale-110 duration-200 rounded-2xl overflow-hidden">
         <img src={KV}  className="w-full h-40 "alt="Dav" />
         <div className='text-center m-4'>
            <p className='font-bold pb-2'>Intermediate</p>
         <p className='font-medium '>KV delhi cantt no.1</p>
         <p>percentage marks-86%</p>
         <button onClick={handleclick1} className='bg-blue-600 rounded-2xl p-1 mt-2 font-medium'>see result1</button>
         {showimage && <div className='fixed top-0 left-0 w-full h-full bg-black  opacity-100 flex  flex-col justify-center items-center ' > (<img src={Result12 } className='w-full h-50 object-contain ' alt='mohit'/>)
         <button onClick={handleclose1} className='bg-blue-600 rounded-2xl  p-1 mt-2 font-medium'> close1</button>
         </div>}
         </div>
        
         </box1>
         <box1 className="h-75 w-95 bg-white rounded-2xl  hover:scale-110 duration-200 overflow-hidden">
         <img src={Adgips}  className="w-full h-40 "alt="Dav" />
         <div className='text-center m-4'>
            <p className='font-bold pb-2'>Persuing b.tech</p>
         <p className='font-medium '>guru gobind singh university</p>
         <p>session:-2023-27</p>
         <button className='bg-blue-600 rounded-2xl p-1 mt-2 font-medium'>see result</button>
         </div>
        
         </box1>
        
       </div>


   
    </div>
  )
}















    <div  class="Skills">
         <div>
         <h1 className='text-3xl text-black  pl-20 font-bold pt-5 mt-2'>
           I'M <span className='text-blue-500'>Specialized</span> in
         </h1>
         </div>
         <div className=' bg-yellow-50 flex justify-evenly  gap-x-2 p-5 mt-8' >
         <box1 className="h-55 w-45 bg-gray-50 hover:scale-110 duration-200 rounded-2xl overflow-hidden">
         <img src={Html}  className="w-50 rounded-full h-20 "alt="Dav" />
         <div className='text-center m-4'>
            <p className='font-bold pb-2'>Html</p>
         <p>-Resume of myself</p>
         <div className='flex  gap-x-4'><button className='bg-green-400  hover:bg-blue-600 rounded-2xl mt-2 p-1 w-20 font-medium'>Video </button>
         <button className='bg-blue-600 rounded-2xl w-20 p-1 mt-2 font-medium'>Code</button></div>
         </div>
        
         </box1>
         <box1 className="h-55 w-45 bg-white hover:scale-110 duration-200 rounded-2xl overflow-hidden">
         <img src={Css}  className="w-full rounded-full h-20 "alt="Dav" />
         <div className='text-center m-4'>
            <p className='font-bold pb-2'>CSS</p>
         <p>-Tag trove</p>
         <div className='flex gap-x-4 '><button className='bg-green-400 rounded-2xl mt-2 p-1 w-20 font-medium'>Video </button>
         <button className='bg-blue-600 rounded-2xl w-20 p-1 mt-2 font-medium'>Code</button></div>
         </div>
        
         </box1>
         <box1 className="h-55 w-45 bg-white hover:scale-110 duration-200 rounded-2xl overflow-hidden">
         <img src={Javascript}  className="w-full rounded-full h-20 "alt="Dav" />
         <div className='text-center m-4'>
            <p className='font-bold pb-2'>Javascript</p>
         <p >-Mymeduni</p>
         <div className='flex gap-x-4 '><button className='bg-green-400 rounded-2xl mt-2 p-1 w-20 font-medium'>Video </button>
         <button className='bg-blue-600 rounded-2xl w-20 p-1 mt-2 font-medium'>Code</button></div>
         </div>
        
         </box1>
         <box1 className="h-55 w-45 bg-white hover:scale-110 duration-200 rounded-2xl overflow-hidden">
         <img src={Tailwind}  className="w-full rounded-full h-20 "alt="Dav" />
         <div className='text-center m-4'>
            <p className='font-bold pb-2'>Tailwind css</p>
         <p>-My Portfolio</p>
         <div className='flex gap-x-4 '><button className='bg-green-400 rounded-2xl mt-2 p-1 w-20 font-medium'>Video </button>
         <button className='bg-blue-600 rounded-2xl w-20 p-1 mt-2 font-medium'>Code</button></div>
         
         </div>
        
         </box1>
         
        
       </div>


       <div className=' bg-yellow-50 flex justify-evenly  p-5 mt-8' >
         <box1 className="h-55 w-45 bg-white hover:scale-110 duration-200 rounded-2xl overflow-hidden">
         <img src={Js}  className="w-full h-20 "alt="Dav" />
         <div className='text-center m-4'>
            <p className='font-bold pb-2'>React</p>
         <p>-Resume </p>
         <div className='flex gap-x-4 '><button className='bg-green-400 rounded-2xl mt-2 p-1 w-20 font-medium'>Video </button>
         <button className='bg-blue-600 rounded-2xl w-20 p-1 mt-2 font-medium'>Code</button></div>
         </div>
        
         </box1>
         <box1 className="h-55 w-45 bg-white hover:scale-110 duration-200 rounded-2xl overflow-hidden">
         <img src={First}  className="w-full h-20 "alt="Dav" />
         <div className='text-center m-4'>
            <p className='font-bold pb-2'>C++</p>
         <p>-Tag trove</p>
         <div className='flex gap-x-4 '><button className='bg-green-400 rounded-2xl mt-2 p-1 w-20 font-medium'>Video </button>
         <button className='bg-blue-600 rounded-2xl w-20 p-1 mt-2 font-medium'>Code</button></div>
         </div>
        
         </box1>
         <box1 className="h-55 w-45 bg-white hover:scale-110 duration-200 rounded-2xl overflow-hidden">
         <img src={Canva}  className="w-full h-20 "alt="Dav" />
         <div className='text-center m-4'>
            <p className='font-bold pb-2'>Canva</p>
         <p >-Mymeduni</p>
         <div className='flex gap-x-4 '><button className='bg-green-400 rounded-2xl mt-2 p-1 w-20 font-medium'>Video </button>
         <button className='bg-blue-600 rounded-2xl w-20 p-1 mt-2 font-medium'>Code</button></div>
         </div>
        
         </box1>
         <box1 className="h-55 w-45 bg-white hover:scale-110 duration-200 rounded-2xl overflow-hidden">
         <img src={Canva}  className="w-full h-20 "alt="Dav" />
         <div className='text-center m-4'>
            <p className='font-bold pb-2'>Tailwind css</p>
         <p>-My Portfolio</p>
         <div className='flex gap-x-4 '><button className='bg-green-400 rounded-2xl mt-2 p-1 w-20 font-medium'>Video </button>
         <button className='bg-blue-600 rounded-2xl w-20 p-1 mt-2 font-medium'>Code</button></div>
         
         </div>
        
         </box1>
         
        
       </div>
       </div>