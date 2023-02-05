import express from 'express';

const router=express.Router();


import {
    createOrder,
    getAdminOrders,
    getMyOrders,
    getOrderDetails,
    proccessOrder,
    processPayment,
  } from "../controller/orderController.js";

import { isAuthenticated,isAdmin } from "../middlewares/auth.js";


router.post("/new", isAuthenticated, createOrder);
router.post("/payment", isAuthenticated, processPayment);

router.get("/my", isAuthenticated, getMyOrders);
router.get("/admin", isAuthenticated, isAdmin, getAdminOrders);

router
  .route("/single/:id")
  .get(isAuthenticated, getOrderDetails)
  .put(isAuthenticated, isAdmin, proccessOrder);


export default router;