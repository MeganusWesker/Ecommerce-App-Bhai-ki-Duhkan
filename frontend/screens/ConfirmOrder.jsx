import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors, defaultStyle } from '../styles/styles'
import Header from '../components/Header'
import Heading from '../components/Heading'
import ConfirmOrderItem from '../components/ConfirmOrderItem'
import { Button } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { useState } from 'react'




const ConfirmOrder = () => {

    const navigate=useNavigation();

    const {cartItems} =useSelector(state=>state.cart);

    const[itemsPrice]=useState(
      cartItems.reduce((prev,curr)=>prev + curr.quantity*curr.price,0)
    );

    const [shippingCharges] =useState(itemsPrice > 10000 ? 0:200);
    const [gst] =useState(Number((0.18 * itemsPrice).toFixed()));
    const [totalAmount] =useState(gst+shippingCharges+itemsPrice);


  return (
    <View 
      style={defaultStyle}
    >

        <Header back={true}/>

        <Heading text1='Confirm' text2='Order' containerStyle={{paddingTop:70}}/>

        <View style={{
            flex:1,
            paddingVertical:20,
        }}>

            <ScrollView showsVerticalScrollIndicator>
                
                {cartItems && cartItems.map((item,index)=>(
                    <ConfirmOrderItem
                      key={item.product}
                      name={item.name}
                      price={item.price}
                      quantity={item.quantity}
                      image={item.image}
                    />
                ))}



            </ScrollView>

        </View>

        <PriceTag heading={"Subtotal"} value={itemsPrice}/>
        <PriceTag heading={"Shipping"} value={shippingCharges}/>
        <PriceTag heading={"Tax"} value={gst}/>
        <PriceTag heading={"Total"} value={totalAmount}/>

        <TouchableOpacity 
           onPress={()=>navigate.navigate("payment",{
              itemsPrice,
              shippingCharges,
              gst,
              totalAmount
           })}
        >
            <Button
              style={{
                 borderRadius:100,
                 backgroundColor:colors.color3,
              }}

              textColor={colors.color5}
              icon={"chevron-right"}
            >
                Payment
            </Button>
        </TouchableOpacity>
    
    </View>
  )
}

const PriceTag =({heading,value})=>(
   <View
     style={{
         flexDirection:"row",
         justifyContent:"space-between",
         marginVertical:3,

     }}
   >

    <Text style={{fontSize:18, fontWeight:"800"}}>{heading}</Text>
    <Text style={{fontSize:18}}>₹{value}</Text>

   </View>
);

export default ConfirmOrder