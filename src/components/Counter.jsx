import React, { useState } from 'react'

function Counter({onCountChange}) {

  return (
    <div>
      <button onClick={handleDecrement}
      className="border rounded-lg p-2 bg-teal-300 text-2xl">-</button> 
      <span className="p-3">{count}</span>
      <button onClick={handleIncrement}
      className="border rounded-lg p-2  bg-teal-300 text-2xl">+</button>
    </div>
  );
}

export default Counter;