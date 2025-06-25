// components/FeaturedCard.tsx
import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import colors from '../constant/colors';

const { width, height } = Dimensions.get('window');

const FeaturedCard = ({ image, title }: { image: any; title: string }) => {
  return (
    <View style={styles.cardWrapper}>
      {/* Card Image */}
      <Image source={require('../assets/Tesla.png')} style={styles.image} />

      {/* Ribbon Image */}
      <Image
        source={require('../assets/CornerRibbon.png')}
        style={styles.ribbon}
      />

      {/* Caption Centered */}
      <View style={styles.captionContainer}>
        <Text style={styles.caption}>{title}</Text>
      </View>
    </View>
  );
};

export default FeaturedCard;

const styles = StyleSheet.create({
  cardWrapper: {
    width: width * 0.8,
    marginTop: height * 0.04,
    height: 180,
    borderRadius: 12,
    marginRight: 20,
    position: 'relative',
    overflow: 'hidden',
  },
  image: {
    width: 300,
    // width: '100%',
    height:170,
    borderRadius: 12,
  },
  ribbon: {
    position: "absolute",
    top: -5,
    left: -10,
    width: 100,
    height: 100,
    resizeMode: "contain",
    zIndex: 5,
  },
  captionContainer: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  caption: {
    fontSize: 14,
    color: colors.white,
    fontFamily: 'Poppins-Regular',
    fontWeight: '600',
    textAlign: 'center',
  },
});


{/* <FlatList
  horizontal
  data={featuredCars}
  keyExtractor={(item, index) => index.toString()}
  renderItem={({ item }) => (
    <FeaturedCard image={item.image} title={item.title} />
  )}
  showsHorizontalScrollIndicator={false}
  contentContainerStyle={{ paddingVertical: 20 }}
/> */}
