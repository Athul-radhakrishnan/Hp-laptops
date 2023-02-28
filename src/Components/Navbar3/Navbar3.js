import React from 'react'
import './Navbar3.css'
import { BsHeadset,BsCart2,BsPerson} from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


function Navbar3() {

  const { cartList=[] } = useSelector((state)=>state.cart);


  return (
    <div className='Navbar3'>
     
            <ul className='third-list'>
                <li>Business Solutions</li>
                <li>Laptops</li>
                <li>Destops</li>
                <li>Printers</li>
                <li>Ink& & Toner</li>
                <li>Monitor</li>
                <li>Accessories</li>
                <li>Care Pak</li>
                <li style={{color: 'red'}}>Sale</li>
                <li>Teck Takes</li>
                <li>Support</li>
            </ul>

            <div className='fourth-list'>
                <a href='/#'><BsHeadset /></a>
                
                <Link to='/click'><BsCart2 /></Link>
                <div className='cart-count'>{cartList.length}</div>
                <a href='/#'><SlLocationPin /></a>
                <a href='/#'><BsPerson /></a>

            </div>
        
    </div>
  )
}

export default Navbar3