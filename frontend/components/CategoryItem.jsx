import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../styles/styles';
import { Avatar, Button } from 'react-native-paper';

const CategoryItem = ({id,name,index,deleteHandler}) => {
  return (
    <View
      style={{
        ...style.container,
        backgroundColor:(index%2===0)?colors.color2:colors.color3,
      }}
    >

        <Text
            style={{
                color:(index%2===0)?colors.color3:colors.color2,
                fontWeight:"800"
            }}
        >
            {name}
        </Text>

        <TouchableOpacity
          onPress={()=>deleteHandler(id)}
          activeOpacity={1}
        >
           <Avatar.Icon 
            icon={"delete"} 
            size={25} 

                style={{
                    backgroundColor:(index%2===0)?colors.color3:colors.color2, 
                }}
           
           />
        </TouchableOpacity>

    
    </View>
  )
}

const style = StyleSheet.create({
   container:{
     backgroundColor:colors.color2,
     elevation:10,
     borderRadius:4,
     margin:10,
     padding:8,
     flexDirection:"row",
     justifyContent:"space-between",
     alignItems:"center",
   }
});

export default CategoryItem