
import React from 'react'
import './Laptop.css'

function Laptop() {
  return (
    <div className='laptop-pages'>

        <h2 className='lp-h1'>LAPTOPS</h2>
        <p className='lp-h2'>APPLY QUICK FILTERS</p>

        <ul className='btn-list'>
            <li><button className='lp-btn'>Home</button></li>
            <li><button  className='lp-btn' >BUSINESS</button></li>
            <li><button  className='lp-btn'>GAMING</button></li>
            <li><button  className='lp-btn'>ON SALE</button></li>
            <li><button  className='lp-btn2'>DISPATCH IN 2DAYS</button></li>
            <li><button  className='lp-btn2'>LAPTOPS UNDER 50000</button></li>
        </ul>

    </div>
  )
}

export default Laptop