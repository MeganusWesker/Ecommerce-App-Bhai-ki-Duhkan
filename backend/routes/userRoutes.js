import express from 'express';

const router=express.Router();

import { isAuthenticated,isAdmin } from "../middlewares/auth.js";
import singleUpload from "../middlewares/multer.js"

import {
        register,
        login,
        verify,
        logout,
        changePassword,
        getMyProfile,
        forgotPassword,
        resetPassword,
        updateProfile,
        updateProfilePicture
       } from "../controller/userController.js";


router.route('/register').post(singleUpload,register);

router.route('/verify').post(verify);

router.route('/login').post(login);

router.route('/logout').get(isAuthenticated,logout);

router.route('/update/profile').put(isAuthenticated,updateProfile);

router.route('/update/profile/picture').put(singleUpload,isAuthenticated,updateProfilePicture);

router.route('/updatepassword').put(isAuthenticated,changePassword);

router.route('/me').get(isAuthenticated,getMyProfile);

router.route('/forgotpassword').post(forgotPassword);

router.route('/password/reset').put(resetPassword);


export default router;