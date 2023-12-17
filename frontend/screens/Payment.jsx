import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { colors, defaultStyle } from '../styles/styles'
import Header from '../components/Header'
import Heading from '../components/Heading'
import { Button, RadioButton } from 'react-native-paper'
import { useDispatch, useSelector } from 'react-redux'
import { placeOrder } from '../redux/actions/orderAction'
import { useMessageAndErrorOrder } from '../utils/customHook'
import { useStripe } from "@stripe/stripe-react-native";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import axios from 'axios'
import { server } from '../redux/store'
import Loader from '../components/Loader'

const Payment = ({route,navigation}) => {

  const [paymentMethod,setPaymentMethod] =useState("COD");
  const [loaderLoading, setLoaderLoading] = useState(false);

  const dispatch=useDispatch();
  const stripe=useStripe();

 const {isAuthenticated,user} =useSelector(state=>state.user);
 const {cartItems} =useSelector(state=>state.cart);

 const codHandler=(paymentInfo)=>{
    const shippingInfo = {
      address: user.address,
      city: user.city,
      country: user.country,
      pinCode: user.pinCode,
    };

    const itemsPrice = route.params.itemsPrice;
    const shippingCharges = route.params.shippingCharges;
    const taxPrice = route.params.gst;
    const totalAmount = route.params.totalAmount;


    dispatch(
        placeOrder(
           shippingInfo,
           cartItems,
           paymentMethod,
           paymentInfo,
           itemsPrice,
           taxPrice,
           shippingCharges,
           totalAmount
      )
    );
 }

 const onlineHandler = async()=>{

  try {


    const {data:{client_secret}}=await axios.post(`${server}/order/payment`,{totalAmount:route.params.totalAmount},{
     
      headers:{
          "Content-Type":"application/json"
        },

        withCredentials: true,
    });

    
  

    const init = await stripe.initPaymentSheet({
      paymentIntentClientSecret: client_secret,
      merchantDisplayName: "bhaiteracom",
    });

 

    if (init.error){
      return Toast.show({ type: "error", text1: init.error.message });
    }


    const presentSheet =await stripe.presentPaymentSheet();
    setLoaderLoading(true);

   
    

    if (presentSheet.error) {
      setLoaderLoading(false);
      return Toast.show({ type: "error", text1: presentSheet.error.message });
    }

    const { paymentIntent } = await stripe.retrievePaymentIntent(
      client_secret
    );

    if (paymentIntent.status === "Succeeded") {
      codHandler({ id: paymentIntent.id, status: paymentIntent.status });
    }

  } catch (error) {
      return Toast.show({
        type:"error",
        text1:error
      })
  }
  
 
 }

 const loading=useMessageAndErrorOrder(navigation,dispatch,"profile");

  return loaderLoading ? <Loader/>: (
    <View
      style={defaultStyle}
    >

      <Header back={true}/>

      <Heading text1='Payment' text2='Method' containerStyle={{paddingTop:70}}/>

      <View
          style={style.container}
      >

        <RadioButton.Group
          onValueChange={setPaymentMethod}
          value={paymentMethod}
        >

          <View style={style.radioButton}>
             <Text style={style.radioButtonText}>Cash ON Deleivery</Text>
             <RadioButton color={colors.color1} value='COD' />
          </View>

          <View style={style.radioButton}>
             <Text style={style.radioButtonText}>Online</Text>
             <RadioButton color={colors.color1} value='ONLINE'/>
          </View>

        </RadioButton.Group>

      </View>

      <TouchableOpacity
        disabled={loading}
        onPress={

          !isAuthenticated ? ()=>navigation.navigate('login') : paymentMethod ==="COD" ? ()=>codHandler() : onlineHandler

        }
      >
         <Button
           loading={loading}
           disabled={loading}
            textColor={colors.color2}
            style={style.btn}
            icon={paymentMethod==="COD" ? "check-circle" : "circle-multiple-outline"}
         >
          {paymentMethod==="COD" ? "Place Order" : "Pay"}
         </Button>
      </TouchableOpacity>
        
    </View>
  )
}

const style=StyleSheet.create({
   container:{
              flex:1,
              alignItems:"center",
              justifyContent:"center",
              backgroundColor:colors.color3,
              borderRadius:5,
              margin:5,
              flexDirection:"row"
   },


   radioButton:{
      flexDirection:'row',
      alignItems:"center",
      justifyContent:"space-between",
   },

   radioButtonText:{
     fontSize:18,
     fontWeight:"600",
     color:colors.color5,
  },

  btn:{
    backgroundColor:colors.color3,
    borderRadius:10,
  },
});

export default Payment