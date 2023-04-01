import React, { useEffect } from 'react'
import RouteNav from '../RouteNav/RouteNav'

import './Routepage.css'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Buttons from './Buttons/Buttons'
import {  useSelector,useDispatch } from 'react-redux';
import {  gettotalprice,OrderTotal } from '../../redux/cart'



// import products from '../../api/Product.json'






function Routepage() {
 


  const { cartList,totalPrice,totalcount,totalgst,ordertotal } = useSelector((state) => state.cart);
  const {cart} = useSelector((state ) =>state);

  console.log(cart,100);



  
  const dispatch =useDispatch();

  useEffect (()=>{
    dispatch(gettotalprice())

  },[cartList]) 

 

  

  
  

 

 

 
  
   
  return (
    <div className='main'>

         <RouteNav/>
         <div className='div'>
          <div >
         <h4 className='shopping'>CONTINUE SHOPPING</h4>
          <p className='shopping-cart'>SHOPPING CART</p>
          <hr className='r-hr'></hr>
          </div>
        
          
          <div className='summary'>
            <p className='cart-summary'>ORDER SUMMARY</p>

          </div>
         </div>
         

          <Box sx={{ flexGrow: 1 }}>

         
        

          <Grid container spacing={2} className='first-div' >

          
          
        <Grid item xs={8}>
           {cartList?.map((product,key) => (
          <div className='cart-grid' key={key}>
       
     
            
           <div className='cart-grid1'>
            <img className='R-img' src={product.image} alt='' />
          </div>

          <div className='cart-info'>
        
          <p className='R-name1'>{product.name}</p>
          <p className='R-name2'>Part No.6J0W2PA</p>
          <p className='R-name3'>SHOW DETAILS</p>
          </div>
          <div className='cart-price'>
           {product.price2 > 0 ?  <p className='R-name1'>{product.price2} </p>:<p className='R-name1'>{product.price}</p>}
           
             <Buttons  product={product} cartList={cartList} />
            <p className='R-name3'>REMOVE ITEM</p>
            
          </div>
          </div>

          ))} 
          
          

        

        

          
        </Grid>
        <Grid  item xs={4} className='total'>

        <div className='second-total'>
          <p className='price-p1'>APPLY DISCOUNT CODE</p>
            
              <div className='summary=grid' >
               
                <p  className='price-p1'>SUB TOTAL<span className='p-span1'>{totalPrice}</span></p>
                <p  className='price-p1'>QUANTITY <span  className='p-span2'>{totalcount}</span></p>
                 <p  className='price-p1'>INCLUDES GST <span  className='p-span3'>{totalgst}</span> </p>
                 <div className='total-price'><p className='price-T' > ORDER TOTAL  <span className='p-span3'>{ordertotal}</span></p>
               
                </div>
              </div>
          
          </div>
       
         

         
          
        </Grid>
      
       
        
        </Grid>
        
        </Box>
        
        

     


      


        

       
             
        
     

           



         
    </div>
  )
}

export default Routepage