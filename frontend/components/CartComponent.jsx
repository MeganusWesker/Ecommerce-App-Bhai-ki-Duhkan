import { View, Text,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../styles/styles'
import { Avatar } from 'react-native-paper'

const CartComponent = ({id,price,image,quantity,incrementHandler,decerementHandler,index,stock,name}) => {
  return (
    <View
      style={{
        flexDirection:"row",
        height:100,
        marginVertical:5,
        alignItems:"center",
        justifyContent:'space-between',
      }}
    >

        <View 
         style={{
            height:"70%",
            width:"50%",
            backgroundColor: ((index & 1) ==0 ) ? colors.color1 : colors.color3,
            borderTopRightRadius:100,
            borderBottomRightRadius:100,
          }}>

            <Image
               source={{
                uri:image,
               }}

               style={{
                  resizeMode:"contain",
                  height:"80%",
                  width:180,
                  top:"-20%",
                  left:"15%",
               }}
            />

        </View>

        <View 
           style={{
             width:"40%",
            
         }}
        >

            <Text 
                style={{
                    fontSize:15,
                }}
            
            >{name}</Text>

            <Text 
                style={{
                    fontSize:14,
                    fontWeight:"900"
                }}
            
                > ₹{price}</Text>

        </View>

        <View style={{
             justifyContent:"space-between",
             alignItems:"center",
             height:80,
        }}
        >

            <TouchableOpacity onPress={()=>decerementHandler(id, name, price, image, stock, quantity)}>
                <Avatar.Icon 
                   icon={"minus"}
                   size={20}
                   style={{
                      backgroundColor:colors.color5,
                   }}
                />
            </TouchableOpacity>

            <Text>{quantity}</Text>

            <TouchableOpacity onPress={()=>incrementHandler(id, name, price, image, stock, quantity)}>
                <Avatar.Icon 
                   icon={"plus"}
                   size={20}
                   style={{
                    backgroundColor:colors.color5,
                 }}
                />
            </TouchableOpacity>

        </View>
       
    </View>
  )
}

export default CartComponent