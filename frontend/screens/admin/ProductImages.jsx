import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Header from '../../components/Header';
import { colors, defaultStyle } from '../../styles/styles';
import { Avatar, Button } from 'react-native-paper';
import ImageCard from '../../components/Imagecard';
import { useEffect } from 'react';
import { updateProductImage,deleteProductImage } from '../../redux/actions/productActions';
import mime from "mime";
import { useDispatch } from 'react-redux';
import { useMessageAndErrorOther } from '../../utils/customHook';

const ProductImages = ({navigation,route}) => {

 
    const dispatch=useDispatch();

    const [images] = useState(route.params.images);
    const [image, setImage] = useState(null);
    const [productId] = useState(route.params.id);
    const [imageChanged, setImageChanged] = useState(false);

    const loading =useMessageAndErrorOther(navigation,dispatch,"adminpanel");

    const deleteHandler=(id)=>{
      dispatch(deleteProductImage(productId, id));
    }

    const submitHandler=()=>{
      const myForm = new FormData();

      myForm.append("file", {
        uri: image,
        type: mime.getType(image),
        name: image.split("/").pop(),
      });
  
      dispatch(updateProductImage(productId, myForm));
    }

    useEffect(()=>{
      if (route.params?.image) {
        setImage(route.params.image);
        setImageChanged(true);
      }
    },[route.params])
    
  return (
    <View
    style={{
        ...defaultStyle,
        backgroundColor:colors.color5,
        
        }}
>
    <Header back={true}/>

      <View style={style.loginHeading} >
          <Text 
                style={{
                    color:colors.color2,
                    textAlign:"center",
                }}
          >
              New Product
            </Text>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
            style={{
                marginBottom:10,
            }}
        >

         <View
          style={{
            backgroundColor: colors.color2,
            padding: 40,
            minHeight: 350,
          }}
        >
          {images && images.map((i) => (
            <ImageCard
              key={i._id}
              src={i.url}
              id={i._id}
              deleteHandler={deleteHandler}
            />
          ))}
        </View>

        </ScrollView>

        
      <View
        style={{
          padding: 20,
          borderRadius: 10,
          backgroundColor: colors.color3,
        }}
      >
        <Image
          style={{
            backgroundColor: colors.color2,
            width: 80,
            height: 80,
            alignSelf: "center",
            resizeMode: "contain",
          }}
          source={{ uri: image }}
        />

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() =>
              navigation.navigate("camera", { updateProduct: true })
            }
          >
            <Avatar.Icon
              icon={"camera"}
              style={{
                backgroundColor: colors.color2,
                margin: 10,
              }}
              size={30}
              color={colors.color3}
            />
          </TouchableOpacity>
        </View>

        <Button
          style={{
            backgroundColor: colors.color1,
            padding: 6,
            marginHorizontal:20,
            borderRadius:10,
            color:colors.color2
          }}
          textColor={colors.color2}
          loading={loading}
          onPress={submitHandler}
          disabled={!imageChanged}
        >
          Add
        </Button>
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
  
    
});

export default ProductImages
