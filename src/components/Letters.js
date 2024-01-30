import React from 'react';
import Letter from './Letter';
import '../App.css';
function Letters({ letterStatus, onLetterClick  }) {
    const letters = Object.keys(letterStatus).map((letter, index) => (
        <Letter key={index} letter={letter} status={letterStatus[letter]} onClick={() => onLetterClick(letter)} />
    ));
    return (
      
        <div>
          <div className="letters-container">
            <div>Available Letters:</div>
            <div>{letters}</div> 
        </div>
        </div>
    );
}

export default Letters;

