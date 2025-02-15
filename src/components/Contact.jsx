import React from 'react'

const Contact = () => {
  return (
    <div class="Contact">
      <form  action="https://getform.io/f/bolmgrda" method="POST" >
      <div className='bg-yellow-50 shadow-amber-600 flex justify-center  mt-3 pt-40 pb-20'>
      <div className='bg-white  pt-5 pl-5  lg:h-95 lg:w-140 md:w-100 pr-5 rounded-2xl '>
        <p className='font-bold text-3xl'>Send your message</p>
        <p className='text-xl pt-2'> Full Name:- </p>
        <input name='Name' type='text ' placeholder='Enter your name' className='pl-2 rounded-2xl bg-blue-100 w-full border-black-200'></input>
        <p  className='text-xl pt-2'> Email Address:-</p>
        <input name='Email' type='text ' placeholder='Enter your Email' className='pl-2 rounded-2xl bg-blue-100 w-full  border-black-200'></input>
        <p  className='text-xl pt-2'> Message:- </p>
        <input name='Message' type='text ' placeholder='Enter your Message' className='pl-2  bg-blue-100 rounded-2xl w-full h-25  border-black-200'></input>
<div>        <button type="submit" className='bg-blue-600 rounded-2xl p-1 mt-2 w-30 mb-5 font-medium'>send</button>
</div>   
   </div>
      </div>
      </form>
  </div>
  )
}

export default Contact