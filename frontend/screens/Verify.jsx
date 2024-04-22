import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { colors, defaultStyle, inputOptions, inputStyling } from '../styles/styles'
import { Button, TextInput } from 'react-native-paper'
import Footer from '../components/Footer'
import { useDispatch,useSelector } from 'react-redux'
import { resetPassword } from '../redux/actions/userActions'
import { useMessageAndErrorUser } from '../utils/customHook'

const Verify = ({navigation}) => {

    const [otp,setOtp] =useState(null);
    const [password,setPassword] =useState("");
    const [confirmPassword,setConfirmPassword] =useState("");

    const dispatch=useDispatch();


    const submitHandler=()=>{
      dispatch(resetPassword(otp,password,confirmPassword));
    }

    const loading=useMessageAndErrorUser(navigation,dispatch,"login");
  return (
    <View style={defaultStyle}>
        <View style={style.loginHeading} >
           <Text 
                style={{
                    color:colors.color2,
                    textAlign:"center",
                }}
           >
              Reset Password
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
                placeholder="OTP"
                secureTextEntry={true}
                keyboardType="number-pad"
                value={otp}
                onChangeText={setOtp}
          />

            <TextInput 
              {...inputOptions}
               placeholder="password..."
               secureTextEntry={true}
               value={password}
               onChangeText={setPassword}
            />

             <TextInput 
              {...inputOptions}
               placeholder="confirmPassword..."
               secureTextEntry={true}
                value={confirmPassword}
               onChangeText={setConfirmPassword}
            />

        

            <Button
              style={style.btn}
              textColor={colors.color2}
              disabled={!confirmPassword || !password || !otp}
              onPress={submitHandler}
              loading={loading}
            > 
               reset Password
            </Button>


            <Text style={style.OR}> OR</Text>

            <TouchableOpacity 
              onPress={()=>navigation.navigate("forgotpassword")}
            >
              <Text
                style={style.link}
              >Resend OTp</Text>
            </TouchableOpacity>

        </View>


    </View>
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

export default Verify