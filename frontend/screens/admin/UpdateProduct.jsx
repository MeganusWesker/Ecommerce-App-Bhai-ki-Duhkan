import { View, Text, StyleSheet, ScrollView, RootTagContext } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors, defaultStyle, inputOptions, inputStyling } from '../../styles/styles';
import Header from '../../components/Header';
import { Button, TextInput } from 'react-native-paper';
import SelectComponenet from '../../components/SelectComponenet';
import { useDispatch, useSelector } from 'react-redux';
import {getAllProducts, getSingleProduct, updateProduct} from "../../redux/actions/productActions"
import { useMessageAndErrorOther } from '../../utils/customHook';

const UpdateProduct = ({navigation,route}) => {

  const {categories} =useSelector(state=>state.other);

  const {product} =useSelector(state=>state.product);

  const [visible, setVisible] = useState(false);
  const [id] = useState(route.params.id);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [category, setCategory] = useState("Laptop");
  const [categoryID, setCategoryID] = useState("");


  const dispatch = useDispatch();

  const loading =useMessageAndErrorOther(navigation,dispatch,"adminpanel");

  const submitHandler=async()=>{
   await dispatch(updateProduct(id,name,description,categoryID,price,stock));
     dispatch(getAllProducts());
  }

 useEffect(() => {

  dispatch(getSingleProduct(route.params.id))
 }, [dispatch,route.params.id]);


 useEffect(() => {
  if (product) {
    setName(product.name);
    setDescription(product.description);
    setPrice(String(product.price));
    setStock(String(product.stock));
    setCategory(product.category?.category);
    setCategoryID(product.category?._id);
  }
}, [product]);
 


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
              Update Product
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

                <Button
                  textColor={colors.color1}
                  onPress={()=>navigation.navigate("productimages",{id,images:product.images})}
                
                >
                    Manage Images
                    
                    </Button>

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

                onPress={submitHandler}
                loading={loading}
                textColor={colors.color2}
              >
                Update
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

export default UpdateProduct