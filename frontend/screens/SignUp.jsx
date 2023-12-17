import { View, Text, TouchableOpacity, ScrollView,StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { colors, defaultImg, defaultStyle, inputOptions } from "../styles/styles";
import { Avatar, Button, TextInput } from "react-native-paper";
import mime from "mime";
import {useDispatch} from "react-redux";
import { register } from "../redux/actions/userActions";
import  { useMessageAndErrorUser } from "../utils/customHook"

const SignUp = ({navigation,route}) => {

    const [avatar, setAvatar] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [pinCode, setPinCode] = useState("");

    const dispatch=useDispatch();

    const disableBtn = !name || !email || !password || !address || !city || !country || !pinCode;

    const loading=useMessageAndErrorUser(navigation,dispatch,"verifyuser");


    const submitHandler=()=>{
      const form =new FormData();

      form.append('name',name)
      form.append('email',email)
      form.append('password',password)
      form.append('address',address)
      form.append('city',city)
      form.append('country',country)
      form.append('pinCode',pinCode)

      if(avatar!==""){
        form.append('file',{
          uri:avatar,
          type:mime.getType(avatar),
          name:avatar.split('/').pop(),
        })
      }

     

      dispatch(register(form));
    }

    useEffect(() => {
      if (route.params?.image) setAvatar(route.params.image);
    }, [route.params]);


  return (
    <View style={defaultStyle}>
    {/* Heading */}
    <View style={style.loginHeading} >
           <Text 
                style={{
                    color:colors.color2,
                    textAlign:"center",
                }}
           >
              SignUp
            </Text>
        </View>

    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        padding: 20,
        elevation: 10,
        borderRadius: 10,
        backgroundColor: colors.color3,
      }}
    >
      <View style={{ minHeight: 900 }}>
        <Avatar.Image
          style={{
            alignSelf: "center",
            backgroundColor: colors.color1,
          }}
          size={80}
          source={{
            uri: avatar ? avatar : defaultImg,
          }}
        />
        <TouchableOpacity onPress={() => navigation.navigate("camera",{signup:true})}>
          <Button textColor={colors.color1}>Change Photo</Button>
        </TouchableOpacity>

        <TextInput
          {...inputOptions}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />

        <TextInput
          {...inputOptions}
          placeholder="Email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          {...inputOptions}
          secureTextEntry={true}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
        />

        <TextInput
          {...inputOptions}
          placeholder="Address"
          value={address}
          onChangeText={setAddress}
        />
        <TextInput
          {...inputOptions}
          placeholder="City"
          value={city}
          onChangeText={setCity}
        />
        <TextInput
          {...inputOptions}
          placeholder="Country"
          value={country}
          onChangeText={setCountry}
        />

        <TextInput
          {...inputOptions}
          placeholder="Pin Code"
          value={pinCode}
          onChangeText={setPinCode}
        />

        <Button
          loading={loading}
          textColor={colors.color2}
          disabled={disableBtn}
          style={style.btn}
          onPress={submitHandler}
        >
          Sign Up
        </Button>

        <Text style={style.OR}>OR</Text>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate("login")}
        >
          <Text style={style.link}>Log In</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
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

export default SignUp