import React from "react";

const PageTwoNavbar = ({
  tellNum,
  setTellNum,
  message,
  setSelectedNumber,
  selectedNumber,
}) => {

const handleNumBtn = (number) => {
  setSelectedNumber(number);
};

  return (
    <div className="p-2 flex flex-col md:flex-row gap-6 md:gap-10">
      <div className="font-bold text-center md:text-left">
        <h1 className="text-6xl sm:text-7xl md:text-8xl">{tellNum}</h1>

        <h3 className="text-2xl">Total Score</h3>
      </div>

      <div className="w-full md:flex-1 flex flex-col items-center md:items-end">
        <h3 className="text-xl sm:text-2xl font-bold text-pink-900 text-center">
          {message}
        </h3>

        <div className="mt-2 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => handleNumBtn(1)}
           
            className="px-6 py-2 sm:px-6 text-4xl sm:text-4xl  border-2 cursor-pointer bg-white text-black active:scale-105 rounded-md hover:bg-green-700    font-black"
          >
            1
          </button>
          <button
            onClick={() => handleNumBtn(2)}
            style={{
              backgroundColor: selectedNumber === 2 ? "red" : undefined,
            }}
            className="px-6 py-2 sm:px-6 text-4xl sm:text-4xl  border-2 cursor-pointer bg-white text-black active:scale-105 rounded-md hover:bg-green-700  font-black"
          >
            2
          </button>
          <button
            onClick={() => handleNumBtn(3)}
        
            className="px-6 py-2 sm:px-6 text-4xl sm:text-4xl  border-2 cursor-pointer bg-white text-black active:scale-105 rounded-md hover:bg-green-700  font-black"
          >
            3
          </button>
          <button
            onClick={() => handleNumBtn(4)}
           
            className="px-6 py-2 sm:px-6 text-4xl sm:text-4xl  border-2 cursor-pointer bg-white text-black active:scale-105 rounded-md hover:bg-green-700  font-black"
          >
            4
          </button>
          <button
            onClick={() => handleNumBtn(5)}
          
            className="px-6 py-2 sm:px-6 text-4xl sm:text-4xl  border-2 cursor-pointer bg-white text-black active:scale-105 rounded-md hover:bg-green-700  font-black"
          >
            5
          </button>
          <button
            onClick={() => handleNumBtn(6)}
          
            className="px-6 py-2 sm:px-6 text-4xl sm:text-4xl  border-2 cursor-pointer bg-white text-black active:scale-105 rounded-md hover:bg-green-700  font-black"
          >
            6
          </button>
        </div>
        <h1 className="mt-2 text-xl sm:text-2xl font-bold text-center">
          Select Number
        </h1>
      </div>
    </div>
  );
};

export default PageTwoNavbar;
