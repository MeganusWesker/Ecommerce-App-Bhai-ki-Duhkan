import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { defaultStyle,colors, defaultImg } from '../styles/styles'
import { Avatar, Button } from 'react-native-paper'
import ButtonBox from '../components/ButtonBox'
import Footer from '../components/Footer'
import Loader from '../components/Loader'
import { useDispatch, useSelector } from 'react-redux'
import { loadUser, logOutUser} from '../redux/actions/userActions'
import { useMessageAndErrorUser } from '../utils/customHook'
import { myOrders } from '../redux/actions/orderAction'
import mime from "mime";
import { updateProfilePicture } from '../redux/actions/otherActions'
import { Toast } from 'react-native-toast-message/lib/src/Toast'







const Profile = ({navigation,route}) => {

  const {user} =useSelector(state=>state.user);

  const {message,error} =useSelector(state=>state.other);

 

  const dispatch =useDispatch();



  const [avatar, setAvatar] = useState(user?.avatar.url ? user.avatar.url :defaultImg);

  const logoutHandler=()=>{
     dispatch(logOutUser());
  }


  const loading = useMessageAndErrorUser(navigation,dispatch,"login");

  


  const navigateHandler = (text) => {

  
    switch (text) {
      case "Admin":
        navigation.navigate("adminpanel");
        break;
      case "Orders":
        navigation.navigate("orders");
        break;
      case "Profile":
        navigation.navigate("updateprofile");
        break;
      case "Password":
        navigation.navigate("changepassword");
        break;
      case "Log Out":
        logoutHandler();
        break;

      default:
      case "Orders":
        navigation.navigate("orders");
        break;
    }
  };

  useEffect(() => {
    dispatch(myOrders());
  }, [dispatch])

  useEffect(()=>{
    if (route.params?.image) {
      setAvatar(route.params.image);

      const myForm = new FormData();
      myForm.append("file", {
        uri: route.params.image,
        type: mime.getType(route.params.image),
        name: route.params.image.split("/").pop(),
      });

      dispatch(updateProfilePicture(myForm));
    }

    dispatch(loadUser());
  },[route.params,dispatch])

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

    <>
    <View
      style={defaultStyle}
    >

      <View style={style.loginHeading} >
           <Text 
                style={{
                    color:colors.color2,
                    textAlign:"center",
                }}
           >
              Profile
            </Text>
        </View>
       {loading ? <Loader/>:(<>

        <View
          style={style.container}
        >

          <Avatar.Image
             source={{
                uri:avatar,
             }}

             size={80}
          />

          <TouchableOpacity
             onPress={()=>navigation.navigate("camera",{updateProfile:true})}
          >
            <Button
              textColor={colors.color1}
            >
               Change Photo
            </Button>
          </TouchableOpacity>

          <Text
            style={{
               color:colors.color5,
               fontSize:17,
               fontWeight:"500",
               textTransform:"uppercase",
               letterSpacing:1,
            }}
          >
             {user?.name}
          </Text>

          <Text
              style={{
                color:colors.color2,
                fontSize:16,
                fontWeight:"100",
             }}
          >
             {user?.email}
          </Text>

        </View>

        <View
          style={{
            flexDirection:"row",
            margin:10,
            justifyContent:"space-between",
          }}
        >

          <ButtonBox reverse={false}  text={"Orders"} icon={"format-list-bulleted-square"} handler={navigateHandler} />

          {user?.role ==='admin' && (
            <ButtonBox reverse={true} text={"Admin"} icon={"view-dashboard"}  handler={navigateHandler}/>
          )}

          <ButtonBox reverse={false} text={"Profile"} icon={"pencil"}  handler={navigateHandler}/>

        </View>

        <View
          style={{
            flexDirection:"row",
            margin:10,
            justifyContent:"space-evenly",
          }}
        >

          <ButtonBox reverse={false}  text={"Password"} icon={"pencil"} handler={navigateHandler} />
          <ButtonBox reverse={false} text={"Log Out"} icon={"exit-to-app"} handler={navigateHandler} />

        </View>
        </>)}


    </View>
    
    <Footer activeRoute={"Profile"}/>
    </>
  )
}

const style=StyleSheet.create({
  loginHeading:{
       backgroundColor:colors.color3,
       padding:8,
       borderRadius:5,
       elevation:5,
       marginBottom:5,
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

  container:{
    backgroundColor:colors.color3,
    borderRadius:10,
    alignItems:"center",
    padding:20,

  }


});

export default Profile