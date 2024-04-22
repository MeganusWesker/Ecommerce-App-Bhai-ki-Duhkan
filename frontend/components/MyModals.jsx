import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Avatar } from 'react-native-paper';
import { colors } from '../styles/styles';

const MyModals = ({deleteHandler,setMyModal,modal,id,navigation}) => {
  return (
    <View
      style={style.container}
    >
      <TouchableOpacity
        onPress={()=>setMyModal((prev)=>!prev)}
        activeOpacity={1}
      >

        <Avatar.Icon
            icon={"close"}
            size={25}
            style={{
                backgroundColor:colors.color1,
                position:"absolute",
                right:2,
                top:-15,
            }}
        />

      </TouchableOpacity>

      <Text
        style={style.text}
        onPress={()=>navigation.navigate('updateproduct',{id})}

      >
        edit
        
        </Text>
      <Text 
       style={style.text}
       onPress={()=>deleteHandler(id)}
      >
        delete
        
        </Text>
    </View>
  )
}

const style=StyleSheet.create({
    container:{
        elevation:5,
        height:100,
        width:200,
        alignSelf:"center",
        justifyContent:"center",
        zIndex:100,
        padding:10,
        borderRadius:10,
    },

    text:{
        textTransform:"uppercase",
        fontWeight:"800",
        textAlign:"center",
        marginVertical:3,
    }

});

export default MyModals