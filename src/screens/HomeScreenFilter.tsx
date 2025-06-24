import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import colors from "../constant/colors";
import Icon  from "react-native-vector-icons/MaterialIcons";



const HomeScreenFilter = () =>{
    const [activeTab, setActiveTab] = useState('All');
    return(
      <View style={styles.modalcontainer}>

        <View style={styles.tabsContainer}>
             {["All", "New", "Used"].map((tab) => (
                    <TouchableOpacity key={tab} onPress={() => setActiveTab(tab)} style={styles.tabItem}>
             <Text style={[styles.tabText, activeTab === tab && styles.activeTab]}>{tab}</Text>
             {activeTab === tab && <View style={styles.underline} />}
           </TouchableOpacity>
             ))}
        </View>

        <View style={styles.filtersContainer}>
            <View style={styles.row}>
                <TouchableOpacity style={styles.dropdown}>
                    <Text style={styles.dropdowntext}>Model</Text>
                    <Icon name="arrow-drop-down" size={20}></Icon>
                </TouchableOpacity>
                <TouchableOpacity style={styles.dropdown}>
                    <Text style={styles.dropdowntext}>Brand</Text>
                    <Icon name="arrow-drop-down" size={20}></Icon>
                </TouchableOpacity>
            </View>

            <View style={styles.locationInput}>
                <Icon name="location-on" size={20} color={colors.grey}></Icon>
                <TextInput placeholder="Location" style={styles.inputText}></TextInput>
            </View>

            <Text style={styles.pricelabel}> Price Range</Text>
            <Text style={styles.priceTxt}>Rs. 0 - Rs. 3,000,000.00</Text>

            <View style={styles.sliderTrack}>
              <View style={styles.sliderLeft}></View>
              <View style={styles.sliderRight}></View>
            </View>

            <TouchableOpacity style={styles.searchBtn} >
                <Text style={styles.searchTxt}>Search</Text>
            </TouchableOpacity>
        </View>
      </View>
    )
}
export default HomeScreenFilter;

const styles = StyleSheet.create({
    modalcontainer:{
    backgroundColor:"#FFF",
    borderRadius:12,
    padding:40,
    marginHorizontal:22,
    marginTop:130,
    elevation:6,
    },
    
    tabsContainer:{
       flexDirection:'row',
       justifyContent:'space-around',
       marginBottom:20,
    },

    tabItem:{
          alignItems:'center',
    },

    tabText:{
         fontSize:16,
         fontFamily:'Poppins-Regular',
         color: colors.primary,
         fontWeight:'400',

    },

    activeTab:{
       color:colors.primary,
       fontWeight:'600',
       fontFamily:'Poppins-Bold'
    },

    underline:{
      height:2,
      width:'100%',
      backgroundColor:colors.primary,
      marginTop:4,
    },

    filtersContainer:{
           gap:20,

    },

    row:{
     flexDirection:"row",
     justifyContent:'space-between',
    },

    dropdown:{
         flex:1,
         backgroundColor:'#F9FAFB',
         padding:12,
         borderRadius:8,
         flexDirection:"row",
         justifyContent:'space-between',
         alignItems:"center",
         marginHorizontal:5,
    },

    dropdowntext:{
      color:'#A9A9A9',
      fontWeight:'500',
      fontFamily:'Poppins-Regular',
      fontSize:14

    },

    locationInput:{
         flexDirection:'row',
         alignItems:'center',
         backgroundColor:'#F9FAFB',
         borderRadius:8,
         padding:12,

    },

    inputText:{
     marginLeft:8,
     fontFamily:"Poppins-Regular",
     fontSize:14,
     flex:1,
    },

    pricelabel:{
        fontFamily:"Poppins-Bold",
        fontSize:18,
        color:colors.black,       
    },

    priceTxt:{
       fontSize:14,
       fontFamily:"Poppins-Regular",
       color:colors.grey,
       fontWeight:'600',
       

    },

    sliderTrack:{
        height:5,
        backgroundColor:'#E5E5E5',
        borderRadius:3,
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:10,
        marginBottom:20,
    },

    sliderLeft:{
     width: 20,
     height: 20,
     borderRadius: 10,
     backgroundColor: colors.primary,
     marginTop: -7
    },

    sliderRight:{
     width: 20,
     height: 20,
     borderRadius: 10,
     backgroundColor: colors.primary,
     marginTop: -7
    },

    searchBtn:{
        backgroundColor:colors.primary,
        paddingVertical:10,
        borderRadius:10,
        alignItems:'center',
        marginHorizontal:50,
    },

    searchTxt:{
        color:colors.white,
        fontFamily:'Poppins-Bold',
        fontSize:16,

    }

})


   
