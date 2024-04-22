import {createReducer} from "@reduxjs/toolkit";

export const otherReducer=createReducer({},(builder)=>{

    // get all Category function

    builder.addCase("getAllCategoryRequest",(state)=>{
        state.loading=true;
       
    });

    builder.addCase("getAllCategorySuccess",(state,action)=>{
        state.loading=false;
        state.categories=action.payload;
    });

    builder.addCase("getAllCategoryFail",(state,action)=>{
        state.loading=false;
        state.error=action.payload;
    });

       // delete Category function

    builder.addCase("deleteCategoryRequest",(state)=>{
        state.loading=true; 
    });

    builder.addCase("deleteCategorySuccess",(state,action)=>{
        state.loading=false;
        state.message=action.payload;
    });

    builder.addCase("deleteCategoryFail",(state,action)=>{
        state.loading=false;
        state.error=action.payload;
    });

        // add Category function

        builder.addCase("addCategoryRequest",(state)=>{
            state.loading=true; 
        });
    
        builder.addCase("addCategorySuccess",(state,action)=>{
            state.loading=false;
            state.message=action.payload;
        });
    
        builder.addCase("addCategoryFail",(state,action)=>{
            state.loading=false;
            state.error=action.payload;
        });
    
         // updateProfilePicture function

         builder.addCase("updateProfilePictureRequest",(state)=>{
            state.loading=true;
        });
    
        builder.addCase("updateProfilePictureSuccess",(state,action)=>{
            state.loading=false;
            state.message=action.payload;
        });
    
        builder.addCase("updateProfilePictureFail",(state,action)=>{
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