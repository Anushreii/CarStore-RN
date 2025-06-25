import { View, Text, StyleSheet, Image, Dimensions } from 'react-native'
import React from 'react'
import Splash from './src/screens/Splash.tsx'
import Login from './src/screens/Login.tsx'
import AppNavigator from './src/Navigations/Navigation.tsx'
import Signup from './src/screens/Signup.tsx'
import HomeScreenFilter from './src/screens/HomeScreenFilter.tsx'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from './src/screens/HomeScreen.tsx'
import Profile from './src/screens/ProfileScreen.tsx'
import Favorite from './src/screens/Favorite.tsx'
import colors from './src/constant/colors.ts'
import CarDetailsScreen from './src/screens/CarDetailScreen.tsx'
import 'react-native-gesture-handler';

const { width } = Dimensions.get('window');


const Tab = createBottomTabNavigator();
const App = () => {
  return (
    // <Ionicons name={iconName} size={size} color={color} />;

    // <Splash/>
    //<Login/>
    //<AppNavigator />
    //<Signup/>
    // <HomeScreen/>
    //<HomeScreenFilter/>
    //<AppNavigator/>


    <NavigationContainer>

      <Tab.Navigator screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
        



      })}>
        {/* <Tab.Screen name='Home' component={HomeScreen}></Tab.Screen> */}
        <Tab.Screen name='Home' component={HomeScreen} options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Image source={require('./src/assets/Thome.png')}
                style={[
                  styles.icon,
                  { tintColor: focused ? colors.primary : colors.grey },
                ]} />

              //<Image source={{uri:'Thome.png'}} style={{width:20, height:20, backgroundColor:colors.primary}} ></Image>
            )
          }
        }}></Tab.Screen>

        <Tab.Screen name='Favorite' component={Favorite} options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Image source={require('./src/assets/Theart.png')}
                style={[
                  styles.icon,
                  { tintColor: focused ? colors.primary : colors.grey },
                ]} />

            )
          }
        }}></Tab.Screen>

        <Tab.Screen name='Profile' component={Profile} options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Image source={require('./src/assets/Tprofile.png')}
                style={[
                  styles.icon,
                  { tintColor: focused ? colors.primary : colors.grey }
                ]}

              />

            )
          }
        }}></Tab.Screen>
        {/* <Tab.Screen name='Login' component={Login}></Tab.Screen> */}

      </Tab.Navigator>
    </NavigationContainer>


  )
}

export default App;

const styles = StyleSheet.create({
  // tabBar: {
  //   position: 'relative',
  //   width: '85%',
  //   bottom: 40,
  //   backgroundColor: colors.white,
  //   // backgroundColor:'tranparent',
  //   borderRadius: 55,
  //   height: 60,
    
  //   // shadowColor: "#3232470D",
  //   elevation: 10,

  //   alignItems: 'center',
  //   justifyContent: 'space-around',
  //   flexDirection: 'row',
  //   paddingVertical: 10,
  //   alignSelf : 'center', 
  //   right:0
  // left :0,
    

  // },


tabBar: {
  position: 'absolute',
  bottom: 20,
  width:'90%',
  left: 0,
  right: 0,
  height: 62,
  marginHorizontal: 22, 
  backgroundColor: colors.white,
  borderRadius: 40,
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
  elevation: 10,
  zIndex: 100,
},

  icon: {
    width: 28,
    height: 28,
    resizeMode: 'contain',
  },


})















