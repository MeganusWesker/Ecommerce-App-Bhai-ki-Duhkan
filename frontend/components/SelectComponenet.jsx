import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { colors } from '../styles/styles';
import { Avatar } from 'react-native-paper';

const SelectComponenet = ({visible,setVisible,categories,setCategoryID,setCategory}) => {

    const setCategoryHandler=(item)=>{
        setCategory(item.category);
        setCategoryID(item._id);
        setVisible(false);
    }


  return (

    (  visible && <View
        style={style.container}
      >

        <TouchableOpacity
          onPress={()=>setVisible(false)}
        >
            <Avatar.Icon 
                icon={'close'} 
                size={30}
                style={{
                    backgroundColor:colors.color1,
                    alignSelf:"flex-end",

                }}
              />
        </TouchableOpacity>

        

        <View style={style.loginHeading} >
          <Text 
                style={{
                    color:colors.color2,
                    textAlign:"center",
                }}
          >
              Select a Category
            </Text>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
        >

            {categories && categories.map((item)=>(
                <Text

                   key={item._id}
                   style={style.text}
                   onPress={()=>setCategoryHandler(item)}
                >
                    {item.category}
                    
                </Text>
            ))}

        </ScrollView>
       
      </View> )
 
  )
}

const style=StyleSheet.create({
    container:{
        height:"90%",
        width:"90%",
        borderRadius:10,
        backgroundColor:colors.color2,
        elevation:10,
        position:"absolute",
        alignSelf:"center",
        top:30,
        padding:10,

    },

    loginHeading:{
        backgroundColor:colors.color3,
        padding:8,
        borderRadius:5,
        elevation:5,
        marginVertical:15,
   },

   text:{
      marginVertical:4,
      fontWeight:"900",
      textTransform:"uppercase"
   }
});

export default SelectComponenet