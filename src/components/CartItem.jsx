import React, { useState } from 'react';
import Counter from './Counter';

function CartItem({ product}) {

  return (
    <div>
    <div className="flex justify-between container mx-auto items-center  border-y-2 border-x-teal-800">
        <div className=" flex flex-col p-10 w-2/5">
            <div>
              <img src={product.image} alt={product.title} 
            className="size-40 mb-5 "  />
            </div>
            <div>
              <h3 className="text-black font-bold text-2xl w-full max-w-64 underline max-md:text-base">{product.title}</h3>
            </div>

        </div>
        <div className="flex items-stretch text-center gap-20 w-3/5 max-xl:flex-col max-xl:gap-0">
            <div>
              <p className="text-black font-bold text-2xl py-12 max-md:text-base"> Harga : ${product.price}</p>
            </div>
            <div className="text-black font-bold text-xl py-12 max-md:text-base">
              <Counter  onCountChange={handleQuantityChange} />
            </div>
            <div>
              <p className="text-teal-700 font-bold text-2xl py-12 max-md:text-base ">Total Harga : $ {product.price*quantity} </p>
            </div>
        </div>
    </div>
    </div>

  );
}

export default CartItem;