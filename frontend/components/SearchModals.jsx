import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View,TouchableOpacity,ScrollView, SafeAreaView,StatusBar,BackHandler,Image } from 'react-native'
import { Headline, Searchbar } from 'react-native-paper';
import { colors } from '../styles/styles';



const SearchModals = ({searchActivity,setSearchActivity,searchQuerry,setSearchQuerry,products=[]}) => {

    const navigate=useNavigation();

   


    const backHandler=()=>{
        setSearchQuerry("");
        setSearchActivity(false);
        return true; // if we don't return it will also the default behaviour of the back buttton
        //https://reactnative.dev/docs/backhandler
    }

    

    useEffect(()=>{

        BackHandler.addEventListener("hardwareBackPress",backHandler);

        return ()=>{
           BackHandler.removeEventListener("hardwareBackPress",backHandler);
        }
    },[])


    return (
      <View style={{
        height:"100%",
        width:"100%",
        position:"absolute",
        top:0,
        zIndex:100,
        padding:30,
        backgroundColor:"white",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}>

        <SafeAreaView>
            <Searchbar 
              placeholder='Search...'
              value={searchQuerry}
              onChangeText={(query)=>setSearchQuerry(query)}
              style={{
                marginTop:20,     
              }}
            />


        <ScrollView>

            <View
              style={{
                paddingVertical:40,
                paddingHorizontal:10
              }}
            >

            {products.map((item)=>(  
                <SearchItem
                    price={item.price}
                    key={item._id}
                    imgSrc={item.images[0]?.url}
                    name={item.name}
                    handler={()=>navigate.navigate("productdetails",{id:item._id})}
                />
            ))}

          </View>
        
        </ScrollView>

        </SafeAreaView>

   
      </View>
    )
  }


  const SearchItem = ({ price, name, imgSrc, handler }) => (
    <TouchableOpacity onPress={handler}>
      <View
        style={{
            padding: 20,
            borderRadius: 10,
            backgroundColor: colors.color2,
            elevation: 5,
            width: "100%",
            alignItems: "center",
            justifyContent: "flex-end",
            flexDirection: "row",
            marginVertical: 30,
        }}
      >
        <Image
          source={{
            uri: imgSrc,
          }}
          style={{
            width: 80,
            height: 80,
            position: "absolute",
            resizeMode: "contain",
            left: 10,
            borderTopLeftRadius: 20,
            borderBottomRightRadius: 20,
          }}
        />
  
        <View style={{ width: "80%", paddingHorizontal: 30 }}>
          <Text numberOfLines={1}>{name}</Text>
          <Headline
            numberOfLines={1}
            style={{
              fontWeight: "900",
            }}
          >
            ₹{price}
          </Headline>
        </View>
      </View>
    </TouchableOpacity>
  );



  
export default SearchModals;
