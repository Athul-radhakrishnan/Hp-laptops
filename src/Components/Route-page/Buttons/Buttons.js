import React from 'react'
import {  useDispatch} from 'react-redux';
import { decrement, increment } from '../../../redux/cart'
import './Buttons.css'


function Buttons() {

  
  
  return (
    <div className='B-buttons'>
         <button  className='increase' >+</button>
         <div className='rate' > </div>
        <button className='decrease'   >-</button>

    </div>
  )
}

export default Buttons