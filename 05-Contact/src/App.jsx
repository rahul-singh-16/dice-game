// import React, { useState } from "react";
// import Navbar from "./Navbar";

// const App = () => {
//   const [name, setName] = useState("");
//   const [mail, setMail] = useState("");
//   const [text, setText] = useState("");
//   const [showName, setShowName] = useState("");
//   const [showMail, setShowMail] = useState("");
//   const [showText, setShowText] = useState("");

//   const handlieClick = () => {
//     setShowName(name);
//     setShowMail(mail);
//     setShowText(text);

//     setMail("");
//     setName("");
//     setText("");
//   };

//   return (
//     <>
//       <Navbar />

//       <div className="flex">
//         <div className="h-full w-[60%]">
//           <div className="p-2">
//             <h1 className="text-5xl font-black ml-20">CONTACT US</h1>
//             <p className="ml-20 mt-4 text-xl font-bold leading-8">
//               <h3>
//                 LET'S CONNECT: WE'RE HERE TO HELP, AND WE'D LOVE TO HEAR FROM
//                 YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT,
//                 YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE,
//                 OR BY PHONE, EMAIL, OR SOCIAL MEDIA.
//               </h3>
//             </p>
//           </div>

//           <div className="flex flex-col pl-40 mt-6 gap-6">
//             <input
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="border h-6 w-80 pl-4 py-5 text-2xl font-bold rounded-xl"
//               type="text"
//               placeholder="Name"
//             />
//             <input
//               value={mail}
//               onChange={(e) => setMail(e.target.value)}
//               className="border h-6 w-80 pl-4 py-5 text-2xl font-bold rounded-xl"
//               type="e-mail"
//               placeholder="E-mail"
//             />
//             <textarea
//               value={text}
//               onChange={(e) => setText(e.target.value)}
//               className="h-30 w-100 pl-4 py-5 text-2xl font-bold rounded-xl border"
//               name="text..."
//               placeholder="TEXT Something..."
//             ></textarea>
//             <button
//               onClick={handlieClick}
//               className="ml-30 h-14 w-36 px-6 py-2 bg-amber-700 text-white font-bold text-2xl rounded-2xl active:scale-95"
//             >
//               Submit
//             </button>
//             <div className="text-xl">
//               {showName && showMail && showText && (
//                 <h1>
//                   Your Name is{" "}
//                   <span className="text-red-400"> {showName} </span>span and
//                   Email is <span className="text-red-400"> {showMail} </span>{" "}
//                   and Thankyou for your lovely text{" "}
//                   <span className="text-red-400"> {showText} </span>
//                 </h1>
//               )}
//             </div>
//           </div>
//         </div>

//         <div className=" w-[50%]">
//           <img
//             className="h-162 w-full"
//             src="https://plus.unsplash.com/premium_vector-1727448490518-477e95ae1ca3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             alt=""
//           />
//         </div>
//       </div>
//     </>
//   );
// };

// export default App;


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import React, { useRef, useState } from "react";
import Navbar from "./Navbar";

const App = () => {

  const nameRef = useRef(null)
  const mailRef = useRef(null)
  const textRef = useRef(null)

  const [showName, setShowName] = useState("");
  const [showMail, setShowMail] = useState("");
  const [showText, setShowText] = useState("");

  const handlieClick = () => {
    setShowName(nameRef.current.value);
    setShowMail(mailRef.current.value);
    setShowText(textRef.current.value);

    
    nameRef.current.value = "";
    mailRef.current.value = "";
    textRef.current.value = "";
  };

  return (
    <>
      <Navbar />

      <div className="flex">
        <div className="h-full w-[60%]">
          <div className="p-2">
            <h1 className="text-5xl font-black ml-20">CONTACT US</h1>
            <p className="ml-20 mt-4 text-xl font-bold leading-8">
              <h3>
                LET'S CONNECT: WE'RE HERE TO HELP, AND WE'D LOVE TO HEAR FROM
                YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT,
                YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE,
                OR BY PHONE, EMAIL, OR SOCIAL MEDIA.
              </h3>
            </p>
          </div>

          <div className="flex flex-col pl-40 mt-6 gap-6">
            <input
              ref={nameRef}
              className="border h-6 w-80 pl-4 py-5 text-2xl font-bold rounded-xl"
              type="text"
              placeholder="Name"
            />
            <input
              ref={mailRef}
              className="border h-6 w-80 pl-4 py-5 text-2xl font-bold rounded-xl"
              type="e-mail"
              placeholder="E-mail"
            />
            <textarea
              ref={textRef}
              className="h-30 w-100 pl-4 py-5 text-2xl font-bold rounded-xl border"
              name="text..."
              placeholder="TEXT Something..."
            ></textarea>
            <button
              onClick={handlieClick}
              className="ml-30 h-14 w-36 px-6 py-2 bg-amber-700 text-white font-bold text-2xl rounded-2xl active:scale-95"
            >
              Submit
            </button>
            <div className="text-xl">
              {showName && showMail && showText && (
                <h1>
                  Your Name is{" "}
                  <span className="text-red-400"> {showName} </span>  and
                  Email is <span className="text-red-400"> {showMail} </span>{" "}
                  and Thankyou for your lovely text{" "}
                  <span className="text-red-400"> {showText} </span>
                </h1>
              )}
            </div>
          </div>
        </div>

        <div className=" w-[50%]">
          <img
            className="h-162 w-full"
            src="https://plus.unsplash.com/premium_vector-1727448490518-477e95ae1ca3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default App;
