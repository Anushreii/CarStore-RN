import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';
import colors from '../constant/colors';
import Mu
interface Props {
  price: number;
  onChange: (value: number) => void;
}

const SliderComponent: React.FC<Props> = ({ price, onChange }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.priceLabel}>Price Range</Text>
      <Text style={styles.priceText}>
        Rs. 0 – Rs. {price === 0 
          ? '3.000.000.00' 
          : price.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
      </Text>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={3000000}
        step={1000}
        value={price}
        onValueChange={onChange}
        minimumTrackTintColor='#E5E5E5'
        maximumTrackTintColor="#E5E5E5"
        thumbTintColor={colors.primary}
        // thumbImage={require('../assets/thumb.png')}
      />
    </View>
  );
};

export default SliderComponent;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  priceLabel: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    color: colors.black,
    marginBottom: 4,
  },
  priceText: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: colors.grey,
    fontWeight: '600',
    marginBottom: 10,
  },
  slider: {
    width: '100%', 
    height: 45,
    color:colors.grey,
  },
});
