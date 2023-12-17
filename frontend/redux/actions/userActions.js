import { server } from "../store";
import axios from "axios";



export const login = (email, password) => async (dipatch) => {

    try {

        dipatch({
            type: "loginRequest",
        });


        const { data } = await axios.post(`${server}/user/login`, { email, password }, {
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: true,
        });

        dipatch({
            type: "loginSuccess",
            payload: data.message,
        });



    } catch (error) {
        dipatch({
            type: "loginFail",
            payload: error.response.data.message,
        });
    }
}

export const loadUser = () => async (dipatch) => {

    try {

        dipatch({
            type: "loadUserRequest",
        });

        


        const { data } = await axios.get(`${server}/user/me`, {
          withCredentials: true,
        });

       

        dipatch({
            type: "loadUserSuccess",
            payload: data.user,
        });

       



    } catch (error) {
        dipatch({
            type: "loadUserFail",
            payload: error.response.data.message,
        });
    }
}

export const logOutUser = () => async (dipatch) => {

    try {

        dipatch({
            type: "logoutUserRequest",
        });


        const { data } = await axios.get(`${server}/user/logout`, {
          withCredentials: true,
        });

        dipatch({
            type: "logoutUserSuccess",
            payload: data.message,
        });



    } catch (error) {
        dipatch({
            type: "logoutUserFail",
            payload: error.response.data.message,
        });
    }
}

export const register = (formData) => async (dipatch) => {

   

    try {

        dipatch({
            type: "registerUserRequest",
        });

      



        const { data } = await axios.post(`${server}/user/register`, formData,{
            headers: {
                "Content-Type": "multipart/form-data",
            },
          withCredentials: true,
        });

       

        dipatch({
            type: "registerUserSuccess",
            payload: data.message,
        });

       


    } catch (error) {
        dipatch({
            type: "registerUserFail",
            payload: error.response.data.message,
        });
    }
}


export const forgotPassword = (email) => async (dipatch) => {

    try {

        dipatch({
            type: "forgotPasswordRequest",
        });

      
        const { data } = await axios.post(`${server}/user/forgotpassword`, {email},{
            headers: {
                "Content-Type": "application/json",
            },
          withCredentials: true,
        });

       

        dipatch({
            type: "forgotPasswordFail",
            payload: data.message,
        });

    
    } catch (error) {
        dipatch({
            type: "registerUserFail",
            payload: error.response.data.message,
        });
    }
}

export const resetPassword = (otp,password,confirmPassword) => async (dipatch) => {

    try {

        dipatch({
            type: "resetPasswordRequest",
        });

      
        const { data } = await axios.put(`${server}/user/password/reset`, {otp,password,confirmPassword},{
            headers: {
                "Content-Type": "application/json",
            },
          withCredentials: true,
        });

       

        dipatch({
            type: "resetPasswordSuccess",
            payload: data.message,
        });

    
    } catch (error) {
        dipatch({
            type: "resetPasswordFail",
            payload: error.response.data.message,
        });
    }
}


export const changePassword = (oldPassword,newPassword,confirmPassword) => async (dipatch) => {

    try {

        dipatch({
            type: "changePasswordRequest",
        });

      
        const { data } = await axios.put(`${server}/user/updatepassword`, {oldPassword,newPassword,confirmPassword},{
            headers: {
                "Content-Type": "application/json",
            },
          withCredentials: true,
        });

       

        dipatch({
            type: "changePasswordSuccess",
            payload: data.message,
        });

    
    } catch (error) {
        dipatch({
            type: "changePasswordFail",
            payload: error.response.data.message,
        });
    }
}

export const updateProfile = (name,address,city,pin,country) => async (dipatch) => {

    try {

        dipatch({
            type: "updateProfileRequest",
        });

        const pinCode=Number(pin);

      
        const { data } = await axios.put(`${server}/user/update/profile`, {name,address,city,pinCode,country},{
            headers: {
                "Content-Type": "application/json",
            },
          withCredentials: true,
        });

       

        dipatch({
            type: "updateProfileSuccess",
            payload: data.message,
        });

    
    } catch (error) {
        dipatch({
            type: "updateProfileFail",
            payload: error.response.data.message,
        });
    }
}

export const verifyUser = (otp,email) => async (dipatch) => {

    try {

        dipatch({
            type: "verifyUserRequest",
        });

        

        
        const { data } = await axios.post(`${server}/user/verify`, {otp,email},{
            headers: {
                "Content-Type": "application/json",
            },
          withCredentials: true,
        });

       

        dipatch({
            type: "verifyUserSuccess",
            message: data.message,
            user:data.user,
        });

    
    } catch (error) {
        dipatch({
            type: "verifyUserFail",
            payload: error.response.data.message,
        });
    }
}

