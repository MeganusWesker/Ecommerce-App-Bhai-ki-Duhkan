import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../styles/styles';
import { Button } from 'react-native-paper';

const OrderItems = ({i,id,address,price,createdOn,paymentMethod,admin=false,handler,status}) => {
  return (
    <View
      style={{
        ...style.container,
        backgroundColor: ((i % 2) === 0) ? colors.color2 : colors.color3,
    }}
      
    >
     <Text
        style={{
          ...style.text,
          backgroundColor: i % 2 === 0 ? colors.color3 : colors.color1,
        }}
      >
        ID - #{id}
      </Text>

      <TextBox title={"Address"}  value={address} i={i}/>
      <TextBox title={"Ordered On"}  value={createdOn} i={i}/>
      <TextBox title={"Price"}  value={price} i={i}/>
      <TextBox title={"Status"}  value={status} i={i}/>
      <TextBox title={"Payment Method"}  value={paymentMethod} i={i}/>

    {admin && (  <Button
        style={{
           backgroundColor:(i%2===0) ? colors.color3:colors.color2,
             width:150,
             alignSelf:"center",
             marginVertical:5,
        }}

        icon={"update"}
        mode={"contained"}
        textColor={(i%2===0) ? colors.color2:colors.color3}
        onPress={()=>handler(id)}
      >
         Update
      </Button>)}

    </View>
  )
}

const TextBox=({title,value,i})=>(
  <Text
    style={{
       marginVertical:6,
       color: (i%2==0) ?colors.color3:colors.color2
    }}

  
  >

    <Text
      style={{
        fontWeight:"800",
      }}
    >
      {title} -

      {title==="Price" ? "₹" : ""}
      
      </Text>

    {value}

  </Text>
);

const style=StyleSheet.create({
    container:{
       padding:10,
       marginVertical:5,
       borderRadius:5,
       elevation:5,
       
    },

    text:{
      borderTopLeftRadius:10,
      borderTopRightRadius:10,
      textAlign:"center",
      fontWeight:"700",
      color:colors.color2,
      padding:4,
      marginHorizontal:-13,
      marginTop:-10,
    }



});

export default OrderItems