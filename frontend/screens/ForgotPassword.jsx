import { View, Text,StyleSheet,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import { colors, defaultStyle, inputOptions, inputStyling } from '../styles/styles'
import { Button, TextInput } from 'react-native-paper'
import { useDispatch, useSelector } from 'react-redux'
import { forgotPassword } from '../redux/actions/userActions'
import { useEffect } from 'react'
import { Toast } from 'react-native-toast-message/lib/src/Toast'

const ForgotPassword = ({navigation,route}) => {

    const [email,setEmail] =useState("");

    const dispatch=useDispatch();

    const submitHandler =async()=>{
      await  dispatch(forgotPassword(email));

      route.params?.sendOtp ? navigation.navigate("verifyuser") :navigation.navigate("verify");
    }


  const {loading,error,message} =useSelector(state=>state.user);

  

  
  useEffect(()=>{

      if(error){
    
          Toast.show({
            type: 'error',
            text1: error,
          });
    
          dispatch({
            type:"clearError"
          })
      }
    
      if(message){
    
        Toast.show({
          type: 'success',
          text1: message,
        });
    
        dispatch({
          type:"clearMessage"
        })
      }
    
    },[error,message,dispatch]);

  return (
    <View style={defaultStyle}>
      <View style={style.loginHeading} >
           <Text 
                style={{
                    color:colors.color2,
                    textAlign:"center",
                }}
           >
             { route.params?.sendOtp ? "sendOtp" :"ForgotPassword"}
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


            <Button
              style={style.btn}
              textColor={colors.color2}
              disabled={!email}
              loading={loading}
              onPress={submitHandler}
            > 
               Send Otp
            </Button>

            <Text style={style.OR}> OR</Text>

            <TouchableOpacity 
              onPress={()=>navigation.navigate("login")}
            >
              <Text
                style={style.link}
              >Login</Text>
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


export default ForgotPassword