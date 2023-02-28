import React from 'react'
import './Cartbuttons.css'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../redux/cart';

function BeforeCart({product}) {
  const dispatch =useDispatch();
  return (
    <div>
        <button className='cart-btn' onClick={() =>dispatch(addToCart(product))}>Add to cart</button>
    </div>
  )
}

export default BeforeCart