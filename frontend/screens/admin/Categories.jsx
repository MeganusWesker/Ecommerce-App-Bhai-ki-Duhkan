import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors, defaultStyle, inputOptions } from '../../styles/styles';
import Header from '../../components/Header';
import CategoryItem from '../../components/CategoryItem';
import { Button, TextInput } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { addCategory, deleteCategory, getAllCategory } from '../../redux/actions/otherActions';
import { Toast } from 'react-native-toast-message/lib/src/Toast';





const Categories = () => {

  const [category, setCategory] = useState("");

  const {categories,loading,error,message} =useSelector(state=>state.other);

  const dispatch =useDispatch();

  const deleteHandler=async(id)=>{
  
   await dispatch(deleteCategory(id));
      dispatch(getAllCategory());
  }

  const submitHandler=async()=>{
    
    await dispatch(addCategory(category));
    dispatch(getAllCategory());
  }



  useEffect(()=>{

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
  
  },[error,message,dispatch]);


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
              Categories
            </Text>
        </View>

        <ScrollView
           showsVerticalScrollIndicator={false}
        >

      {loading===false && (
        <View
        style={{
          backgroundColor:colors.color5,
          minHeight:350,
          maringBottom:10,
          borderRadius:10,
        }}
      >



        {categories && categories.map((item,i)=>(

         <CategoryItem 
            name={item.category}
            key={item._id}
            id={item._id}
            index={i}
            deleteHandler={deleteHandler}
           />
        ))}



      </View>
      )}
          

          <View style={style.container}>
            <TextInput
                {...inputOptions}
                placeholder="Category"
                value={category}
                onChangeText={setCategory}
            />
            <Button
               textColor={colors.color2}
               style={{
                 backgroundColor: colors.color1,
                 margin: 20,
                 padding: 6,
               }}
               loading={loading}
               disabled={!category}
               onPress={submitHandler}
            >Add</Button>
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
       marginVertical:50,
  },

  container: {
    padding: 20,
    elevation: 10,
    borderRadius: 10,
    backgroundColor: colors.color3,
    marginVertical:20,
  },

  

 

  


});

export default Categories
