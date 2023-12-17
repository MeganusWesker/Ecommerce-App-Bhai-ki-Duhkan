import { StyleSheet, Text, View,TouchableOpacity,ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import {colors, defaultStyle} from "../styles/styles"
import Header from '../components/Header'
import { Avatar, Button } from 'react-native-paper'
import SearchModals from '../components/SearchModals'
import ProductComponent from '../components/ProductComponent'
import { useNavigation } from '@react-navigation/native'
import Footer from '../components/Footer'
import Heading from '../components/Heading'
import { useSelector,useDispatch } from 'react-redux'
import { getAllProducts, getAllProductsByCategory } from '../redux/actions/productActions'
import { Toast } from "react-native-toast-message/lib/src/Toast";
import Loader from '../components/Loader'


const Home = () => {

 

  const {categories} =useSelector(state=>state.other);

  const {products,loading} =useSelector(state=>state.product);
  

  const navigation=useNavigation();
  const dispatch=useDispatch();

  const [category,setCategory] = useState("");
  const [searchQuerry,setSearchQuerry] = useState("");

  const [searchActivity,setSearchActivity] = useState(false);

  const setCategoryHandler =(id)=>{
    setCategory(id);
    dispatch(getAllProductsByCategory(id))
  }

  const addToCartHandler=(id, name, price, image, stock)=>{
      
    if(stock===0){
          return Toast.show({
            type: "error",
            text1: "Out Of Stock",
          });
       }

       dispatch({
          type:"addToCart",
          payload:{
            product:id,
            name,
            price,
            image,
            stock,
            quantity: 1,
          }
       });

       Toast.show({
        type: "success",
        text1: "Added To Cart",
      });


  }



 
useEffect(() => {
  dispatch(getAllProducts(searchQuerry))
}, [dispatch,searchQuerry])



  return (

    <>

    {searchActivity && 
      <SearchModals
          searchActivity={searchActivity}
          setSearchActivity={setSearchActivity}
          searchQuerry={searchQuerry} 
          setSearchQuerry={setSearchQuerry}
          products={products}
       /> 
       }
    
    <View style={defaultStyle}>
      <Header back={false} emptyCart={false}/>


      <View style={{
        paddingTop:50,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
      }}>
    
    {/* Heading */}

      <Heading text1='Our' text2='Products'/>

      <View
   
      >

        <TouchableOpacity
        onPress={()=>setSearchActivity(!searchActivity)}
        >
          <Avatar.Icon
            icon={"magnify"}
            size={40}
            color={"gray"}
            backgroundColor={colors.color2}
    
            style={{
              elevation:20,
            }}
          />
        </TouchableOpacity>


      </View>


      </View>

    {loading ? <Loader/> :(
      <>
        <View style={{
        flexDirection:'row',
        height:60,

      }}>


<ScrollView horizontal showsHorizontalScrollIndicator={false}
    contentContainerStyle={{
      alignItems:'center',
    }}

>
     {categories && categories.map((item,i)=>(


        <Button 
        key={item._id}
        style={{
          backgroundColor:category === item._id ? colors.color1 :colors.color5,
          borderRadius:100,
          margin:5, 
        }}

        onPress={()=>setCategoryHandler(item._id)}
        >
          <Text style={{
            color:category === item._id ? "white" :"gray",
            fontSize:15,
          }}> {item.category}</Text>
        </Button>



     ))}

</ScrollView>
      </View>

      <View 
        style={{
          flex:1,
        }}
      >

  <ScrollView 
    horizontal showsHorizontalScrollIndicator={false}
  >

          {products && products.map((item,i)=>(
              <ProductComponent
                price={item.price}
                key={item._id}
                id={item._id}
                stock={item.stock}
                name={item.name}
                description={item.description}
                image={item.images[0]?.url}
                i={i}
                navigation={navigation}
                addToCartHandler={addToCartHandler}
              />
          ))}

          
  </ScrollView>

      </View>
      </>
    )}
        


    </View>

    <Footer activeRoute={"home"}/>
</>

  )
}

export default Home

const styles = StyleSheet.create({})