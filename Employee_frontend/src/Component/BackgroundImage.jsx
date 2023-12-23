import React, { useState } from 'react';
import { useEffect } from 'react';

const BackgroundImage = () => {
  const[number,setNumber]=useState([1,2,3]);
  useEffect(()=>{
    alert(`you clicked me ${number.length}`);
  },[number])
  return(
    <center>
      <div>
      <ul>
        {number.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
      <button onClick={() => setNumber([...number, number.length + 1])}>
        Add Number
      </button>
    </div>

    </center>
  )
}

export default BackgroundImage;
