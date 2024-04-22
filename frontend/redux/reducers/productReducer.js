import {createReducer} from "@reduxjs/toolkit";

export const productReducer=createReducer( {
    products: [],
    product: {},
  },(builder)=>{


       //  create product function

    builder.addCase("createProductRequest",(state)=>{
        state.loading=true; 
    });

    builder.addCase("createProductSuccess",(state,action)=>{
        state.loading=false;
        state.message=action.payload;
    });

    builder.addCase("createProductFail",(state,action)=>{
        state.loading=false;
        state.error=action.payload;
    });

       //  get admin all products function

       builder.addCase("adminProductRequest",(state)=>{
        state.loading=true; 
    });

    builder.addCase("adminProductSuccess",(state,action)=>{
        state.loading=false;
        state.products=action.products;
        state.outOfStock=action.outOfStock;
        state.inStock=action.inStock;
    });

    builder.addCase("adminProductFail",(state,action)=>{
        state.loading=false;
        state.error=action.payload;
    });

       //  get  all products function

       builder.addCase("getAllProductRequest",(state)=>{
        state.loading=true; 
    });

    builder.addCase("getAllProductSuccess",(state,action)=>{
        state.loading=false;
        state.products=action.payload;
    });

    builder.addCase("getAllProductFail",(state,action)=>{
        state.loading=false;
        state.error=action.payload;
    });

         //  getSingleProduct products function

         builder.addCase("getSingleProductRequest",(state)=>{
            state.loading=true; 
        });
    
        builder.addCase("getSingleProductSuccess",(state,action)=>{
            state.loading=false;
            state.product=action.payload;
        });
    
        builder.addCase("getSingleProductFail",(state,action)=>{
            state.loading=false;
            state.error=action.payload;
        });

        //  getAllProductsByCategory products function

        builder.addCase("getAllProductsByCategoryRequest",(state)=>{
            state.loading=true; 
        });
    
        builder.addCase("getAllProductsByCategorySuccess",(state,action)=>{
            state.loading=false;
            state.products=action.payload;
        });
    
        builder.addCase("getAllProductsByCategoryFail",(state,action)=>{
            state.loading=false;
            state.error=action.payload;
        });

        //  updateproductImage  function

        builder.addCase("updateproductImageRequest",(state)=>{
            state.loading=true; 
        });
    
        builder.addCase("updateproductImageSuccess",(state,action)=>{
            state.loading=false;
            state.message=action.payload;
        });
    
        builder.addCase("updateproductImageFail",(state,action)=>{
            state.loading=false;
            state.error=action.payload;
        });

           //  deleteproductImage  function

        builder.addCase("deleteproductImageRequest",(state)=>{
            state.loading=true; 
        });
    
        builder.addCase("deleteproductImageSuccess",(state,action)=>{
            state.loading=false;
            state.message=action.payload;
        });
    
        builder.addCase("deleteproductImageFail",(state,action)=>{
            state.loading=false;
            state.error=action.payload;
        });

             //  updateProduct  function

             builder.addCase("updateProductRequest",(state)=>{
                state.loading=true; 
            });
        
            builder.addCase("updateProductSuccess",(state,action)=>{
                state.loading=false;
                state.message=action.payload;
            });
        
            builder.addCase("updateProductFail",(state,action)=>{
                state.loading=false;
                state.error=action.payload;
            });

              //  deleteProduct  function

            builder.addCase("deleteProductRequest",(state)=>{
                state.loading=true; 
            });
        
            builder.addCase("deleteProductSuccess",(state,action)=>{
                state.loading=false;
                state.message=action.payload;
            });
        
            builder.addCase("deleteProductFail",(state,action)=>{
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