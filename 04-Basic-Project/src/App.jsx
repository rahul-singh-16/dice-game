import React from 'react'
import Navbar from './ProjectDivide/Navbar'
import LeftBox from './ProjectDivide/LeftBox'
import RightBox from './ProjectDivide/RightBox'

const App = () => {
  return (
    <div className='bg-gray-400 h-screen w-full text-black p-4'>
      <Navbar/>

      <div className='flex'>
        <LeftBox />
        <RightBox />
      </div>
    </div>
  )
}

export default App
