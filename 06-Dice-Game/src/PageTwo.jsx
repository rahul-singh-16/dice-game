import React, { useState } from "react";
import PageTwoNavbar from "./PageTwoNavbar";
import DiceBox from "./DiceBox";

const PageTwo = () => {

   const [tellNum, setTellNum] = useState(0)
   const [selectedNumber, setSelectedNumber] = useState("")
   const [message, setMessage] = useState("")

  return (
    <div className="bg-gray-400 h-screen w-full">
      <PageTwoNavbar  
        tellNum={tellNum}
        setTellNum={setTellNum}
        setSelectedNumber={setSelectedNumber}
        setMessage={setMessage}
        message={message}
      />

      <DiceBox
        setTellNum={setTellNum}
        selectedNumber={selectedNumber}
        setMessage={setMessage}
        setSelectedNumber={setSelectedNumber}
      />
    </div>
  );
};

export default PageTwo;