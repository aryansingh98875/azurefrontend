import React, { useEffect } from "react";
import Congrats from "./Congrats";
import TryAgain from "./TryAgain";


const CongratsBox = ({ showCongrats, onClose, fullscreen }) => {
  useEffect(() => {
    // Close the dialog after 7 seconds
    const timer = setTimeout(() => {
      onClose();
    }, 7000); // 7 seconds

    return () => clearTimeout(timer); // Clear timer on unmount
  }, [onClose]);

  return (
    <div
      className={`${
        fullscreen ? "w-screen h-screen fixed inset-0" : "w-[30rem] h-auto"
      } bg-black bg-opacity-80 flex items-center justify-center z-[500]`}
    >
      <div className="bg-white px-6 py-4 rounded-lg shadow-xl w-full text-center">
        {showCongrats ? (
          <>
            <Congrats />
            {/* <p className="text-lg font-bold mt-4">Congratulations! You passed the level.</p> */}
          </>
        ) : (
          <div>
            <TryAgain />
          </div>

          // <p className="text-lg font-bold mt-4">Retry this level.</p>
        )}
      </div>
    </div>
  );
};

export default CongratsBox;
