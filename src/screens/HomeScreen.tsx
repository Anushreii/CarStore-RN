import React from "react";
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
  TextInput
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import colors from "../constant/colors";
import { Modal } from "react-native";
import HomeScreenFilter from "./HomeScreenFilter";
import { useState } from "react";

const { width, height } = Dimensions.get("window");

const carData = [
  {
    image: require("../assets/swift.png"),
    title: "Audi e-tron Premium",
    price: "Rs. 54,77,823.73",
  },
  {
    image: require("../assets/audi.png"),
    title: "Suzuki Swift",
    price: "Rs. 5,85,000",
  },
  {
    image: require("../assets/thar.png"),
    title: "Thar 4x4",
    price: "Rs. 15,00,000",
  },
  {
    image: require("../assets/baleno.png"),
    title: "Maruti Baleno",
    price: "Rs. 8,50,000",
  },

 
];

const HomeScreen = () => {
  const [filterVisible, setFilterVisible] = useState(false);
  return (

    
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      {/* Top Bar */}
      <View style={styles.topBar}>
        <Icon name="menu" size={24} color={colors.black} />
        <Text style={styles.logo}>CarStore</Text>
        <MaterialIcons name="notifications-none" size={24} color={colors.black} />
      </View>

      {/* Search Bar */}
      <View style={styles.searchBarWrapper}>
        < View style={styles.searchBar}>
          <Icon name="search" size={22} color={colors.grey} />
          <Text style={styles.searchPlaceholder}>Search for Honda Pilot 7-Passenger</Text>
        </View>
        <TouchableOpacity onPress={()=> setFilterVisible(true)}>
          <MaterialIcons name="tune" size={22} color={colors.black} style={styles.filterIcon} />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Featured Tesla */}
        <View style={styles.featurescard}>
          <Image source={require("../assets/Tesla.png")} style={styles.featuredimg} resizeMode="cover" />
          {/* <Image source={require('../assets/smallrbn.png')} style={styles.smallrbn}></Image> */}
          <Image source={require("../assets/ribbon.png")} style={styles.ribbinimg} />
          <Text style={styles.ribbontxt}>Featured</Text>
          <View style={styles.captionWrap}>
            <Text style={styles.caption}>Tesla model 3 standard range plus</Text>
          </View>
        </View>

        {/* Recommended */}
        <View style={styles.recommendHeader}>
          <Text style={styles.subsection}>Recommended</Text>
          <Text style={styles.seealltxt}>See all</Text>
        </View>

        <View style={styles.gridContainer}>
          {carData.map((car, index) => (
            <View key={index} style={styles.card}>
              <View style={styles.view360Tag}>
                <Text style={styles.view360Text}>360 View</Text>
                <Image source={require("../assets/view360.png")} style={styles.view360Icon} />
              </View>

              <TouchableOpacity style={styles.heartIcon}>
                <Image source={require("../assets/Heart1.png")} style={styles.heartImg}  />
              </TouchableOpacity>

              <Image source={car.image} style={styles.cardImg} />

              <TouchableOpacity style={styles.playIcon}>
                <Image source={require("../assets/playIcon.png")} style={styles.playImg} />
              </TouchableOpacity>

              <Text style={styles.carTitle}>{car.title}</Text>
              <Text style={styles.carPrice}>{car.price}</Text>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* bottom  bar */}
      {/* <View style={styles.bottomBar}> */}
        {/* <TouchableOpacity style={styles.tabButton}> */}
          {/* <Image source={require("../assets/tab_home.png")} style={styles.tabIcon} /> */}
          {/* <Text style={styles.tabLabel}>Home</Text> */}
        {/* </TouchableOpacity> */}

        {/* <TouchableOpacity style={styles.tabButton}> */}
          {/* <Image source={require("../assets/tab_heart.png")} style={styles.tabIcon} />  */}
        {/* </TouchableOpacity> */}

        {/* <TouchableOpacity style={styles.tabButton}> */}
          {/* <Image source={require("../assets/tab_profile.png")} style={styles.tabIcon} /> */}
         
        {/* </TouchableOpacity> */}
      {/* </View> */}
   
 
    
  {/* Modal screen on FIlter Icon */}
     
      <Modal visible={filterVisible}
      transparent
      animationType="slide"
      onRequestClose={()=> setFilterVisible(false)}>

        <TouchableOpacity activeOpacity={1}
        onPressOut={()=> setFilterVisible(false)}  
        style={{
          flex:1, 
        }}>

        <TouchableOpacity activeOpacity={1}>
          <HomeScreenFilter/>
        </TouchableOpacity>

        </TouchableOpacity>

      </Modal>

    </View>
  );
};


export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: width * 0.05,
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: height * 0.06,
    alignItems: "center",
  },
  logo: {
    fontSize: width * 0.05,
    color: colors.primary,
    fontFamily: "Poppins-Bold",
  },
  searchBarWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: height * 0.02,
  },
  searchBar: {
    flexDirection: "row",
    backgroundColor: "#F3F4F6",
    borderRadius: 10,
    padding: width * 0.04,
    flex: 1,
    marginRight: width * 0.02,
    alignItems: "center",
  },
  searchPlaceholder: {
    flex: 1,
    marginLeft: width * 0.02,
    fontFamily: "Poppins-Regular",
    color: colors.grey,
    fontSize: width * 0.03,
  },
  filterIcon: {
    padding: width * 0.025,
  },
  featurescard: {
    marginTop: height * 0.03,
    borderRadius: 10,
    position: "relative",
  },
  featuredimg: {
    width: "100%",
    height: height * 0.25,
    borderRadius: 10,
  },
  ribbinimg: {
    position: "absolute",
    top: 0,
    left: 0,
    width: width * 0.28,
    height: width * 0.28,
    resizeMode: "contain",
    zIndex: 1,
  },
  ribbontxt: {
    position: "absolute",
    top: width * 0.09,
    left: -width * 0.05,
    transform: [{ rotate: "-45deg" }],
    width: width * 0.3,
    color: colors.white,
    textAlign: "center",
    fontSize: width * 0.04,
    fontFamily: "Poppins-SemiBold",
    fontWeight: "700",
    zIndex: 2,
  },
  captionWrap: {
    position: "absolute",
    top: 0,
    bottom: 8,
    left: 0,
    right: 0,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  caption: {
    fontSize: 14,
    color: colors.white,
    fontFamily: "Poppins-Regular",
    fontWeight: "600",
    textAlign: "center",
  },
  recommendHeader: {
    marginTop: height * 0.04,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  subsection: {
    fontSize: width * 0.05,
    fontFamily: "Poppins-Regular",
    color: "#040415",
    fontWeight: "500",
  },
  seealltxt: {
    fontSize: width * 0.040,
    color: colors.grey,
    fontWeight: "700",
    fontFamily: "Poppins-Regular",
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap: 30,
  },
  card: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingBottom: 2 ,
    //paddingTop:10,
  },
  view360Tag: {
    position: "absolute",
    top: 10,
    left: 10,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
    zIndex: 2,
  },
  view360Text: {
    fontSize: 10,
    color: colors.primary,
    fontWeight: "700",
    marginRight: 3,
  },
  view360Icon: {
    width: 12,
    height: 12,
  },
  heartIcon: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 2,
  },
  heartImg: {
    width: 20,
    height: 20,
  },
  cardImg: {
    width: "100%",
    height: 180,
    resizeMode: "cover",
    borderRadius: 12,
  },
  playIcon: {
    position: "absolute",
    bottom: 60,
    left: 10,
    zIndex: 2,
  },
  playImg: {
    width: 17,
    height: 17,
  },
  carTitle: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: "600",
    color: "#000",
    paddingHorizontal: 10,
  },
  carPrice: {
    fontSize: 13,
    color: colors.grey,
    paddingHorizontal: 10,
  },

   smallrbn: {
    width: 0,
    height: 0,
    borderTopWidth: 16,
    borderRightWidth: 16,
    borderTopColor: colors.primary,
    borderRightColor: 'transparent',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 3, 
  },

  
  // bottomBar: {
  //   position: "absolute",
  //   bottom: 15,
  //   left: 20,
  //   right: 20,
  //   backgroundColor: "#ffffff",
  //   flexDirection: "row",
  //   justifyContent: "space-around",
  //   alignItems: "center",
  //   paddingVertical: 10,
  //   borderRadius: 45,
  //   shadowColor: "#000",
  //   shadowOpacity: 0.1,
  //   shadowRadius: 6,
  //   elevation: 5,
  // },

  // tabButton: {
  //   alignItems: "center",
  //   justifyContent: "center",
  // },

  // tabIcon: {
  //   width: 24,
  //   height: 45,
  //   resizeMode: "contain",
  // },

  

  
});
