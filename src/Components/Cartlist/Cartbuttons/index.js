import React from 'react'
import { useSelector } from 'react-redux';
import AfterCart from './AfterCart';
import BeforeCart from './BeforeCart';

function Cartbuttons({product}) {
    const { cartList } = useSelector((state) => state.cart);

    const cartCount = cartList.find((item) => item?.id ===product?.id)?.count;



    console.log(cartCount,"==cartCount");
  return (
    <>
        
        {cartCount > 0 ? <AfterCart  product={product} cartCount ={cartCount } /> : <BeforeCart product={product}  /> }


    </>
  )
}

export default Cartbuttons