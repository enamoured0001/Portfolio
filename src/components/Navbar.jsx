import React from 'react'
import Mohit from '../assets/Mohit.jpeg'
import { Link } from 'react-scroll';
import { HiOutlineMenu } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { useState } from 'react';


const navbar = () => {
  const [menu,setMenu]=useState(true);
  return (
    <div>
    <div className=' flex shadow-md justify-between fixed top-0 left-0 w-full bg-white '>
        <div className='flex  gap-x-2 pl-20 pt-2 pb-2'>
            <img  className='flex    h-10 w-10 rounded-full' src={Mohit} alt="" />
            <div>
                 <h6>Mohit Kumar <span className='text-blue-700 '>Pandey</span></h6>
                 <h6>Frontend developer</h6>
                 </div>
                
           
        </div>
        <ul className=' hidden  md:flex gap-x-5 pr-30 pt-3  from-neutral-100'>
                    <li>      <Link to="Home" smooth={true} duration={500} className='hover:font-bold hover:text-blue-600 d'>Home</Link></li>
                    <li>      <Link to="Education" smooth={true} duration={500} className='hover:font-bold hover:text-blue-600'>Education</Link></li>
                    <li> <Link to="Skills" smooth={true} duration={500}className='hover:font-bold hover:text-blue-600'>Skills</Link></li>
                    <li><Link to="Contact" smooth={true} duration={500}className='hover:font-bold hover:text-blue-600'>Contact</Link></li>
            
                    <Link to="Contact" smooth={true} duration={500}className='hover:font-bold hover:text-blue-600'> <button  className='bg-blue-600 hover:scale-110 duration-200 rounded-xl pb-3 mb-3 h-8 w-20 text-white font-medium'>
              Hire Me
            </button></Link>
                 </ul>
                 <div className='md:hidden h-2 pt-5 pr-5' onClick={()=>setMenu(!menu)} >
                {   menu?<MdClose  />: <HiOutlineMenu />}
                {
                  menu &&(
                    <ul className='md:hidden flex flex-col  h-screen w-screen text-xl bg-gray-100 pt-10 pl-5 gap-y-3 align-centre text-black'>
                    <li>      <Link to="Home" smooth={true} duration={500} onClick={()=>setMenu(!menu)} className='hover:font-bold hover:text-blue-600 d'>Home</Link></li>
                       <li>      <Link to="Education" smooth={true} duration={500} onClick={()=>setMenu(!menu)} className='hover:font-bold hover:text-blue-600'>Education</Link></li>
                       <li> <Link to="Skills" smooth={true} duration={500} onClick={()=>setMenu(!menu)}className='hover:font-bold hover:text-blue-600'>Skills</Link></li>
                       <li><Link to="Contact" smooth={true} onClick={()=>setMenu(!menu)} duration={500}className='hover:font-bold hover:text-blue-600'>Contact</Link></li>
               
                       <Link to="Contact" smooth={true} duration={500} onClick={()=>setMenu(!menu)} className='hover:font-bold hover:text-blue-600'> <button onClick={()=>setMenu(!menu)} className='bg-blue-600 hover:scale-110 duration-200 rounded-xl pb-3 mb-3 h-8 w-20 text-white font-medium'>
                 Hire Me
               </button></Link>
               

                    </ul>

                  )

                }
                
                 </div>

    </div>    
    



                    </div>
  )
}

export default navbar