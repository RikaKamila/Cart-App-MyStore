import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { cartIncrease, cartDecrease } from '../redux/cartSlice'

function Counter({onCountChange}) {
    const dispatch = useDispatch()
    const [count, setCount] = useState(0)

    const handleIncrement = () => {
      setCount(count + 1);
      onCountChange(count + 1); 
      dispatch(cartIncrease())
    };
  
    const handleDecrement = () => {
      if (count > 0) {
        setCount(count - 1);
        onCountChange(count - 1);
        dispatch(cartDecrease())
      }
    };

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