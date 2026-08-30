import React from 'react'
import photo from "./assets/dice.png";
import photoTwo from "./assets/fourdice.png";
import { Link } from "react-router-dom";


const FrontPage = () => {
  return (
    <div className='bg-gray-400 min-h-screen px-4 w-full pl-40 flex flex-col md:flex-row md:px-10'>
      <div className=' w-full md:w-[42%] flex flex-col items-centergap-4 gap-8 md:ml-30'>
        
      <img className='w-32 h-32 sm:w-58 sm:h-52 md:w-80 md:h-80 drop-shadow-[0_15px_10px_rgba(100,0,0,0.60)]' src={photo} alt="photo" />

      <img className='w-32 h-32 sm:w-48 sm:h-48 md:w-80 md:h-80 -translate-y-6 md:-translate-y-12 drop-shadow-[0_15px_10px_rgba(100,0,0,0.35)]'src={photoTwo} alt="photo" />
    </div>
    <div>
    <h1 className='font-black  text-5xl sm:text-7xl md:text-9xl sm:ml-50 mt-8 md:mt-50 whitespace-nowrap'>DICE GAME</h1>
    <Link to="/second">
      <button className='px-10 sm:px-16 py-3 text-white bg-black text-lg sm:text-xl md:text-2xl font-bold rounded-xl active:scale-95 cursor-pointer mt-4 md:ml-160 flex justify-center md:justify-start hover:bg-white hover:text-black'>Play Now</button>
    </Link>
    </div>
    </div>
  )
}
export default FrontPage