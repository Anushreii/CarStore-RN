
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import colors from '../../constant/colors';
import SliderComponent from '../../components/Slider';

const AllFilterScreen: React.FC = () => {
  const [price, setPrice] = useState(0);

  return (
    <View style={styles.modalContainer}>
      
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
        <Image
          source={require('./FilterTabAssets/location.png')}
          style={styles.locationIcon}
        />
        <TextInput
          placeholder="Location"
          placeholderTextColor="#A9A9A9"
          style={styles.input}
        />
      </View>

      <SliderComponent price={price} onChange={setPrice} />

      
{/* <Text style={styles.priceLabel}>Price Range</Text>
      <Text style={styles.priceTxt}>Rs. 0 - Rs {Price.toLocaleString('en-IN')}</Text>

      <Slider style={styles.slider}
      minimumValue={0}
      maximumValue={3_000_000_00}
      step={1000}
      value={Price}
      onValueChange={handlepricechange}
      minimumTrackTintColor={colors.primary}
      maximumTrackTintColor='#E5E5E5'
      thumbTintColor={colors.primary}>

      </Slider> */}


      {/*
      <Text style={styles.priceLabel}>Price Range</Text>
      <Text style={styles.priceValue}>
        Rs. {priceRange.min.toLocaleString()} - Rs.{' '}
        {priceRange.max.toLocaleString(undefined, {
          minimumFractionDigits: 2,
        })}
      </Text> */}

      <TouchableOpacity style={styles.searchBtn}>
        <Text style={styles.searchTxt}>Search</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AllFilterScreen;

const styles = StyleSheet.create({
modalContainer: {
  // backgroundColor: '#FFFFFF',
  backgroundColor:colors.primary,
  // borderRadius: 10,
  padding: 34,
  width: '100%',
  height:500,           
  alignSelf: 'center',    
  // elevation: 6,
  // shadowColor: '#000',
  
},

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },

  dropdown: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    padding: 12,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  
  dropdownText: {
    color: '#A9A9A9',
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    fontWeight: '500',
  },

  arrow: {
    width: 16,
    height: 16,
  },

  locationInput: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
    borderRadius: 8,
    padding: 12,
    marginBottom: 20,
  },

  locationIcon: {
    width: 16,
    height: 20,
  },

  input: {
    flex: 1,
    marginLeft: 8,
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: colors.black,
  },
  
  searchBtn: {
  backgroundColor: colors.primary,
  paddingVertical: 12,
  paddingHorizontal: 40,  
  borderRadius: 10,
  alignSelf: 'center',   
  marginTop: 60,
},

  searchTxt: {
    color: colors.white,
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
  }, 
});
