import app from "./app.js";
import cloudinary from "cloudinary";
import Stripe from "stripe";


export const stripe = new Stripe(process.env.STRIPE_API_SECRET);


cloudinary.v2.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET
});

app.listen(process.env.PORT,()=>{
    console.log(`Server is Working on port ${process.env.PORT} in ${process.env.NODE_ENV} mode`);
})