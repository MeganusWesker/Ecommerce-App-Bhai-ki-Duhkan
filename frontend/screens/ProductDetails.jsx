import { View, Text, Dimensions, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'
import { colors, defaultStyle } from '../styles/styles'
import Header from '../components/Header'
import { Carousel } from 'react-native-snap-carousel'
import { Avatar, Button } from 'react-native-paper'
import { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { getSingleProduct } from '../redux/actions/productActions'
import { Toast } from 'react-native-toast-message/lib/src/Toast'

const SLIDER_WIDTH =Dimensions.get("window").width;
const ITEM_WIDTH =SLIDER_WIDTH;



const ProductDetails = ({route:{params}}) => {

    const isCarousel = useRef(null);

    const dispatch=useDispatch();

    const {product,loading} =useSelector(state=>state.product);

    const[quantity,setQuantity] = useState(1);

    const incremetQty=()=>{
        if(product.stock<=quantity){
            return Toast.show({
              type: "error",
              text1: "maximum quantity added",
            });
         }

        setQuantity((prev)=>prev+1);
    }

    const decerementQty=()=>{
        if(quantity<=1){
           return;
        }

        setQuantity((prev)=>prev-1);
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
              quantity,
            }
         });
  
         Toast.show({
          type: "success",
          text1: "Added To Cart",
        });
  
  
    }

    

   
    useEffect(()=>{
      dispatch(getSingleProduct(params.id))
    },[dispatch])
     
  return (
    <View
        style={{
            ...defaultStyle,
            backgroundColor:colors.color1,
            padding:0,
        }}
    >

        <Header back={true}/>

        {/* carsouel */}

        <Carousel
           sliderWidth={SLIDER_WIDTH}
           itemWidth={ITEM_WIDTH}
           data={product.images}
           renderItem={renderItem}
           layout="stack"
           ref={isCarousel}
        />

        <View
          style={{
            flex:1,
            backgroundColor:colors.color2,
            marginTop:-340,
            borderTopLeftRadius:55,
            borderTopRightRadius:55,
            padding:35,
          }}
        >

            <Text
              numberOfLines={2}
              style={{
                fontSize:25,
              }}
            
            >
              {product.name}
            </Text>

            <Text
                style={{
                    fontSize:18,
                    fontWeight:"900",
                }}
            
            >
              ₹{product.price}
            </Text>

            <Text
                numberOfLines={8}
                style={{
                letterSpacing:1,
                lineHeight:20,
                marginVertical:15,
                }}
            
            >
              {product.description}
            </Text>

            <View
              style={{
                flexDirection:"row",
                justifyContent:"space-between",
                alignItems:"center",
              }}
            >

           

                <Text
                  style={{
                    color:colors.color1,
                    fontWeight:"900",
                  }}
                >
                     Quantiy
                </Text>

                <View
                    style={{
                        flexDirection:"row",
                        justifyContent:"space-between",
                        alignItems:"center",
                        width:90,
                    }}
                   >

                    <TouchableOpacity
                      onPress={decerementQty}
                    >
                        <Avatar.Icon
                           icon={"minus"}
                           size={25}
                           style={{
                            backgroundColor:colors.color5,
                           }}
                        />
                    </TouchableOpacity>

                    <Text
                       style={{
                        color:"green",
                       }}
                    >{quantity}</Text>

                    <TouchableOpacity 
                       onPress={incremetQty}
                    >
                        <Avatar.Icon
                           icon={"plus"}
                           size={25}
                           style={{
                            backgroundColor:colors.color5,
                           }}
                        />
                    </TouchableOpacity>

             </View>



            </View>

            <TouchableOpacity
            
            onPress={()=>addToCartHandler(product._id,product.name,product.price,product.images[0]?.url,product.stock)}
            >
                <Button
                   icon={"cart"}
                   textColor={colors.color2}
                   style={style.btn}
                >
                    Add to Cart
                </Button>
            </TouchableOpacity>

        </View>



    </View>
  )
}

const renderItem=({item,index})=>(
   <View style={style.container} key={index}>
      <Image source={{
        uri:item.url
      }}

      style={style.image}
      
      />
   </View>
);

const style= StyleSheet.create({

   container:{
      paddingVertical:40,
      width:SLIDER_WIDTH,
      height:300,
     backgroundColor:colors.color1,
   },

    image:{
        resizeMode:"contain",
         width:SLIDER_WIDTH,
         height:220,
    },

    btn:{
        backgroundColor:colors.color3,
        marginVertical:15,
    }
})

export default ProductDetails