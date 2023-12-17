import { View, Text } from 'react-native'
import React from 'react'

const Heading = ({text1="Our",text2="Products",containerStyle}) => {
  return (
    <View style={containerStyle}>
    <Text
    style={{
     fontSize:17,
     fontWeight:"200" 
    }}>
     
     {text1}</Text>


    <Text 
     style={{
     fontSize:20,
     fontWeight:"700" 
    }}>
     
        {text2}</Text>
 </View>
  )
}

export default Heading