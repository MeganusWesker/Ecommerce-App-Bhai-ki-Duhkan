import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { colors, defaultStyle, inputOptions} from '../styles/styles'
import { Button, TextInput } from 'react-native-paper'
import Footer from '../components/Footer'
import {useDispatch} from "react-redux";
import { login } from '../redux/actions/userActions'
import { useMessageAndErrorUser } from '../utils/customHook'

const Login = ({navigation}) => {

  const [email,setEmail] =useState("");
  const [password,setPassword] =useState("");

  const dispatch=useDispatch();

 const  loading  =useMessageAndErrorUser(navigation,dispatch,"profile");


  const submitHandler=()=>{
    dispatch(login(email,password));
  }

  return (

    <>
    <View style={defaultStyle}>
        

        <View style={style.loginHeading} >
           <Text 
                style={{
                    color:colors.color2,
                    textAlign:"center",
                }}
           >
              Login
            </Text>
        </View>

        <View
          style={{
            backgroundColor:colors.color3,
            borderRadius:5,
            elevation:10,
            justifyContent:"center",
             flex:1,

          }}
        >

            <TextInput 
              {...inputOptions}
               placeholder="Email..."
               keyboardType='email'
               value={email}
               onChangeText={setEmail}
            />

             <TextInput 
              {...inputOptions}
               placeholder="Password..."
              secureTextEntry={true}
                value={password}
               onChangeText={setPassword}
            />

            <TouchableOpacity onPress={()=>navigation.navigate("forgotpassword")}>
               <Text style={style.forgotPaassword} >Forgot Password?</Text>
            </TouchableOpacity>

            
            <TouchableOpacity onPress={()=>navigation.navigate("forgotpassword",{sendOtp:true})}>
               <Text style={style.forgotPaassword} >verify email? </Text>

            </TouchableOpacity>

            <Button
              style={style.btn}
              textColor={colors.color2}
              disabled={!email || !password}
              onPress={submitHandler}
              loading={loading}
            > 
               Login
            </Button>

            <Text style={style.OR}> OR</Text>

            <TouchableOpacity 
              onPress={()=>navigation.navigate("signup")}
            >
              <Text
                style={style.link}
              >SignUp</Text>
            </TouchableOpacity>

        </View>
    </View>

    <Footer activeRoute={"profile"}/>
    </>
  )
}

const style=StyleSheet.create({
    loginHeading:{
         backgroundColor:colors.color3,
         padding:8,
         borderRadius:5,
         elevation:5,
         marginBottom:5,
    },

    forgotPaassword:{
      alignSelf:"flex-end",
      fontSize:15,
      fontWeight:"100",
      color:colors.color2,
      marginHorizontal:5,
      marginVertical:5,
    },

    btn:{
        backgroundColor:colors.color1,
        marginHorizontal:10,
        borderRadius:5,
    },

    OR:{
     textAlign:"center",
      marginVertical:8,
      color:colors.color2,
      fontWeight:"100",
    },

    link:{
      textAlign:"center",
      color:colors.color2,
      textTransform:"uppercase"
    },


});

export default Login