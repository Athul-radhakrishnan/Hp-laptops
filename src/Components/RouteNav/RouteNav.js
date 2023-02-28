import React from 'react'
import './RouteNav.css'
import {FaDotCircle,FaCircle } from "react-icons/fa";

function RouteNav() {
  return (
    <div className='Route-nav'>

        <img className='R-hpimg' src='https://in-media.apjonlinecdn.com/logo/stores/1/HP_logo_black_1.svg' alt='' />
        <div className='dott'>
            

           <FaDotCircle className='R-dott' />
            <hr className='R-hr'></hr>
            <FaCircle className='R-dott2' />
            <hr className='R-hr2'></hr>
            <FaCircle className='R-dott3' />

        </div>
        <ul className='R-ul'>
            <li className='cart-1'>CART
               
            </li>
            
            <li className='checkout'>CHECKOUT</li>
            <li className='confirmation'>CONFIRMATION</li>


        </ul>

        <button className='check-buttton'>CHECKOUT SECURELY</button>
        

    </div>
  )
}

export default RouteNav