import React, { useState } from "react";

const Navbar = ({text, setText,setMeal}) => {
  const [showMenu, setShowMenu] = useState(false);
  
  const submitHandler =(e) =>{
    setText("")
  }

  return (
    <div className="h-30 w-full flex justify-between">
      <div className="flex items-center gap-35 p-10">
        <div>
          <h1 className="text-6xl mt-5 font-bold bg-linear-to-r from-[#FFC796] to-[#7873F5] bg-clip-text text-transparent">
            Food-Zone
          </h1>
          <div className="mt-6">
            <button
            onClick={()=> setMeal("All")}
            className="bg-red-400 text-white px-4 py-1 cursor-pointer active:scale-95 font-bold text-xl rounded-xl ">All</button>
            
            <button
            onClick={()=>setMeal("Breakfast")}
             className="ml-4 bg-red-400 text-white px-4 py-1 cursor-pointer active:scale-95 font-bold text-xl rounded-xl ">Breakfast</button>

            <button
              onClick={()=>setMeal("Lunch")}
             className="ml-4 bg-red-400 text-white px-4 py-1 cursor-pointer active:scale-95 font-bold text-xl rounded-xl ">Lunch</button>

            <button
            onClick={()=>setMeal("Dinner")}
             className="ml-4 bg-red-400 text-white px-4 py-1 cursor-pointer active:scale-95 font-bold text-xl rounded-xl ">Dinner</button>
          </div>
        </div>
        <div>
          <input
          value={text}
          onChange={(e)=>setText(e.target.value)}
            className="w-110 text-2xl font-bold bg-white text-red-700 border-2 border-black rounded-xl focus:outline-none p-2"
            placeholder="Search food"
          /><i
           onClick={submitHandler}
           className="ri-close-line text-4xl cursor-pointer font-black absolute mt-2 -translate-x-10"></i>  
        </div>

        {!showMenu && (
          <i
          onClick={() => setShowMenu(true)}
          className="ri-equal-line text-6xl text-white cursor-pointer absolute right-5 mt-5"
          ></i>
        )}
      </div>



        {showMenu && (
          <div className="h-183.75 w-110  bg-amber-200 relative p-6">
        {showMenu && (
          <i
            onClick={() => setShowMenu(false)}
            className="ri-close-line absolute size-12  bg-gray-900 text-white rounded-full text-4xl cursor-pointer pl-1  pt-1 right-0 mt-7 mr-6"
          ></i>
        )}
            <h1 className="text-8xl font-bold text-[#1F1F37]">MENU </h1>
            <ul className="list-disc leading-9 ml-10 mt-6 text-xl font-bold text-[#B12A5B]">
              <li>Rice</li>
              <li>Pizza</li>
              <li>Cake</li>
              <li>Salad </li>
              <li>Pasta</li>
              <li>Biryani</li>
              <li>Roti</li>
              <li>Ramen </li>
              <li>Lassi</li>
              <li>Chicken </li>
              <li>Smoothie </li>
              <li>Dosa </li>
            </ul>
      </div>
        )}
    </div>
  );
};
export default Navbar;