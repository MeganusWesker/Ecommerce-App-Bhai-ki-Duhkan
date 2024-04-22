import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../styles/styles';
import MyModals from './MyModals';

const ProductList = ({name,id,price,category,stock,deleteHandler,navigation,i,image}) => {

    const [modal,setMyModal] =useState(false);
  return (

    <>

    <TouchableOpacity
      onPress={()=>navigation.navigate("productdetails",{id})}
      activeOpacity={1}
      onLongPress={()=>setMyModal((prev)=>!prev)}
    >

  
        <View
            style={{
                ...style.container,
                backgroundColor:(i%2===0)?colors.color1:colors.color3,
            }}
        >

            <Image
               source={{
                uri:image
               }}

               style={{
                  height:40,
                  width:40,
                  resizeMode:"contain"
               }}
            />

            <Text
           
           style={{
                width:40,

                color:colors.color2,
            }}

              numberOfLines={1}
            
            >₹{price}</Text>


            <Text

              style={{
                width:60,
                color:colors.color2,
              }}

              numberOfLines={1}
            
            >
                {name}
                
            </Text>


            <Text
             style={{
                width:60,
                color:colors.color2,
              }}

              numberOfLines={1}
            >{category}</Text>

            <Text
              style={{
                width:40,
                color:colors.color2,
              }}

              numberOfLines={1}
            >
                {stock}
            </Text>


        
        </View>

    </TouchableOpacity>

    {modal && <MyModals deleteHandler={deleteHandler} id={id} setMyModal={setMyModal} modal={modal}  navigation={navigation}/>}


</>
  )
}

const style=StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        height:70,
        marginVertical:6,
        borderRadius:5,
    }
});

export default ProductList