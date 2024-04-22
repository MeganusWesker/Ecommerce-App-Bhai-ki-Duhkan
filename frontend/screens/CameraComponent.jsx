import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { useState } from 'react';
import { Camera, CameraType } from 'expo-camera';
import { Avatar } from 'react-native-paper';
import { colors, defaultStyle } from '../styles/styles';
import * as ImagePicker from "expo-image-picker";


const CameraComponent = ({navigation,route}) => {

    const [type, setType] = useState(CameraType.back);
    const [camera, setCamera] = useState(null);
    const [hasPermission, setHasPermission] = useState(null);

    const openImagePicker= async()=>{
         const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();

         if(!permission.granted){
            return alert("please grant permriossion")
         }

         const data = await ImagePicker.launchImageLibraryAsync({
            allowsEditing:true,
            quality:1,
            aspect:[1,1]
         });

         
 
         if (route.params?.newProduct)
         return navigation.navigate("newproduct", {
           image: data.assets[0].uri,
         });

         if (route.params?.signup)
         return navigation.navigate("signup", {
           image: data.assets[0].uri,
         });

         if (route.params?.updateProduct)
          return navigation.navigate("productimages", {
           image: data.assets[0].uri,
         });

         if (route.params?.updateProfile)
         return navigation.navigate("profile", {
          image: data.assets[0].uri,
        });
    }


    const clickPicture=()=>{}


    useEffect(() => {
      (async () => {
        const { status } = await Camera.requestCameraPermissionsAsync();
        setHasPermission(status === "granted");
      })();
    }, []);


   

    if (hasPermission === false)
      return (
        <View style={defaultStyle}>
          <Text>No access to camera</Text>
        </View>
      );

  return (
    <View
       style={{
        flex:1,
       }}
    >

        <Camera
          style={{
            flex:1,
            aspectRatio: 1,
           }}

           ratio={"1:1"}

           

           type={type}
        />

        <View
          style={{
            flexDirection:"row",
            justifyContent:"space-evenly",
            position:'absolute',
            bottom:10,
            width:"100%"

          }}
        >


          <MyIcon icon={"image"} handler={openImagePicker} />
          <MyIcon icon={"camera"} handler={clickPicture} />
          <MyIcon icon={"camera-flip"}  handler={()=>setType((prevType)=>(prevType === CameraType.back) ? CameraType.front : CameraType.back)} />

        </View>
     
    </View>
  )
}

const MyIcon=({icon,handler})=>(
   <TouchableOpacity
    
   onPress={handler}
   
   >
      <Avatar.Icon 

      style={{
        backgroundColor:colors.color1,
      }}
      
      icon={icon} 
      size={40} />
   </TouchableOpacity>
);

export default CameraComponent