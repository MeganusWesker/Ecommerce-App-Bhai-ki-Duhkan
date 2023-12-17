import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors, defaultStyle } from '../styles/styles'
import Header from '../components/Header'
import Loader from '../components/Loader';
import { Headline } from 'react-native-paper';
import OrderItems from '../components/OrderItems';
import { useDispatch, useSelector } from 'react-redux';
import { myOrders } from '../redux/actions/orderAction';






const Orders = () => {

  

  const dispatch=useDispatch();

  const {loading,orders} =useSelector(state=>state.order);

 
  return (
    <View
      style={{
        ...defaultStyle,
        backgroundColor:colors.color5,
      }}
    >

        <Header back={true}/>


        <View style={style.loginHeading} >
           <Text 
                style={{
                    color:colors.color2,
                    textAlign:"center",
                }}
           >
              Orders
            </Text>
        </View>

        {loading ? <Loader/> :(
            <View
               style={{
                 flex:1,
               }}
            >

                <ScrollView
                  showsVerticalScrollIndicator={false}
                >

                    {orders.length > 0 ? (
                        orders && orders.map((item,index)=>(
                            <OrderItems
                               key={item._id}
                               id={item._id}
                               i={index}
                               address={`${item.shippingInfo.address} ,${item.shippingInfo.city}, ${item.shippingInfo.pinCode} ${item.shippingInfo.country} `}
                               paymentMethod={item.paymentMethod}
                               price={item.totalAmount}
                               createdOn={item.createdAt.split('T')[0]}
                               status={item.orderStatus}
                            />

                        ))
                    ) : <Headline style={{textAlign:"center"}}>No Orders</Headline>}

                </ScrollView>


            </View>
        )}
   
    </View>
  )
}

const style=StyleSheet.create({
    loginHeading:{
         backgroundColor:colors.color3,
         padding:8,
         borderRadius:5,
         elevation:5,
        marginVertical:60,
    },

    forgotPaassword:{
      alignSelf:"flex-end",
      fontSize:15,
      fontWeight:"100",
      color:colors.color2,
      marginHorizontal:5,
      marginVertical:5,
    },

    btn:{
        backgroundColor:colors.color1,
        marginHorizontal:10,
        borderRadius:5,
    },

    OR:{
     textAlign:"center",
      marginVertical:8,
      color:colors.color2,
      fontWeight:"100",
    },

    link:{
      textAlign:"center",
      color:colors.color2,
      textTransform:"uppercase"
    },


});

export default Orders