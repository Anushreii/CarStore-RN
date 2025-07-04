
import React from "react";
import { createMaterialTopTabNavigator,  } from "@react-navigation/material-top-tabs";
import AllFilterScreen from "../screens/FilterTabs/AllFilterScreen";
import NewFilterScreen from "../screens/FilterTabs/NewFilterScreen";
import UsedFilterScreen from "../screens/FilterTabs/UsedFilterScreen";
import { NavigationContainer } from "@react-navigation/native";
import colors from "../constant/colors";

const Tab = createMaterialTopTabNavigator();


const FilterTabsNavigator = ()=>{
    return(
        
      <Tab.Navigator 
      screenOptions={{ 
        tabBarScrollEnabled: true,
        tabBarItemStyle: {width: 100, marginTop:10, },
        tabBarIndicatorStyle: { backgroundColor: colors.primary,
            height:3,
            // borderRadius:2
        },
        tabBarLabelStyle: { fontWeight:'900',
             fontSize: 18,
            //  fontFamily:'Poppins-Bold',
              textTransform:'none'
            },

            tabBarActiveTintColor:colors.primary,
            tabBarInactiveTintColor:'#FFCC99',
            tabBarStyle:{
                 backgroundColor:'#FFF',
                //  elevation:0, 
            }
      }}>
        <Tab.Screen name="All" component={AllFilterScreen}></Tab.Screen>
        <Tab.Screen name="New" component={NewFilterScreen}></Tab.Screen>
        <Tab.Screen name="Used" component={UsedFilterScreen}></Tab.Screen>
      </Tab.Navigator>
      
    )
}

export default FilterTabsNavigator;


// export default function FilterTabsNavigator() {
//   return (
//     <Tab.Navigator
//       screenOptions={{
//         tabBarIndicatorStyle: { backgroundColor: colors.primary, height: 3 },
//         tabBarLabelStyle: { fontFamily: 'Poppins-SemiBold' },
//         tabBarActiveTintColor: colors.primary,
//         tabBarInactiveTintColor: '#777',
//         tabBarStyle: { elevation: 0 },          
//       }}
//     >
//       <Tab.Screen name="All" component={AllFilterScreen} />
//       <Tab.Screen name="New" component={NewFilterScreen} />
//       <Tab.Screen name='Used' component={UsedFilterScreen}/>
//     </Tab.Navigator>
//   );
// }
