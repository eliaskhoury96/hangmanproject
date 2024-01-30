import React from 'react';
function EndGame({solution, isGameWon }) {
 
    return (
        <div>
           
                <div>
                    {isGameWon ? (
                        <p>Congratulations! You guessed the word: {solution.word}</p>
                    ) : (
                        <p>Game over! The word was: {solution.word}</p>
                    )}
                </div>
        </div>
    );
}

export default EndGame;


