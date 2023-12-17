import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { colors, defaultStyle, inputOptions } from '../styles/styles';
import Header from '../components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { Button, TextInput } from 'react-native-paper';
import { verifyUser } from '../redux/actions/userActions';
import { useMessageAndErrorUser } from '../utils/customHook';

const VerifyUser = ({navigation}) => {

    const [otp,setOtp] =useState("");
    const [email,setEmail] =useState("");


    const dispatch=useDispatch();

    const loading = useMessageAndErrorUser(navigation,dispatch,"profile");

    const submitHandler=()=>{
      const otp1=Number(otp);
       dispatch(verifyUser(otp1,email))
    }


  return (
    <View
    style={defaultStyle}
>

  <Header back={true}/>

    <View style={style.loginHeading} >
        <Text 
              style={{
                  color:colors.color2,
                  textAlign:"center",
              }}
        >
            Verify Email
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
               placeholder="otp..."
               value={otp}
               keyboardType="number-pad"
               onChangeText={setOtp}
            />

              <TextInput
              {...inputOptions}
               placeholder="email..."
               value={email}
               keyboardType="email-address"
               onChangeText={setEmail}
            />



            <TouchableOpacity onPress={()=>navigation.navigate("forgotpassword",{sendOtp:true})}>
               <Text style={style.forgotPaassword} >send Otp again</Text>
            </TouchableOpacity>

            <Button
              style={style.btn}
              textColor={colors.color2}
              disabled={!otp || !email}
              onPress={submitHandler}
              loading={loading}
            > 
               verify
            </Button>

            <Text style={style.OR}> OR</Text>

            <TouchableOpacity 
              onPress={()=>navigation.navigate("login")}
            >
              <Text
                style={style.link}
                >login</Text>
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
         marginVertical:50,
    },
  
    container: {
      padding: 20,
      elevation: 10,
      borderRadius: 10,
      backgroundColor: colors.color3,
      marginVertical:20,
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

export default VerifyUser