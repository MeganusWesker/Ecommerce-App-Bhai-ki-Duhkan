import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../styles/styles';

const ProductListHeading = () => {
  return (
    <View
      style={style.headingContainer}
    >
      <Text style={style.heading}>Image</Text>
      <Text style={style.heading}>Price</Text>
      <Text style={style.heading}>Name</Text>
      <Text style={style.heading}>Category</Text>
      <Text style={style.heading}>Stock</Text>
    </View>
  )
}

const style=StyleSheet.create({
 
    headingContainer:{
        backgroundColor:colors.color3,
        padding:8,
        borderRadius:5,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
    },

    heading:{
        color:colors.color2,
        fontWeight:"800",
    },

});

export default ProductListHeading