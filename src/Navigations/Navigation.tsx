import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from "../screens/Splash";
import Login from "../screens/Login";
import Signup from "../screens/Signup";
import CarDetailsScreen from "../screens/CarDetailScreen";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
      {/* <Stack.Screen name="CarDetailScreen" component={CarDetailsScreen} options={{ title: "Car Details" }} /> */}
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} /> 
        <Stack.Screen name="Signup" component={Signup}/> 
        <Stack.Screen name="CarDetailsScreen" component={CarDetailsScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  ); 
};

export default AppNavigator;
