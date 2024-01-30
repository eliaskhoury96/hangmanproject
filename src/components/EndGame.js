import React from 'react';
function EndGame({ letterStatus, score, solution }) {
    const checkGameOver = () => {
        const wordGuessed = solution.word.split('').every((letter) => letterStatus[letter]);
        if (wordGuessed) {
            return { isGameWon: true, gameOver: true };
        }
        else if (score <= 0) {
            return { isGameWon: false, gameOver: true };
        }
        return { isGameWon: false, gameOver: false };
    };
    const { isGameWon, gameOver } = checkGameOver();

    return (
        <div>
            {gameOver ? (
                <div>
                    {isGameWon ? (
                        <p>Congratulations! You guessed the word: {solution.word}</p>
                    ) : (
                        <p>Game over! The word was: {solution.word}</p>
                    )}
                </div>
            ) : null}
        </div>
    );
}

export default EndGame;


