import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { colors, defaultStyle, inputOptions, inputStyling } from '../../styles/styles';
import Header from '../../components/Header';
import { Avatar, Button, TextInput } from 'react-native-paper';
import SelectComponenet from '../../components/SelectComponenet';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import { createProduct } from '../../redux/actions/productActions';
import mime from "mime";

const NewProduct = ({navigation,route}) => {

  const [visible, setVisible] = useState(false);
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [category, setCategory] = useState("SelectCategory");
  const [categoryID, setCategoryID] = useState("");
  const {categories} =useSelector(state=>state.other);

  const disableBtnCondition = !name || !description || !price || !stock || !image;

  const {loading,error,message} =useSelector(state=>state.product);


  const dispatch=useDispatch();




  const submitHandler=()=>{
    const myForm = new FormData();
    myForm.append("name", name);
    myForm.append("description", description);
    myForm.append("price", price);
    myForm.append("stock", stock);
    
    myForm.append("file", {
      uri: image,
      type: mime.getType(image),
      name: image.split("/").pop(),
    });

    if (categoryID) myForm.append("category", categoryID);

    dispatch(createProduct(myForm));

  }





 useEffect(() => {
    
     if(route.params?.image){
      setImage(route.params?.image)
     }

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
    
 }, [route.params,error,message,dispatch])
 


  return (

    <>

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
              New Product
            </Text>
        </View>


        <ScrollView
            style={{
                backgroundColor:colors.color3,
                minHeight:400,
                padding:10,
                borderRadius:10,
                elevation:10,
            }}

          showsVerticalScrollIndicator={false}
        >

            <View
                style={{

                    minHeight:400,
                    justifyContent:"center",
                    paddingBottom:20,
                }}
            >

                <View
                  style={{
                    width:80,
                    height:80,
                     alignSelf:"center",
                  }}
                >

                    <Avatar.Image
                      source={{
                        uri:image ?image:null
                      }}

                      style={{
                        backgroundColor:colors.color1,
                      }}
                    />

                    <TouchableOpacity
                       onPress={()=>navigation.navigate("camera",{newProduct:true})}
                    >
                        <Avatar.Icon 
                            icon={'camera'}
                            size={25}
                            color={colors.color3}
                            
                            style={{
                                position:"absolute",
                                right:15,
                                bottom:-8,
                                backgroundColor:colors.color2,
                            }}
                         />
                    </TouchableOpacity>

                </View>


                 <TextInput
                    {...inputOptions}
                    placeholder="Name"
                    value={name}
                    onChangeText={setName}
                />

              <TextInput
                {...inputOptions}
                placeholder="Description"
                value={description}
                onChangeText={setDescription}
              />

              <TextInput
                {...inputOptions}
                placeholder="Price"
                keyboardType="number-pad"
                value={price}
                onChangeText={setPrice}
              />
              <TextInput
                {...inputOptions}
                placeholder="Stock"
                value={stock}
                keyboardType="number-pad"
                onChangeText={setStock}
              />

              <Text
                style={{
                    ...inputStyling,
                    textAlign:"center",
                    textAlignVertical:"center",
                }}

                onPress={() => setVisible(true)}
              >
                
                {category}
              </Text>

              <Button
                style={{
                    backgroundColor:colors.color1,
                     borderRadius:10,
                     marginHorizontal:10,
                }}

                disabled={disableBtnCondition}
                loading={loading}
                textColor={colors.color2}
                onPress={submitHandler}
              >
                Create
              </Button>


            </View>



        </ScrollView>
    </View>

    <SelectComponenet visible={visible} setVisible={setVisible} categories={categories} setCategoryID={setCategoryID}
        setCategory={setCategory}/>

    </>
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


export default NewProduct