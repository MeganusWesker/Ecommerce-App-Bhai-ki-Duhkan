import { View, Text, TouchableOpacity, ScrollView,StyleSheet } from "react-native";
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { defaultStyle,colors, inputOptions } from '../styles/styles'
import { Button, TextInput } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { loadUser, updateProfile } from "../redux/actions/userActions";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { useMessageAndErrorUser } from "../utils/customHook";


const UpdateProfile = ({navigation}) => {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [pinCode, setPinCode] = useState("");

    const  dispatch=useDispatch();

    const disableBtn = !name ||  !address || !city || !country || !pinCode;

    const {user}=useSelector(state=>state.user);

    const submitHandler=async()=>{
     await dispatch(updateProfile(name,address,city,pinCode,country));
     dispatch(loadUser());
    }

    useEffect(() => {
      if(user){
        setName(user.name);
        setAddress(user.address);
        setCity(user.city);
        setCountry(user.country);
        setPinCode(String(user.pinCode));
      }
    }, [user]);

    const loading=useMessageAndErrorUser(navigation,dispatch,"profile");

   
    
  return (

    <>

    <Header back={true}/>
    
    <View
      style={{
        ...defaultStyle,
      }}
    >
         <View style={style.loginHeading} >
           <Text 
                style={{
                    color:colors.color2,
                    textAlign:"center",
                }}
           >
              Edit Profile
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

        <TextInput
          {...inputOptions}
          placeholder="Name"
          value={name}
          onChangeText={setName}
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
           Submit
        </Button>

      </View>
    </ScrollView>
      
    </View>
    </>
  )
}

const style=StyleSheet.create({
    loginHeading:{
         backgroundColor:colors.color3,
         padding:5,
         borderRadius:5,
         elevation:5,
         marginVertical:50,
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

export default UpdateProfile