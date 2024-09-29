import React, { useState, useEffect } from 'react';
import CartItem from './CartItem';

function CartList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=5')
      .then(res => res.json())
      .then(data => setProducts(data));   
  }, []);


  return (
    <div>
      {products.map(product => (
        <CartItem key={product.id} product={product}  />
      ))}

    </div>
  );
}

export default CartList;