import { Delete } from 'lucide-react'
import React, { useState } from 'react'

const App = () => {
 
  const [num, setNum] = useState(0)

  const incrementBtn = () => {
    setNum(num+1)
  }
  const decrementBtn = () => {
    if(num === 0){
    }
    else{
      setNum(num-1)
    }
  }
  const jumpBtn = () =>{
    setNum(num+5)
  }
  const restartBtn = () =>{
    setNum(0)
  }

  return (
    <div className='p-20'>
      <h1 className='text-8xl bg-gray-500 w-fit p-6 rounded-3xl ml-65'>{num}</h1>
      <button onClick={incrementBtn} className='border py-2 px-4 rounded-3xl bg-amber-900 text-blue-500 font-bold text-3xl mt-10'>Increment</button>
      <button onClick={decrementBtn} className='border py-2 px-4 rounded-3xl bg-amber-900 text-blue-500 font-bold text-3xl mt-10 ml-10'>Decrement</button>
      <button onClick={jumpBtn}  className='border py-2 px-4 rounded-3xl bg-amber-900 text-blue-500 font-bold text-3xl mt-10 ml-10'>Jump by 5</button>
      <button onClick={restartBtn}  className='border py-2 px-4 rounded-3xl bg-amber-900 text-blue-500 font-bold text-3xl mt-10 ml-10'>Restart</button>
    </div>
  )
}

export default App
