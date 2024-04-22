import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../styles/styles'
import { Avatar } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'

const Footer = ({activeRoute}) => {

   
    const navigation=useNavigation();

   const {isAuthenticated,loading} =useSelector(state=>state.user);

  return loading ===false && (
    <View
        style={{
            backgroundColor:colors.color1,
            borderTopLeftRadius:120,
            borderTopRightRadius:120,
            position:"absolute",
            bottom:0,
            width:"100%"
        }}
    >

      <View style={{
        flexDirection:"row",
        justifyContent:"space-evenly",
      }}>

        <TouchableOpacity
           onPress={()=>navigation.navigate("cart")}
        >

          <Avatar.Icon 
            icon={activeRoute==="cart" ? "shopping" : "shopping-outline"}
            size={50}
            style={{
              backgroundColor:colors.color1,
              color:colors.color4,
            }}

          />
        </TouchableOpacity>

         <TouchableOpacity
            onPress={()=>(!isAuthenticated) ? navigation.navigate("login") : navigation.navigate("profile")}
         >

          <Avatar.Icon 
            icon={ (!isAuthenticated) ? "login":
              activeRoute==="profile" ? "account" : "account-outline"}
            size={50}
            style={{
              backgroundColor:colors.color1,
              color:colors.color4,
            }}

          />
        </TouchableOpacity>

      </View>

      <View
          style={{
              position:"absolute",
              backgroundColor:colors.color2,
              width:80,
              height:80,
              borderRadius:100,
              top:-50,
              alignSelf:"center",
              justifyContent:"center",
              alignItems:"center",

          }}
      >

        <View
        
        style={{
          borderRadius:100,
          alignItems:"center",
          justifyContent:"center",
        }}
        >

          <TouchableOpacity
             onPress={()=>navigation.navigate("home")}
          >

            <Avatar.Icon 
              icon={activeRoute==="home" ? "home" : "home-outline"}
              size={50}
              style={{
                backgroundColor:colors.color1,
                color:colors.color4,
              }}

            />
          </TouchableOpacity>

         </View>

      </View>


    </View>
  )
}

export default Footer