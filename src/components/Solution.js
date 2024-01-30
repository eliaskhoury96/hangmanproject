import React from 'react';
import Letter from './Letter';
import '../App.css'
function Solution({ letterStatus, solution }) {
    const { word, hint } = solution;

    const displayedWord = word.split('').map((letter, index) => (
        <Letter 
            key={index} 
            letter={letterStatus[letter] ? letter : '_ '} 
            status={false} 
        />
    ));

    return (
        <div>
         <div className="solution-container">
            <div>{displayedWord}</div> 
            <em>{hint}</em>
        </div>
        </div>
    );
}

export default Solution;
