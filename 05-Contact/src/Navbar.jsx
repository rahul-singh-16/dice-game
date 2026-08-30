import React from 'react'

const Navbar = () => {
  return (
    <div className=' w-full flex items-center p-3'>
      <h1 className='text-6xl font-black'>Rahul RSR</h1>
      <div className='flex ml-auto text-4xl font-bold gap-10'>
        <h3>Home</h3>
        <h3>About</h3>
        <h3>Contact</h3>
      </div>
    </div>
  )
}

export default Navbar
