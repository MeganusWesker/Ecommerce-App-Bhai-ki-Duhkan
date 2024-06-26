import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import ProductDetails from "./screens/ProductDetails";
import Toast from "react-native-toast-message";
import Cart from "./screens/Cart";
import ConfirmOrder from "./screens/ConfirmOrder";
import Payment from "./screens/Payment";
import Login from "./screens/Login";
import ForgotPassword from "./screens/ForgotPassword";
import Verify from "./screens/Verify";
import SignUp from "./screens/SignUp";
import Profile from "./screens/Profile";
import UpdateProfile from "./screens/UpdateProfile";
import ChangePassword from "./screens/ChangePassword";
import Orders from "./screens/Orders";
import AdminPanel from "./screens/admin/AdminPanel";
import Categories from "./screens/admin/Categories";
import UpdateProduct from "./screens/admin/UpdateProduct";
import NewProduct from "./screens/admin/NewProduct";
import ProductImages from "./screens/admin/ProductImages";
import CameraComponent from "./screens/CameraComponent";
import { useDispatch } from "react-redux";
import { loadUser } from "./redux/actions/userActions";
import VerifyUser from "./screens/VerifyUser";
import { getAllCategory } from "./redux/actions/otherActions";
import { getAllProducts } from "./redux/actions/productActions";
import AdminOrders from "./screens/admin/AdminOrders";

const Stack = createNativeStackNavigator();

const Main = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
    dispatch(getAllCategory());
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="home"
      >
        <Stack.Group>
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen name="productdetails" component={ProductDetails} />
          <Stack.Screen name="cart" component={Cart} />
          <Stack.Screen name="confirmorder" component={ConfirmOrder} />
          <Stack.Screen name="payment" component={Payment} />
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="forgotpassword" component={ForgotPassword} />
          <Stack.Screen name="verify" component={Verify} />
          <Stack.Screen name="signup" component={SignUp} />
          <Stack.Screen name="profile" component={Profile} />
          <Stack.Screen name="updateprofile" component={UpdateProfile} />
          <Stack.Screen name="changepassword" component={ChangePassword} />
          <Stack.Screen name="orders" component={Orders} />
          <Stack.Screen name="adminpanel" component={AdminPanel} />
          <Stack.Screen name="categories" component={Categories} />
          <Stack.Screen name="updateproduct" component={UpdateProduct} />
          <Stack.Screen name="newproduct" component={NewProduct} />
          <Stack.Screen name="productimages" component={ProductImages} />
          <Stack.Screen name="camera" component={CameraComponent} />
          <Stack.Screen name="verifyuser" component={VerifyUser} />
          <Stack.Screen name="adminorders" component={AdminOrders} />
        </Stack.Group>
      </Stack.Navigator>

      <Toast position="top" topOffset={20} />
    </NavigationContainer>
  );
};

export default Main;
