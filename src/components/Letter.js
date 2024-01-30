import React from 'react';
import '../App.css';

function Letter({ letter, status, onClick }) {
  return (

   <span style={{ textDecoration: status ? 'line-through' : 'none', color: status ? 'grey' : 'black'}} onClick={onClick}>{letter}</span>
 
  );
}

export default Letter;


