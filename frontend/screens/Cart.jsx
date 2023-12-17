import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { colors, defaultStyle } from '../styles/styles'
import Header from '../components/Header'
import Heading from '../components/Heading'
import { Button } from 'react-native-paper'
import CartComponent from '../components/CartComponent'
import { useNavigation } from '@react-navigation/native'
import {useDispatch, useSelector} from "react-redux";
import { Toast } from "react-native-toast-message/lib/src/Toast";

const Cart = () => {

  const navigate =useNavigation();
  const dispatch=useDispatch();

  const {cartItems} =useSelector(state=>state.cart);



 const decerementHandler =(id, name, price, image, stock, quantity)=>{
  const newQty = quantity - 1;

  if(1>=quantity){
    dispatch({
      type:"removeFromCart",
      payload:id,
    })

    return Toast.show({
      type:"success",
      text1:"Item removed succefully",
    })
  }

    dispatch({
      type:"addToCart",
      payload: {
        product: id,
        name,
        price,
        image,
        stock,
        quantity: newQty,
      },
    })
 }

 const incrementHandler =(id, name, price, image, stock, quantity)=>{
 
  const newQty = quantity + 1;

    if(stock <= quantity){
      return Toast.show({
        type:"error",
        text1:"Maximum quantity added",
      })
    }

    dispatch({
      type:"addToCart",
      payload: {
        product: id,
        name,
        price,
        image,
        stock,
        quantity: newQty,
      },
    })

 }



  return (
    <View
       style={{
          flex:1,
          padding:0,
          ...defaultStyle,
       }}
    >

        <Header back={true} emptyCart={true}/>

        <Heading text1='Shopping' text2='Cart' containerStyle={{
            paddingTop:70
        }}/>

        <View 
          style={{
            paddingVertical:20,
            flex:1,
          }}
        
        >

          <ScrollView showsVerticalScrollIndicator={false}>

       

          {cartItems && cartItems.map((item,index)=>(
                    <CartComponent
                       key={item.product}
                       id={item.product}
                       price={item.price}
                       stock={item.stock}
                       image={item.image}
                       index={index}
                       quantity={item.quantity}
                       incrementHandler={incrementHandler}
                       decerementHandler={decerementHandler}
                       name={item.name}
                    
                    />
          ))}

         </ScrollView>

        </View>

        <View 
            style={{
              flexDirection:"row",
              justifyContent:"space-between",
              marginVertical:20,
            }}
        >

        <Text>{cartItems.length} Items</Text>
        <Text>
          ₹
          {cartItems.reduce(
            (prev, curr) => prev + curr.quantity * curr.price,
            0
          )}
        </Text>

        </View>


        <TouchableOpacity onPress={cartItems.length > 0  ? ()=>navigate.navigate("confirmorder"):null}>
           <Button 
             style={{
                backgroundColor:colors.color3,
                
             }}
              icon={"cart"}
              textColor={colors.color5}
           >

            Checkout

           </Button>
        </TouchableOpacity>
       
    </View>
  )
}

export default Cart