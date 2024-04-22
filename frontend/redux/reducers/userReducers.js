import {createReducer} from "@reduxjs/toolkit";

export const userReducer=createReducer({},(builder)=>{

    // login function

    builder.addCase("loginRequest",(state)=>{
        state.loading=true;
        state.isAuthenticated=false;
    });

    builder.addCase("loginSuccess",(state,action)=>{
        state.loading=false;
        state.isAuthenticated=true;
        state.message=action.payload;
    });

    builder.addCase("loginFail",(state,action)=>{
        state.loading=false;
        state.isAuthenticated=false;
        state.error=action.payload;
    });


     // loadUser or  Get MyProfile function

    builder.addCase("loadUserRequest",(state)=>{
        state.loading=true;
        state.isAuthenticated=false;
    });

    builder.addCase("loadUserSuccess",(state,action)=>{
        state.loading=false;
        state.isAuthenticated=true;
        state.user=action.payload;
    });

    builder.addCase("loadUserFail",(state,action)=>{
        state.loading=false;
        state.isAuthenticated=false;
        state.error=action.payload;
    });



     // logoutUser function

     builder.addCase("logoutUserRequest",(state)=>{
        state.loading=true;
    });

    builder.addCase("logoutUserSuccess",(state,action)=>{
        state.loading=false;
        state.isAuthenticated=false;
        state.message=action.payload;
    });

    builder.addCase("logoutUserFail",(state,action)=>{
        state.loading=false;
        state.error=action.payload;
    });

      // register function

    builder.addCase("registerUserRequest",(state)=>{
        state.loading=true;
        state.isAuthenticated=false;
    });

    builder.addCase("registerUserSuccess",(state,action)=>{
        state.loading=false;
        state.isAuthenticated=false;
        state.message=action.payload;
    });

    builder.addCase("registerUserFail",(state,action)=>{
        state.loading=false;
        state.error=action.payload;
    });

    // verifyUser


    builder.addCase("verifyUserRequest",(state)=>{
        state.loading=true;
        state.isAuthenticated=false;
    });

    builder.addCase("verifyUserSuccess",(state,action)=>{
        state.loading=false;
        state.isAuthenticated=true;
        state.message=action.message;
        state.user=action.user;
    });

    builder.addCase("verifyUserFail",(state,action)=>{
        state.loading=false;
        state.isAuthenticated=false;
        state.error=action.payload;
    });

         // forgotPassword function

         builder.addCase("forgotPasswordRequest",(state)=>{
            state.loading=true;
            state.isAuthenticated=false;
        });
    
        builder.addCase("forgotPasswordSuccess",(state,action)=>{
            state.loading=false;
            state.message=action.payload;
        });
    
        builder.addCase("forgotPasswordFail",(state,action)=>{
            state.loading=false;
            state.error=action.payload;
        });

          // resetPassword function

        builder.addCase("resetPasswordRequest",(state)=>{
            state.loading=true;
            state.isAuthenticated=false;
        });
    
        builder.addCase("resetPasswordSuccess",(state,action)=>{
            state.loading=false;
            state.message=action.payload;
        });
    
        builder.addCase("resetPasswordFail",(state,action)=>{
            state.loading=false;
            state.error=action.payload;
        });

         // changePassword function

         builder.addCase("changePasswordRequest",(state)=>{
            state.loading=true;
        });
    
        builder.addCase("changePasswordSuccess",(state,action)=>{
            state.loading=false;
            state.message=action.payload;
        });
    
        builder.addCase("changePasswordFail",(state,action)=>{
            state.loading=false;
            state.error=action.payload;
        });

         // updateProfile function

        builder.addCase("updateProfileRequest",(state)=>{
            state.loading=true;
        });
    
        builder.addCase("updateProfileSuccess",(state,action)=>{
            state.loading=false;
            state.message=action.payload;
        });
    
        builder.addCase("updateProfileFail",(state,action)=>{
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