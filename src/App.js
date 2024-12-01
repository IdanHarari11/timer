import React, { useState } from 'react';

const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

const App = () => {
  const initialTimer = 5;
  const [timer, setTimer] = useState(initialTimer);

  const triggerTimer = async () => {
    let currentTime = initialTimer;

    while (currentTime > 0) {
      await sleep(1000);
      
      currentTime -= 1;
      setTimer(currentTime);

      if (currentTime === 0) {
        break;
      }
    }
  };

  const handleReset = () => {
    setTimer(initialTimer);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-2xl p-8 text-center transform transition-all hover:scale-105">
        <div className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mb-6">
          {timer}
        </div>
        
        {timer === initialTimer && (
          <button 
            onClick={triggerTimer} 
            className="px-6 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-full hover:from-green-500 hover:to-blue-600 transition-all transform hover:scale-110 hover:shadow-lg"
          >
            Start Timer
          </button>
        )}

        {timer === 0 && (
          <div>
            <div className="text-2xl font-semibold text-red-500 mb-4 animate-pulse">
              Time's up!
            </div>
            <button 
              onClick={handleReset} 
              className="px-6 py-3 bg-gradient-to-r from-red-400 to-pink-500 text-white rounded-full hover:from-red-500 hover:to-pink-600 transition-all transform hover:scale-110 hover:shadow-lg"
            >
              Reset
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;