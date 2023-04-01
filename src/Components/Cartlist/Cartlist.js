import React, { useState } from 'react'
import './Cartlist.css'
import products from '../../api/Product.json'
import { BsQuestionCircleFill,BsPlusSquare,BsRecord2Fill,BsSquare,BsStarFill } from "react-icons/bs";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import BeforeCart from './Cartbuttons/BeforeCart';
import AfterCart from './Cartbuttons/AfterCart';
import { useSelector,useDispatch } from 'react-redux'
import Cartbuttons from './Cartbuttons';







function Cartlist() {
  const { cartList } = useSelector((state) => state.cart);

  console.log(cartList);

 
  return (
    <div className='side-bar'>
     {/* <div className='first-card'> */}
      <div >
      <button className='S-button'>  <p className='price-p1'> <BsQuestionCircleFill className='qs-mark'/> PRICE <BsPlusSquare className='plus-icon'/> </p>  </button>
      <br></br>
      <button className='S-button'>  <p className='price-p1'> <BsQuestionCircleFill className='qs-mark'/> CATEGORY <BsPlusSquare className='plus-icon1'/> </p>  </button>
      <br></br>
      <button className='S-button'>  <p className='price-p1'> <BsQuestionCircleFill className='qs-mark'/> FORM FACTOR <BsPlusSquare className='plus-icon1'/> </p>  </button>
      <br></br>
      <button className='S-button'>  <p className='price-p1'> PROCESSOR <BsPlusSquare className='plus-icon1'/> </p>  </button>
      <br></br>
      <button className='S-button'>  <p className='price-p1'> <BsQuestionCircleFill className='qs-mark'/> SCREEN SIZE <BsPlusSquare className='plus-icon1'/> </p>  </button>
      <br></br>
      <button className='S-button'>  <p className='price-p1'> <BsQuestionCircleFill className='qs-mark'/> HARD DRIVE CAPACITY <BsPlusSquare className='plus-icon1'/> </p>  </button>
      <br></br>
      <button className='S-button'>  <p className='price-p1'> <BsQuestionCircleFill className='qs-mark'/> MEMORY(RAM) <BsPlusSquare className='plus-icon1'/> </p>  </button>
      <br></br>
      <button className='S-button'>  <p className='price-p1'> <BsQuestionCircleFill className='qs-mark'/> OPERATING SYSTEM <BsPlusSquare className='plus-icon1'/> </p>  </button>
      <br></br>
      <button className='S-button'>  <p className='price-p1'> <BsQuestionCircleFill className='qs-mark'/> GRAPHICS <BsPlusSquare className='plus-icon1'/> </p>  </button>
      <br></br>
      <button className='S-button'>  <p className='price-p1'> <BsQuestionCircleFill className='qs-mark'/> WEIGHT,METRIC <BsPlusSquare className='plus-icon1'/> </p>  </button>
      <br></br>
      <button className='S-button'>  <p className='price-p1'> <BsQuestionCircleFill className='qs-mark'/> USAGE <BsPlusSquare className='plus-icon1'/> </p>  </button>
      <br></br>
      <button className='S-button'>  <p className='price-p1'> <BsQuestionCircleFill className='qs-mark'/> COLOUR <BsPlusSquare className='plus-icon1'/> </p>  </button>
      <br></br>
      <button className='S-button'>  <p className='price-p1'> <BsQuestionCircleFill className='qs-mark'/> FAMILY BRAND<BsPlusSquare className='plus-icon1'/> </p>  </button>
      <br></br>
      <button className='S-button'>  <p className='price-p1'> <BsQuestionCircleFill className='qs-mark'/> FEATURES <BsPlusSquare className='plus-icon1'/> </p>  </button>
      <br></br>
      <button className='S-button'>  <p className='price-p1'> <BsQuestionCircleFill className='qs-mark'/> INCLUDED<BsPlusSquare className='plus-icon1'/> </p>  </button>
      <br></br>
      <button className='S-button'>  <p className='price-p1'> <BsQuestionCircleFill className='qs-mark'/> AVAILABILITY <BsPlusSquare className='plus-icon1'/> </p>  </button>
      <br></br>
      <button className='S-button'>  <p className='price-p1'>  SALES/DEALS <BsPlusSquare className='plus-icon1'/> </p>  </button>
      </div>

      
      <div className='card' >
      {products.map((product,key)=>(
        <div className='main-container'  key={key}>
          <div className='stock'> <p><BsRecord2Fill  className='stock-btn' /></p> <p style={{color: 'grey',fontSize:'15px'}} >IN STOCK</p> </div>
          <img className='lap-image' src={product.image} alt=''></img>
          <p className='star'><BsStarFill style={{color:"blue"}}/> <BsStarFill style={{color:"blue"}} /> <BsStarFill style={{color:"blue"}} /> <BsStarFill style={{color:"blue"}} /> <BsStarFill  style={{color:"grey"}}/></p>

          <p className='lap-name'>{product.name}</p>
          <p className='lap-para'>{product.para}</p>

          <div className='form-line'>
             <form className='form'>
              <BsSquare className='square' />
              <label className='label'>Compare 2E4N1PA</label>
             </form>

          </div>
          <div className='price-tag'>
          <p style={{color: 'black',fontSize:'13px'}} ><del>{product.info1}</del></p>

          <p className='lap-info2'>{product.info2}</p>
          </div>
          
         <div className='tax-price'> <p className='lap-price'>{product.price} </p> <p className='tax'>{product.tax}</p></div>
         <p className='gst'>Includes GST {product.gst}</p>
         <div className='details'>
         <p className='v-details' href='/#'>View Details</p>
          <p href='/#'><MdOutlineArrowForwardIos className='arrow' /></p>
        {/* <button className='cart-btn'>Add to cart</button> */}
        {/* <BeforeCart addToCart={addToCart} />
        <AfterCart /> */}

           <Cartbuttons product={product} />
         
         </div>
         
        </div>
      ))}

    
     
      </div>
     

    
      

     

      
     
     {/* </div> */}
  
       
      


     
    </div>


  )
}

export default Cartlist