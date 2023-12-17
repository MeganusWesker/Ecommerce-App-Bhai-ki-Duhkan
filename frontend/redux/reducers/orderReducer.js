import {createReducer} from "@reduxjs/toolkit";

export const orderReducer=createReducer({
    orders:[],
    adminOrders:[]
},(builder)=>{

  
        // add Category function

        builder.addCase("placeOrderRequest",(state)=>{
            state.loading=true; 
        });
    
        builder.addCase("placeOrderSuccess",(state,action)=>{
            state.loading=false;
            state.message=action.payload;
        });
    
        builder.addCase("placeOrderFail",(state,action)=>{
            state.loading=false;
            state.error=action.payload;
        });
    
        // myOrders function

        builder.addCase("myOrdersRequest",(state)=>{
            state.loading=true; 
        });
    
        builder.addCase("myOrdersSuccess",(state,action)=>{
            state.loading=false;
            state.orders=action.payload;
        });
    
        builder.addCase("myOrdersFail",(state,action)=>{
            state.loading=false;
            state.error=action.payload;
        });

            // adminOrders function

            builder.addCase("adminOrdersRequest",(state)=>{
                state.loading=true; 
            });
        
            builder.addCase("adminOrdersSuccess",(state,action)=>{
                state.loading=false;
                state.adminOrders=action.payload;
            });
        
            builder.addCase("adminOrdersFail",(state,action)=>{
                state.loading=false;
                state.error=action.payload;
            });

               // processOrder function

            builder.addCase("processOrderRequest",(state)=>{
                state.loading=true; 
            });
        
            builder.addCase("processOrderSuccess",(state,action)=>{
                state.loading=false;
                state.message=action.payload;
            });
        
            builder.addCase("processOrderFail",(state,action)=>{
                state.loading=false;
                state.error=action.payload;
            });

        

    //clearing functions

    builder.addCase("clearMessage",(state)=>{
        state.message=null;
    });

    builder.addCase("clearError",(state)=>{
        state.error=null;
    });
});