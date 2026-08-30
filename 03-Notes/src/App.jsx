import React, { useState } from "react";

const App = () => {
  const [create, setCreate] = useState([]);

  // Create Note
  const noteBtn = () => {
    setCreate([...create, {}]);
  };

  // Delete Note
  const deleteBtn = (index) => {
    const newNotes = create.filter((item, i) => i !== index);
    setCreate(newNotes);
  };

  return (
    <div className="bg-black min-h-screen text-white p-8">
      <button
        onClick={noteBtn}
        className="bg-red-600 px-5 py-2 text-2xl font-bold rounded-xl"
      >
        Create Notes
      </button>

      <div className="flex flex-wrap gap-6 mt-8">
        {create.map((item, index) => (
          <div
            key={index}
            className="bg-gray-800 p-4 rounded-xl w-[350px] relative"
          >
            <textarea
              placeholder="Write your note..."
              className="bg-white text-black w-full h-40 p-3 text-2xl font-bold rounded-lg resize-none focus:outline-none"
            ></textarea>

            <button
              onClick={() => deleteBtn(index)}
              className="bg-red-500 px-3 py-2 rounded-lg mt-3"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;