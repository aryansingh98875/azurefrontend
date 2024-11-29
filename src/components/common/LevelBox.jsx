import React from 'react';
import AzureRecorder from './Azure/AzureRecorder';

const LevelBox = ({ closeDialog, letter, levelArray, userid }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[500]">
      <div className="bg-gradient-to-br  from-[#3B82F6] to-[#D1C4E9] px-8 py-6 rounded-2xl shadow-2xl w-[40rem] min-h-[26rem] relative">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-extrabold text-white">Practice</h1>
          <button
            className="text-white hover:text-red-300 font-bold text-lg border-white border-2 rounded-full px-3 py-1 hover:bg-red-500 transition-all"
            onClick={closeDialog}
          >
            X
          </button>
        </div>

        {/* Content Area */}
        <div className="bg-white rounded-xl p-6 shadow-inner">
          <AzureRecorder letter={letter} levelArray={levelArray} userid={userid} onClose={closeDialog} />
        </div>
      </div>
    </div>
  );
};

export default LevelBox;
