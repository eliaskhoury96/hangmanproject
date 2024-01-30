import React, { useState } from 'react';
import './App.css';
import Solution from './components/Solution';
import Score from './components/Score';
import Letters from './components/Letters';
import EndGame from './components/EndGame';

function App() {
    const generateLetterStatuses = function () {
        let letterStatus = {}
        for (let i = 65; i < 91; i++) {
            letterStatus[String.fromCharCode(i)] = false
        }
        return letterStatus
    }
   const[gameOver, setGameOver] = useState(false)

   const[isGameWon, setIsGameWon] = useState(false)
    const [letterStatus, setLetterStatus] = useState(generateLetterStatuses());
    const [solution, setSolution] = useState({
        word: 'CODE',
        hint: 'Your ideal mood when coding'
    });
    const [score, setScore] = useState(100);
    
    const handleLetterClick = (letter) => {
        if (!letterStatus[letter]) {
            const isLetterInWord = solution.word.includes(letter);
            const newScore = score + (isLetterInWord ? 5 : -20);
            const newLetterStatus = { ...letterStatus, [letter]: true };
            const wordGuessed = solution.word.split('').every((letter) => newLetterStatus[letter]);  
            if (wordGuessed) {
             setIsGameWon(true) 
             setGameOver(true)
          }
          if (newScore <= 0){
            setIsGameWon(false) 
            setGameOver(true)

          }
            setLetterStatus(newLetterStatus);
            setScore(newScore);
        }
    };
  

    return (
        <div>
           {!gameOver ? <div>
            <Score score={score} />
            <Solution letterStatus={letterStatus} solution={solution} />
            <Letters letterStatus={letterStatus} onLetterClick={handleLetterClick} /></div>
            :
          
            <EndGame letterStatus={letterStatus} score={score} solution={solution} isGameWon={isGameWon} />}
        </div>
    );
           }

export default App;
