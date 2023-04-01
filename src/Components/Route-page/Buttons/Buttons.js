import React from 'react'
import {  useDispatch, useSelector} from 'react-redux';
import { decrement, increment } from '../../../redux/cart'
import './Buttons.css'


function Buttons({cartList,product}) {

  


  const dispatch =useDispatch();

  console.log(cartList,20);


  
  return (
    <div className='B-buttons'>
          <button className='decrease' onClick={() => dispatch(decrement(product.id)) }  >-</button>
         
         <div className='rate' >{cartList[`${product.id}`].count}</div>

         <button  className='increase' onClick={() => dispatch(increment(product.id,)) } >+</button>
       

    </div>
  )
}

export default Buttons