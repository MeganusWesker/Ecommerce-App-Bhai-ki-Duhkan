import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import {
  colors,
  defaultStyle,
  inputOptions,
} from "../styles/styles";
import { Button, TextInput } from "react-native-paper";
import Header from "../components/Header";
import { Dimensions } from "react-native";
import { useDispatch } from "react-redux";
import { changePassword } from "../redux/actions/userActions";
import { useMessageAndErrorUser } from "../utils/customHook";

const ChangePassword = ({navigation}) => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");

  const dispatch=useDispatch();

  const submitHandler=()=>{
    dispatch(changePassword(oldPassword,newPassword,confirmpassword));
  }

  const loading=useMessageAndErrorUser(navigation,dispatch,"profile");

  return (
    <View
      style={{
        ...defaultStyle,
      }}
    >
      <Header back={true} />

      <View style={style.loginHeading}>
        <Text
          style={{
            color: colors.color2,
            textAlign: "center",
          }}
        >
          changepassword
        </Text>
      </View>

      <ScrollView
         showsVerticalScrollIndicator={false}
        >

      <View
        style={{
          backgroundColor: colors.color3,
          borderRadius: 5,
          elevation: 10,
          justifyContent: "center",
          minHeight: Dimensions.get("screen").height / 1.2,
        }}
      >
       
          <TextInput
            {...inputOptions}
            placeholder="oldPassword..."
            secureTextEntry={true}
            value={oldPassword}
            onChangeText={setOldPassword}
          />

          <TextInput
            {...inputOptions}
            placeholder="newPassword..."
            secureTextEntry={true}
            value={newPassword}
            onChangeText={setNewPassword}
          />

          <TextInput
            {...inputOptions}
            placeholder="confirmPassword..."
            secureTextEntry={true}
            value={confirmpassword}
            onChangeText={setconfirmpassword}
          />

          <Button
            style={style.btn}
            textColor={colors.color2}
            disabled={!confirmpassword || !oldPassword || !newPassword}
            onPress={submitHandler}
            loading={loading}
          >
            Submit
          </Button>
       
      </View>
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  loginHeading: {
    backgroundColor: colors.color3,
    padding: 5,
    borderRadius: 5,
    elevation: 5,
    marginVertical:40,
  },

  btn: {
    backgroundColor: colors.color1,
    marginHorizontal: 10,
    borderRadius: 5,
  },

});

export default ChangePassword;
