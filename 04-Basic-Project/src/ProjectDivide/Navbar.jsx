import React from 'react'

const Navbar = () => {
  return (
    <div className='h-25 w-full  flex items-center justify-between'>
      <div>
        <img className='h-20 w-40 ml-6 mt-4' src="nikeLogo.png"/>
      </div>

      <div className=' flex justify-center gap-10 text-2xl font-bold '>
         <h3 className='hover:text-green-700'>MENU</h3>
         <h3 className='hover:text-green-700'>LOCATION</h3>
         <h3 className='hover:text-green-700'>ABOUT</h3>
         <h3 className='hover:text-green-700'>CONTACT</h3>
      </div>

      <div className='text-2xl font-bold px-6 rounded-2xl  text-white py-2 bg-red-500 active:scale-95 cursor-pointer'>
        <button><h1>Login</h1></button>
        </div>
    </div>
  )
}

export default Navbar
