import { View, Text,Image } from 'react-native'
import React from 'react'

const ConfirmOrderItem = ({price,image,quantity,name}) => {
  return (
    <View 
      style={{
        flexDirection:"row",
        justifyContent:"space-between",
        marginVertical:5,
        alignItems:"center",

      }}
    >

        <Image 
            source={{
             uri:image,
            }}

            style={{
                width:50,
                height:50,
                resizeMode:"contain"
            }}
        
        />

        <Text>{name}</Text>

        <View
          style={{
            flexDirection:"row",
            alignItems:"center",
            justifyContent:"space-between",
            width:70,
          }}
        >

            <Text>{quantity}</Text>
            <Text>X</Text>
            <Text>₹{price}</Text>

        </View>
    </View>
  )
}

export default ConfirmOrderItem