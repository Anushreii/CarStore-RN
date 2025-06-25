// src/screens/FilterTabs/AllFilterScreen.tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  Dimensions,
} from 'react-native';
import colors from '../../constant/colors';   
import Icon from 'react-native-vector-icons/MaterialIcons';

const { width } = Dimensions.get('window');

const AllFilterScreen: React.FC = () => {
  // const [priceRange] = useState({ min: 0, max: 3_000_000 });

  return (
    <View style={styles.container}>
      
      <View style={styles.row}>
        <TouchableOpacity style={styles.dropdown}>
          <Text style={styles.dropdownText}>Model</Text>
          <Image
            source={require('./FilterTabAssets/arrow.png')}
            style={styles.arrow}
            resizeMode="contain"
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.dropdown}>
          <Text style={styles.dropdownText}>Brand</Text>
          <Image
            source={require('./FilterTabAssets/arrow.png')}
            style={styles.arrow}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>

      
      <View style={styles.locationInput}>
        {/* <Icon name="location-on" size={20} color={colors.grey} /> */}
        <Image source={require('./FilterTabAssets/location.png')} ></Image>
        <TextInput
          placeholder="Location"
          placeholderTextColor={colors.grey}
          style={styles.input}
        />
      </View>

      {/* ────────────── PRICE RANGE ──────────────
      <Text style={styles.priceLabel}>Price Range</Text>
      <Text style={styles.priceValue}>
        Rs. {priceRange.min.toLocaleString()} - Rs.{' '}
        {priceRange.max.toLocaleString(undefined, {
          minimumFractionDigits: 2,
        })}
      </Text> */}
{/* 
      {/* (Static) Slider track with two orange handles 
      <View style={styles.sliderTrack}>
        <View style={styles.sliderHandle} />
        <View style={styles.sliderHandle} />
      </View>

      {/* ────────────── SEARCH BUTTON ────────────── 
      <TouchableOpacity style={styles.searchBtn}>
        <Text style={styles.searchTxt}>Search</Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default AllFilterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
    backgroundColor:'#FFFFFF',
    marginTop:20,
  },

  row: 
  { flexDirection: 'row', justifyContent: 'space-between' },

  dropdown: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    padding: 12,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 5,
    color:colors.black,
  },

  dropdownText: {
    color: '#A9A9A9',
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    fontWeight: '500',
  },
  arrow: { width: 14, height: 14, tintColor: colors.grey },

  
  locationInput: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
    borderRadius: 8,
    padding: 12,
  },
  input: {
    flex: 1,
    marginLeft: 8,
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: colors.black,
  },

 

  
});
