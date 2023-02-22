import catchAsyncErrors from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../utils/errorHandler.js";
import { sendToken } from "../utils/sendToken.js";
import {sendEmail} from "../utils/sendEmail.js";
import getDataUri from "../utils/dataUri.js";
import cloudinary from "cloudinary";
import User from "../models/userModel.js";



export const register =catchAsyncErrors(async (req,res,next)=>{

    const {name,email,password,country,city,pinCode,address} =req.body;
    const file =req.file;

    if(!name || !email || !password || !file || !country || !city || !pinCode || !address){
        return next(new ErrorHandler("please enter all fields ",400));
    }

    const fileUrl =getDataUri(file);

    const myCloud =await cloudinary.v2.uploader.upload(fileUrl.content,{
        folder:"avatars",
    });

    const otp=Math.floor(Math.random() *10000000);

    const subject= `confirm you're otp`;

    const text =`hey this is you're otp ${otp} valid for 5 mintues please verify ignore if you did'nt registerd or requested`;

    const user= await User.create({
        name,
        email,
        password,
        country,
        city,
        pinCode,
        address,
        avatar:{
            public_id:myCloud.public_id,
            url:myCloud.secure_url
        },
        otp,
        otp_expiry:new Date(Date.now() + process.env.OTP_EXPIRE *60 *1000)

    });

    
    try {
        await sendEmail(email,subject,text);
        
    } catch (error) {
       
      return  res.status(400).json({
            success:false,
            message:error.message
        });
    }

    res.status(200).json({
        success:true,
        message:"otp sent please verify you're email"
    });

});

export const verify =catchAsyncErrors(async (req,res,next)=>{

    const otp =Number(req.body.otp);
    const email =req.body.email;
    const user=await User.find({email});
    
    if(otp!==user.otp || user.otp_expiry<Date.now()){
        return next(new ErrorHandler("invalid otp or expired otp",400));
    }

    user.verified=true;
    user.otp=null;
    user.otp_expiry=null;

    await user.save();

    sendToken(res,user,200,"account verified");

});

export const login =catchAsyncErrors(async (req,res,next)=>{

    const {email,password} =req.body;

    const user =await User.findOne({email}).select("+password");

    if(!user){
        return next(new ErrorHandler("user not found please register",404));
    }

    const isMatched= await user.comparePassword(password);

    if(!isMatched){
        return next(new ErrorHandler("invalid credentials",403));
    }

    if(!user.verified){
        return next(new ErrorHandler("please verify you're email",403));
    }

    sendToken(res,user,200,"loged in successfullly");
    
});

export const logout =catchAsyncErrors(async(req,res,next)=>{

    const options ={
        httpOnly:process.env.NODE_ENV === "Development" ? false : true,
        secure:process.env.NODE_ENV === "Development" ? false : true,
        sameSite:process.env.NODE_ENV === "Development" ? false : "none",
        expires:new Date(Date.now())
    }

    res.cookie('token',null,options);

    res.status(200).json({
        success:true,
        message:"loged out sucessfully"
    });

});


export const changePassword =catchAsyncErrors(async(req,res,next)=>{
    const {oldPassword,newPassword,confirmPassword} =req.body;

    if(!oldPassword || !newPassword || !confirmPassword){
       return next(new ErrorHandler("please enter all required fields",400));
    }


    const user=await User.findById(req.user._id).select("+password");

    

    const isMatched= await user.comparePassword(oldPassword);

   

    if(!isMatched){
       return next(new ErrorHandler(" old password dosen't matched",403));
   }

   if(newPassword!==confirmPassword){
       return next(new ErrorHandler(" confirm password dosen't matched with you're new password ",403));
   }

   user.password=newPassword;

   await user.save();

   res.status(200).json({
       success:true,
       message:"password changes successfully"
   });
});


export const getMyProfile =catchAsyncErrors(async(req,res,next)=>{

    const user =await User.findById(req.user._id);

    res.status(200).json({
        success:true,
        user
    });
});

export const forgotPassword =catchAsyncErrors(async (req,res,next)=>{
    const {email} =req.body;
 
    const user=await User.findOne({email});
 
    if(!user){
     return next(new ErrorHandler("user not found with this email",404));
    }

    const otp=Math.floor(Math.random() *10000000);

    const subject= `you're otp for password reset`;

    const text =`hey this is you're otp ${otp} valid for 5 mintues please verify ignore if you did'nt registerd or requested`;
 
    user.otp=otp;
    user.otp_expire=new Date(Date.now() + process.env.OTP_EXPIRE *60 *1000);
 
    
 
    await user.save({validateBeforeSave:false});
 

     try {
          
       await sendEmail(user.email,subject,text);
 
         res.status(200).json({
             success:true,
             message:`email sent to ${user.email} succesfully`
         })
 
 
      } catch (error) {
          user.otp = undefined;
          user.otp_expire= undefined;

          await user.save({validateBeforeSave:false});
 
         return next(new ErrorHandler(error.message,500));
      }
 
 
 
 });



 export const resetPassword =catchAsyncErrors(async (req,res,next)=>{
    const {otp} =req.body;

    const user =await User.findOne({
       otp,
       otp_expire:{$gt:Date.now()}
    });

    if(!user){
       return next(new ErrorHandler("reset password otp is invalid or has been expired",404));
   }

   const {confirmPassword,password} =req.body;

   if(password!==confirmPassword){
       return next(new ErrorHandler(" confimr password dosen't matched with you're new password ",403));
   }

   user.password=password;
   user.otp = undefined;
   user.otp_expire = undefined;

   await  user.save();

   res.status(200).json({
       success:true,
       message:"password rested successfully"
   });

});


export const updateProfile= catchAsyncErrors(async (req, res, next) => {
    const { name, address, pinCode, country, city } = req.body;
  
   const user= await User.findById(req.user._id);

  
    if (name) user.name = name;
    if (address) user.address = address;
    if (pinCode) user.pinCode = pinCode;
    if (country) user.country = country;
    if (city) user.city = city;
  
    await user.save();
  
    res.status(200).json({
      success: true,
      message: "Profile Updated Successfully",
    });
});

export const updateProfilePicture = catchAsyncErrors(async (req, res, next) => {
   
    const user= await User.findById(req.user._id);

   const file =req.file;

   if(!file){
       return next(new ErrorHandler("please enter profile picture to update ",400));
    }

   const fileUrl =getDataUri(file);

   const myCloud =await cloudinary.v2.uploader.upload(fileUrl.content,{
       folder:"avatars",
   });

   await cloudinary.v2.uploader.destroy(user.avatar.public_id);


   user.avatar.public_id=myCloud.public_id;
   user.avatar.url=myCloud.secure_url;

    await user.save();
  
    res.status(200).json({
      success: true,
      message: "Profile Picture Updated Successfully",
    });
});





 