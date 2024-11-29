
import React from 'react';

const DetailsBox = ({ closeDialog, statusData }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[500]">
      <div className="bg-white px-6 py-4 rounded-lg shadow-xl w-1/3">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold text-center">Student Details</h2>
          <button
            className="text-red-500 hover:text-red-700 font-bold text-base border-red-500 border-2 rounded-lg px-2 py-1"
            onClick={closeDialog}
          >
            X
          </button>
        </div>
        <ul className='list-disc ml-4 mt-4'>
          <li>Name: {statusData.name}</li>
          <li>Pronunciation Score: {statusData.averagePronunciation}</li>
          <li>Fluency Score: {statusData.averageFluency}</li>
        </ul>
      </div>
    </div>
  );
};

export default DetailsBox;
