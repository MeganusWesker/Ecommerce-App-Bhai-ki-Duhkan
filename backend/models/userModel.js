import mongoose from 'mongoose';
import validator from 'validator';
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const userSchema =mongoose.Schema({
    
    name:{
        type: String,
        required: [true,"please enter you're name"],
    },
    email:{
        type: String,
        required: [true,"please enter you're email"],
        unique:[true, "email already registred"],
        validate: [validator.isEmail,'please enter valid email address']
    },

    password:{
        type:String,
        required:[true,'please enter your passowrd'],
        minlength:[6,'your password must be longer than 6 characeters'],
        select:false    
    },
    avatar:{
        public_id:{
            type:String,
            required:true
        },
        url:{
            type:String,
            required:true
        }
    },


    role:{
        type: String,
        default:'user'
    },

    

    country:{
        type:String,
        required:true,
    },

     address:{
        type:String,
        required:true,
    },
    city:{
        type:String,
        required:true,
    },

    pinCode:{
        type:Number,
        required:true,
    },

    createdAt:{
        type:Date,
        default:Date.now
     },


     verified:{
       type:Boolean,
       default:false
     },

    otp:Number,
    otp_expire:Date,
});

userSchema.pre('save',async function(next){
    if(!this.isModified('password')){
        next();
    }
     this.password = await bcrypt.hash(this.password,10);
     next();
 });
 
 userSchema.methods.getJwtToken=function(){
    return jwt.sign({_id:this._id},process.env.JWT_SECRET,{expiresIn:process.env.JWT_EXPIRE});
 }

 userSchema.methods.comparePassword=async function(password){
    return await bcrypt.compare(password,this.password)
}

const user = mongoose.model('User',userSchema);

export default user;