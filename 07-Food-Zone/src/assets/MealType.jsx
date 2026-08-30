import React from 'react'

const MealType = () => {
  return (
    <div className='flex items-center ml-5 gap-6 font-bold text-white text-2xl'>
      <buton className="px-6 py-1 bouder bg-red-300 active:scale-95 hover:bg-red-900 cursor-pointer rounded-2xl">All</buton>
      <buton className="px-6 py-1 bouder bg-red-300 active:scale-95 hover:bg-red-900 cursor-pointer rounded-2xl">Breakfast</buton>
      <buton className="px-6 py-1 bouder bg-red-300 active:scale-95 hover:bg-red-900 cursor-pointer rounded-2xl">Lunch</buton>
      <buton className="px-6 py-1 bouder bg-red-300 active:scale-95 hover:bg-red-900 cursor-pointer rounded-2xl">Dinner</buton>
    </div>
  )
}

export default MealType
