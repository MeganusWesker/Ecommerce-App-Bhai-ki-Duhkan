import express from "express";
import dotenv from "dotenv";
import errorMiddleware from "./middlewares/errors.js";
import cookiParser from "cookie-parser";
import cors from "cors";

const app = express();

dotenv.config({
    path:'./config/config.env'
});

import connnectToDatabase from "./config/database.js";


// connnecting to database
connnectToDatabase();

app.use(express.json());
app.use(cookiParser());

app.use(
    cors({
      credentials: true,
      methods: ["GET", "POST", "PUT", "DELETE"],
      origin: [process.env.FRONTEND_URI_1, process.env.FRONTEND_URI_2],
    })
);



// importing routes from routes Folder
import userRoutes from './routes/userRoutes.js';
import productRoutes from './routes/productRoutes.js';
import orderRoutes from './routes/orderRoutes.js';

// using routes

app.use('/api/v1/user',userRoutes);
app.use('/api/v1/product',productRoutes);
app.use('/api/v1/order',orderRoutes);

// using errorMiddleware
app.use(errorMiddleware);


export default app;