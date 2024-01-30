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

            setLetterStatus(newLetterStatus);
            setScore(newScore);
        }
    };

    return (
        <div>
            <Score score={score} />
            <Solution letterStatus={letterStatus} solution={solution} />
            <Letters letterStatus={letterStatus} onLetterClick={handleLetterClick} />
            <EndGame letterStatus={letterStatus} score={score} solution={solution} />
        </div>
    );
}

export default App;
