import React, { use, useState } from "react";
import oneDice from "./assets/oneDice.png";
import twoDice from "./assets/twoDice.png";
import threeDice from "./assets/threeDice.png";
import foursDice from "./assets/foursDice.png";
import fiveDice from "./assets/fiveDice.png";
import sixDice from "./assets/sixDice.png";

const diceBoxe = ({setTellNum, selectedNumber, setMessage, setSelectedNumber}) => {

  const [showRule, setShowRule] = useState("")
  const [dice, setDice] = useState(oneDice)

  let diceImage = [oneDice, twoDice, threeDice, foursDice, fiveDice, sixDice]

  const diceNumberBtn = ()=>{
    if(selectedNumber === null){
      setMessage("You not choose the Number")
      return
    }
      const num = (Math.floor(Math.random()*6)+1)
      setDice(diceImage[num - 1])
      
      if(selectedNumber === num){
        setTellNum((prev)=> prev + num)
        setMessage(`You got ${num} Points`)
      }
      else{
        setTellNum((prev)=> Math.max(0, prev - 2))
        setMessage(`Wrong guess! -2 points`);
      }
      setSelectedNumber(null)
    
  }

  return (
    <div className="w-full px-4 flex flex-col items-center overflow-hidden">
      <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-40 md:h-40 flex justify-center items-center mt-4 md:mt-1">
        <img
          onClick={diceNumberBtn}
          src={dice}
          alt="dice"
          className="w-full h-full object-contain cursor-pointer"
        />
      </div>

      <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-white text-center mt-2">
        Click on Dice the Roll
      </h1>

      <div className="flex flex-col items-center w-full">
        <button 
        onClick={()=>setTellNum(0)}
         className="w-full sm:w-fit px8 sm:px-14 py-3 mt-3 text-lg sm:text-xl font-bold bg-white text-black active:scale-95 cursor-pointer rounded-xl">
          Reset Score
        </button>

       
        <button
         onClick={()=> setShowRule(!showRule)}
          
          // Rules दिखाने/छिपाने वाला button
          className="w-full sm:w-fit px-8 sm:px-14 py-3 mt-3 text-lg sm:text-xl font-bold text-white bg-black  active:scale-95 cursor-pointer rounded-xl"
        >
          Show Rules
        </button>

           {showRule && (

             <div className="w-full max-w-3xl mt-3 bg-amber-300 px-3 rounded-2xl p-4 sm:p-6">
          <h2 className="font-bold text-lg sm:text-xl">
            How To Play Dice Game
          </h2>

          <div className="text-sm sm:text-base font-bold text-blue-700 mt-2 space-y-1">
            <h3>Select any number.</h3>

            <h3>Click on dice image.</h3>
            <h3>
              after click on dice if selected Number is equal to dice number you
              will get same point as dice.
            </h3>
            <h3>if you get wrong guess then 2 point will be dedcuted.</h3>
          </div>
        </div>
          )}
        
      </div>
    </div>
  );
};
export default diceBoxe;