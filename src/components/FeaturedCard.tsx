// components/FeaturedCard.tsx
import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import colors from '../constant/colors';

const { width, height } = Dimensions.get('window');

const FeaturedCard = ({ image, title }: { image: any; title: string }) => {
  return (
    <View style={styles.cardWrapper}>
     
      {/* <Image source={require('../assets/Tesla.png')} style={styles.image} /> */}
      <Image source={image} style={styles.image} />


      {/* Ribbon  */}
      <Image
        source={require('../assets/CornerRibbon.png')}
        style={styles.ribbon}
      />

      <View style={styles.captionContainer}>
        <Text style={styles.caption}>{title}</Text>
      </View>
    </View>
  );
};

export default FeaturedCard;

const CARD_WIDTH  = width * 0.7;
const PEEK_SPACE  = width * 0.06;

const styles = StyleSheet.create({
  cardWrapper: {
    // width: width * 0.8,
    width:CARD_WIDTH,
    marginRight: PEEK_SPACE,
    marginTop: height * 0.02,
    height: 150,
    borderRadius: 12,
    position: 'relative',
    //overflow: 'hidden',
    backgroundColor:'#FFF'
  },

  image: {
    width: 280,
    // width: '100%',
    height:170,
    borderRadius: 12,
    
    
  },
  ribbon: {
    position: "absolute",
    top: -11,
    left: -15,
    width: 100,
    height: 100,
    resizeMode: "contain",
    zIndex: 5,
  },

  captionContainer: {
    position: 'absolute',
    bottom: -8,
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


