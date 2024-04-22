import {TouchableOpacity } from 'react-native'
import React from 'react'
import { Avatar } from 'react-native-paper'
import { colors } from '../styles/styles'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useDispatch } from 'react-redux'

const Header = ({back,emptyCart}) => {

    const navigate=useNavigation();// let's us to navigate 
    const routes = useRoute(); // gives the info about the current route

    const dispatch=useDispatch();

    const emptyCartHandler=()=>{
        dispatch({
            type:"emptyCart",
        })
    }


  return (
    <>
    {back && (<TouchableOpacity
        style={{
            position:"absolute",
            left:20,
            top:25,
            zIndex:10,
        }}
    
    onPress={()=>navigate.goBack()}
    
    >
        <Avatar.Icon
            size={40}
            color={routes.name==="productdetails" ? colors.color2 : colors.color3}
            icon={"arrow-left"}
            backgroundColor={colors.color4}
        />

    </TouchableOpacity>
    )}

 <TouchableOpacity
        style={{
            position:"absolute",
            right:20,
            top:25,
            zIndex:10,
        }}
    
      onPress={emptyCart ? emptyCartHandler : ()=>navigate.navigate("cart")}
    
    >
        <Avatar.Icon
            size={40}
            color={routes.name==="productdetails" ? colors.color2 : colors.color3}
            icon={emptyCart ? "delete-outline" : "cart-outline"}
            backgroundColor={colors.color4}
        />

    </TouchableOpacity>


        
    
    
    </>
  )
}

export default Header

