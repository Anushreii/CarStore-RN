import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../constant/colors';

const Favorite = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the FAVORITE Screen</Text>
    </View>
  );
};

export default Favorite;

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:colors.primary
  },
  text: {
    fontSize: 18, fontWeight: 'bold'
  }
});



        // <FlatList
        //   data={featuredCars}
        //   horizontal
        //   keyExtractor={(item, index) => index.toString()}
        //   showsHorizontalScrollIndicator={false}
        //   contentContainerStyle={{ paddingVertical: 20 }}
        //   renderItem={({ item }) => (
        //     <View style={styles.featureCard}>
        //       <Image
        //         source={require("../assets/CornerRibbon.png")}
        //         style={styles.ribbinImg}
        //       />
        //       <Image source={item.image} style={styles.featuredImgFlat} resizeMode="cover" />
        //       <View style={styles.captionWrapFlat}>
        //         <Text style={styles.caption}>{item.title}</Text>
        //       </View>
        //     </View>
        //   )}
        // />