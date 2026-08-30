// import React, { useState } from 'react'
// const App = () => {

//   const [text, setText] =  useState("")
//   const [item, setItem] = useState([]);

//     const handleSubmit = () => {
//     if (text.trim() === "") return;

//     setItem([...item, text]);
//     setText("");
//   };

//   return (
//     <div className='h-auto w-160 bg-gray-400 mt-20 ml-70 rounded px-8 py-8 text-2xl font-semibold'>
//       <div className='flex  gap-20'>
//         <input 
//         value={text} 
//         onChange={(e)=> setText(e.target.value)}
//         className='border-2 pl-4 py-2 w-80' type="text" placeholder='ToDo List'/>

//         <button onClick={handleSubmit} className='px-6 bg-blue-400  border-2 rounded-4xl'>Submit</button>
//       </div>
//       <ul className='mt-6 leading-16'>
//        {item.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   )
// }
// export default App


import React, { useState } from 'react'
const App = () => {

  const [text, setText] = useState("")
  const [item, setItem] = useState([])

  function handleClick(){
    if(text.trim()==="")return
    setItem([...item, text])
     setText("")
  }

   function handleDelete(indexToDelete) {
    const newItems = item.filter((_, index) => index !== indexToDelete)
    setItem(newItems)
  }


  return (
    <div className='h-auto w-160 bg-gray-400 mt-20 ml-70 rounded px-8 py-8 text-2xl font-semibold'>
      <div className='flex  gap-20'>
        <input
        value={text}
        onChange={(e) =>setText(e.target.value)} className='border-2 pl-4 py-2 w-80' type="text" placeholder='ToDo List'/>
      <button onClick={handleClick} className='px-6 bg-blue-400  border-2 rounded-4xl'>Submit</button>
      </div>
      <ul className='mt-6 leading-16'>
        {item.map((elem, index)=>(
         <li key={index}>{elem}
            <button
        onClick={() => handleDelete(index)}
        className='bg-red-500 text-white h-15 w-29  ml-90 rounded-4xl'
      >
        Delete
      </button>
         </li>
         
        ))}
      </ul>
    </div>
  )
}

export default App

