import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE ={
    cartList:[],
    cartCount:0,
    totalPrice:0,
    totalcount:0,
    ordertotal:0,
    totalgst:0,

   
   
};

const cartSlice =createSlice({
    name:"cart",
    initialState:INITIAL_STATE,
    reducers: {
        addToCart : (state,action) => {
           const itemExist= state.cartList.find((item) =>item.id ===action.payload.id);
           if(itemExist){
            state.cartList.forEach((item)=>{
                if (item?.id ===action.payload.id){
                    item.count = 1;
                   
                    item.price2 = Number(item.price);

                    
                  
                }
            })


            return;

           } 
            state.cartList.push({
                ...action.payload,
                count :1,
                price2 :0,
               
            });

           
           
        },
        increment : (state , action) => {
            const productID = action.payload;
            state.cartList.forEach((item)=> {
                if (item?.id === productID) {
                    item.count++;
                  
                    item.price2 =Number(item.price)*Number(item.count);
                   
                }
            });
        },
        decrement : (state , action) => {
            const productID = action.payload;
            state.cartList.forEach((item)=> {
                if (item?.id === productID) {
                    item.count--;
                    item.price2 =Number(item.price)*Number(item.count);
                  
                   
                }
            });
        },

        gettotalprice : (state,action)=> {
            let {totalPrice , totalcount ,totalgst,ordertotal} = state.cartList.reduce(
                (total,cartitem)=>{
                   const {price,count,gst} =cartitem;
                   const totalamount  = price*count;
                   const totalp = gst*count;

                   total.totalPrice += totalamount;
                   total.totalcount += count;
                   total.totalgst += totalp;
                   total.ordertotal = totalamount + totalp ;
                   
                
                  
                   return total;

                },
              {
                totalPrice :0,
                totalcount :0,
                ordertotal :0,
                totalgst:0,


              } 

            )

            state.totalPrice=parseInt(totalPrice);
            state.totalcount = totalcount;
            state.ordertotal = ordertotal;
            state.totalgst = totalgst;
        },

        


    }

});

export const {increment,decrement,addToCart,  gettotalprice,OrderTotal} = cartSlice.actions;

export default cartSlice.reducer;