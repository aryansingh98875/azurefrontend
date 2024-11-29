import React, { useState } from 'react';
import LevelBox from '../../common/LevelBox';

const Level1Comp = ({ params }) => {
  const [clickedLetters, setClickedLetters] = useState([]);
  const [showDialog, setShowDialog] = useState(false);
  const [selectedLetter, setSelectedLetter] = useState('');
  const [clickedLevel, setClickedLevel] = useState([]);
  const [levelArray, setLevelArray] = useState([]);

  const teacherId = localStorage.getItem("teacherId");
  console.log("Teacher ID:", teacherId);

  const studentId = localStorage.getItem("studentId");
  console.log("Student ID:", studentId);
  let userid = null;
  if(studentId){
    userid = studentId;
  }else{
    userid = teacherId
  }

  const handleClick = (letter) => {
    setClickedLetters(() => {
      const newLetters = [letter];
      console.log("letter",newLetters);
      return newLetters;
    });
    setSelectedLetter(letter);
    setShowDialog(true);
  };



  const closeDialog = () => {
    setShowDialog(false);
    setSelectedLetter('');
  };

  const level = 1;

  const handleLevel = (index) => {
    const subLevel = { level, subLevel: index + 1 };
    setClickedLevel(() => {
      console.log([level, index + 1]);
      setLevelArray((prevArray) => [subLevel]);
      return [level, index + 1];
    });
  };

  console.log("Updated level array: ", levelArray);

  const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I','J'];

  return (
    <div className="w-full h-screen overflow-y-auto p-8 ">
      <h1 className="text-black text-[40px] font-extrabold text-center mb-8">
        LEVEL 1: Choose a Letter
      </h1>
      <div className="grid grid-cols-4 gap-12 mx-auto mt-4">
        {letters.map((letter, index) => (
          <div
            key={index}
            onClick={() => { handleClick(letter); handleLevel(index); }}
            className="transform transition duration-300 ease-in-out bg-gradient-to-br from-[#3B82F6] to-[#D1C4E9]  text-white shadow-lg hover:scale-105 hover:shadow-xl hover:opacity-80 px-16 py-8 flex items-center justify-center text-[60px] w-full rounded-2xl font-bold cursor-pointer text-center"
          >
            {letter}
          </div>
        ))}
      </div>

      {showDialog && (
        <LevelBox 
          closeDialog={closeDialog} 
          letter={selectedLetter} 
          levelArray={levelArray} 
          userid={userid}
        />
      )}
    </div>
  );
};

export default Level1Comp;
