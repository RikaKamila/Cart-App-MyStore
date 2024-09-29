import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { cartIncrease, cartDecrease } from '../redux/cartSlice'

function Counter({onCountChange}) {
    const dispatch = useDispatch()
    const [count, setCount] = useState(0)

    // const quantityCart = props.quantityCart
    // const setQuantityCart = props.setQuantityCart

    const handleIncrement = () => {
      setCount(count + 1);
      onCountChange(count + 1); 
      dispatch(cartIncrease())
    // setQuantityCart(quantityCart + 1)
    
    };
  
    const handleDecrement = () => {
      if (count > 0) {
        setCount(count - 1);
        onCountChange(count - 1);
        dispatch(cartDecrease())
        // setQuantityCart(quantityCart - 1)

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