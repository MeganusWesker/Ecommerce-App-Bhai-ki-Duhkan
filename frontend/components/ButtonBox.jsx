import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../styles/styles'
import { Avatar } from 'react-native-paper'

const ButtonBox = ({reverse,loading,text,icon,handler}) => {
  return (
     <TouchableOpacity
        style={{
            backgroundColor:reverse ? colors.color1:colors.color3,
            height:70,
            width:70,
            borderRadius:10,
            alignItems:"center",
       }}

       activeOpacity={1}

       onPress={()=>handler(text)}
     >

        <Avatar.Icon icon={icon}
          size={40}
            style={{
                backgroundColor:reverse ? colors.color1:colors.color3,
            }}
        />

        <Text
          style={{
            color:colors.color2,
          }}
        >{text}</Text>



     </TouchableOpacity>
  )
}

export default ButtonBox