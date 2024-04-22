import { server } from "../store";
import axios from "axios";


export const placeOrder = (
    shippingInfo,
    orderItems,
    paymentMethod,
    paymentInfo,
    itemsPrice,
    taxPrice,
    shippingCharges,
    totalAmount
    ) => async (dipatch) => {

    try {

        dipatch({
            type:"placeOrderRequest",
        });


        const { data } = await axios.post(`${server}/order/new`,
        {
            shippingInfo,
            orderItems,
            paymentMethod,
            paymentInfo,
            itemsPrice,
            taxPrice,
            shippingCharges,
            totalAmount
        },{
            headers:{
                "Content-Type":"application/json"
            }
        }
            
            );

        dipatch({
            type:"placeOrderSuccess",
            payload: data.message,
        });

    } catch (error) {
        dipatch({
            type:"placeOrderFail",
            payload: error.response.data.message,
        });
    }
}

export const myOrders = () => async (dipatch) => {

    try {

 

        dipatch({
            type:"myOrdersRequest",
        });

       


        const { data } = await axios.get(`${server}/order/my`);

        dipatch({
            type:"myOrdersSuccess",
            payload: data.orders,
        });

    } catch (error) {
        dipatch({
            type:"myOrdersFail",
            payload: error.response.data.message,
        });
    }
}

export const getAdminOrders = () => async (dipatch) => {

    try {

 

        dipatch({
            type:"adminOrdersRequest",
        });

       


        const { data } = await axios.get(`${server}/order/admin`);

        dipatch({
            type:"adminOrdersSuccess",
            payload: data.orders,
        });

    } catch (error) {
        dipatch({
            type:"adminOrdersFail",
            payload: error.response.data.message,
        });
    }
}

export const proccessOrder = (id) => async (dipatch) => {

    try {

        dipatch({
            type:"processOrderRequest",
        });

       


        const { data } = await axios.put(`${server}/order/single/${id}`);

        dipatch({
            type:"processOrderSuccess",
            payload: data.message,
        });

    } catch (error) {
        dipatch({
            type:"processOrderFail",
            payload: error.response.data.message,
        });
    }
}