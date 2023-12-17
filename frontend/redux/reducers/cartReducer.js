import {createReducer} from "@reduxjs/toolkit";

export const cartReducer=createReducer(
   {
    cartItems:[]
   }
    ,(builder)=>{

        builder.addCase("addToCart",(state,action)=>{
            const item=action.payload;

            
            
            const isExist=state.cartItems.find(i=>i.product===item.product);

            if(!isExist){
                state.cartItems.push(item);
            }else{
               state.cartItems=state.cartItems.map( i=> i.product===item.product ?item :i)
            }

            
        });
    
        builder.addCase("removeFromCart",(state,action)=>{
            const id=action.payload;
            state.cartItems=state.cartItems.filter( i=> i.product!==id)
        });
    
        builder.addCase("emptyCart",(state,action)=>{
            state.cartItems=[];

        });
    


    //clearing functions

    builder.addCase("clearMessage",(state)=>{
        state.message=null;
    });

    builder.addCase("clearError",(state)=>{
        state.error=null;
    });
});