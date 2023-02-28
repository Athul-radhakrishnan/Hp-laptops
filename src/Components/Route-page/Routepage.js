import React, { useEffect, useState } from 'react'
import RouteNav from '../RouteNav/RouteNav'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import './Routepage.css'
import { IoIosArrowDown  } from "react-icons/io"
import Buttons from './Buttons/Buttons'
import { useSelector } from 'react-redux';
import products from '../../api/Product.json'






function Routepage( ) {
 

  const { cartList } = useSelector((state) => state.cart);

  const [id,setid] = useState(null);

  
  useEffect(() => {
    setid(cartList.id)
  
   
  }, [cartList])

  console.log(id);
  
  
   
  return (
    <div>
         <RouteNav/>
        
          
  
        {products.map((product,key)=>(

          <p>{product.name}</p>

        ))}

       <div className='main-grid'>

       
       
       


         <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
       


<Grid item xs={8}>
<p className='R-para1'>CONTINUE SHOPPING</p>
<h2 className='R-h2'> SHOPPING CART</h2>
<hr className='C-hr'></hr>

<div className='cart-grid'>

  <div className='cart-grid1'>
    <img src='https://in-media.apjonlinecdn.com/catalog/product/cache/3a98496dd7cb0c8b28c4c254a98f915a/2/E/2E4N1PA-1_T1656563219.png' alt='' />
    
  </div>
  <div className='cart-grid3'>
  <p className='chromebook1'>HP Chromebook 11a-na0006MU</p>
  <p className='chromebook2'>part No.2E4N1PA</p>
  <p className='chromebook3'>SHOW DETAILS</p>
  </div>
  <div>
    <h2  className='chromebook4' > ₹67,474</h2>
    

    <Buttons  />

    <p  className='chromebook6'>REMOVE ITEM</p>

  </div>

</div>
<hr className='C-hr'></hr>
  
</Grid>


       
       
        <Grid item xs={4} className='second-grid'>
          <h2 className='R-h2'>ORDER SUMMARY</h2>

          <div className='summary'>
          
            <p className='S-para'>APPLY DISCOUNT CODE <IoIosArrowDown className='s-arrow' /> </p>
            <hr className='s-hr'></hr>
            <div className='total'>
            <div className='first'>
            <p className='S-para'>SUBTOTAL</p>
            <p className='S-para'> FREE SHIPPING</p>
            <p className='S-para'>INCLUDES GST</p>
            </div>
            <div className='second'>
            <p className='S-para'>₹89,876</p>
            <p className='S-para'>₹0</p>
            <p className='S-para'>₹13,710</p>

            </div>
           
            </div>

            <div className='third'>
             <p className='t-amount1'>ORDER TOTAL</p>
             <p className='t-amount2'>₹89,876</p>

            </div>


          </div>


         
        </Grid>
        </Grid>
        </Box>


         </div>


         
    </div>
  )
}

export default Routepage