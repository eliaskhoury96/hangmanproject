
import React from 'react';
import '../App.css'
const Score = ({ score }) =>{
  let scoreClass= (score)=>{
      if (score >= 80) {
          return 'high-score';
      } else if (score >= 50) {
          return 'medium-score';
      } else {
          return 'low-score';
      }
    }

  return (
      <div>
   <div className="score-container">
          <p className={scoreClass(score)}>Score: {score}</p>
      </div>
      </div>
  );
  }

export default Score;
