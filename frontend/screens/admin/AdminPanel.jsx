import { View, Text,StyleSheet, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import { defaultStyle,colors } from '../../styles/styles'
import Header from '../../components/Header'
import Loader from '../../components/Loader'
import ButtonBox from '../../components/ButtonBox'
import ProductListHeading from '../../components/ProductListHeading'
import ProductList from '../../components/ProductList'
import Chart from '../../components/Chart'
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct, getAdminProducts} from '../../redux/actions/productActions'
import { useMessageAndErrorOther } from '../../utils/customHook'
import { getAdminOrders } from '../../redux/actions/orderAction'



const AdminPanel = ({navigation}) => {

   const {loading,products,outOfStock,inStock} =useSelector(state=>state.product);



    const dispatch=useDispatch();

    const navigationHandler = (text) => {
        switch (text) {
          case "Category":
            navigation.navigate("categories");
            break;
          case "All Orders":
            navigation.navigate("adminorders");
            break;
          case "Product":
            navigation.navigate("newproduct");
            break;
    
          default:
            navigation.navigate("adminorders");
            break;
        }
      };

    useMessageAndErrorOther(navigation,dispatch,"adminpanel");

      
    const  deleteHandler=async(id)=>{
     await dispatch(deleteProduct(id));
      dispatch(getAdminProducts());
    }

    useEffect(() => {
      dispatch(getAdminProducts());
      dispatch(getAdminOrders());
    }, [dispatch])
    
   
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
              AdminPanel
            </Text>
        </View>


      {loading ? <Loader/> :(

       <>


       <View
            style={{
                borderRadius:10,
                marginVertical:10,
                alignItems:"center",
                backgroundColor: colors.color3,
                
            }}
       >

        <Chart inStock={inStock} outStock={outOfStock}/>

       </View>


        <View
          style={{
            flexDirection:"row",
            justifyContent:"space-between",
            margin:10,
          }}
        >

            <ButtonBox icon={"plus"} text={"Product"}  handler={navigationHandler} />
            <ButtonBox icon={"format-list-bulleted-square"} text={"All Orders"} reverse={true}  handler={navigationHandler}/>
            <ButtonBox icon={"plus"} text={"Category"} handler={navigationHandler} />


        </View>

        <ProductListHeading/>

        <ScrollView
          showsVerticalScrollIndicator={false}
        >

            {products && products.map((item,index)=>(
                <ProductList
                image={item.images[0]?.url}
                key={item._id}
                id={item._id}
                name={item.name}
                price={item.price}
                stock={item.stock}
                category={item.category._id}
                deleteHandler={deleteHandler}
                navigation={navigation}
                i={index}
                />
            ))}

        </ScrollView>

        </>
        
      )}
  
    </View>
  )
}

const style=StyleSheet.create({
    loginHeading:{
         backgroundColor:colors.color3,
         padding:8,
         borderRadius:5,
         elevation:5,
        marginTop:60,
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

export default AdminPanel