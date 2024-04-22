import { View, Text, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import {colors} from "../styles/styles"
import { Button } from 'react-native-paper'
import {Dimensions} from 'react-native';


const ProductComponent = ({price,id,stock,name,image,i,navigation,addToCartHandler}) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => navigation.navigate("productdetails", { id })}
  >
    <View
      style={{
        elevation: 15,
        width: 250,
        alignItems: "center",
        justifyContent: "space-between",
        margin: 20,
        borderRadius: 20,
        height: Dimensions.get('screen').height/1.8,
        backgroundColor: i % 2 === 0 ? colors.color1 : colors.color2,
      }}
    >
      <Image
        source={{
          uri: image,
        }}
        style={{
          width: "100%",
          height: "60%",
          resizeMode: "contain",
          position: "absolute",
          left: "30%",
          top: "15%",
        }}
      />

      <View
        style={{
          flexDirection: "row",
          padding: 20,
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Text
          numberOfLines={2}
          style={{
            color: i % 2 === 0 ? colors.color2 : colors.color3,
            fontSize: 25,
            fontWeight: "300",
            width: "60%",
          }}
        >
          {name}
        </Text>

        <Text
          numberOfLines={2}
          style={{
            color: i % 2 === 0 ? colors.color2 : colors.color3,
            fontSize: 20,
            fontWeight: "700",
          }}
        >
          ₹{price}
        </Text>
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: i % 2 === 0 ? colors.color2 : colors.color3,
          borderRadius: 0,
          paddingVertical: 5,
          borderBottomRightRadius: 20,
          borderBottomLeftRadius: 20,
          width: "100%",
        }}
      >
        <Button
          onPress={() => addToCartHandler(id, name, price, image, stock)}
          textColor={i % 2 === 0 ? colors.color1 : colors.color2}
        >
          Add To Cart
        </Button>
      </TouchableOpacity>
    </View>
  </TouchableOpacity>
  )
}

export default ProductComponent