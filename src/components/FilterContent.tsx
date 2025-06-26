import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
} from 'react-native';
import Slider from '@react-native-community/slider';
import colors from '../constant/colors';

const MODELS = ['SUV', 'Sedan', 'Hatchback'];
const BRANDS = ['Tesla', 'Mahindra', 'Audi'];

type Props = {
  /** callback from parent (All / New / Used) */
  onSearch?: (filters: {
    model: string;
    brand: string;
    min: number;
    max: number;
    location: string;
  }) => void;
};

const FilterContent: React.FC<Props> = ({ onSearch }) => {
  /** dropdown state */
  const [modelOpen, setModelOpen]   = useState(false);
  const [brandOpen, setBrandOpen]   = useState(false);
  const [model, setModel]           = useState('Model');
  const [brand, setBrand]           = useState('Brand');

  /** range-slider state (TWO thumbs) */
  const [minPrice, setMinPrice]     = useState(0);
  const [maxPrice, setMaxPrice]     = useState(3_000_000);

  /** location text */
  const [location, setLocation]     = useState('');

  /* helper for formatting Rs.  */
  const fmt = (v:number) =>
    v.toLocaleString('en-IN', { minimumFractionDigits: 2 });

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >

      <View style={styles.row}>
        <TouchableOpacity
          style={styles.dropdown}
          onPress={() => {
            setModelOpen(!modelOpen);
            brandOpen && setBrandOpen(false);
          }}>
          <Text style={styles.dropdownText}>{model}</Text>
          <Image source={require('../screens/FilterTabs/FilterTabAssets')} style={styles.arrow} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.dropdown}
          onPress={() => {
            setBrandOpen(!brandOpen);
            modelOpen && setModelOpen(false);
          }}>
          <Text style={styles.dropdownText}>{brand}</Text>
          <Image source={require('../screens/FilterTabs/FilterTabAssets')} style={styles.arrow} />
        </TouchableOpacity>
      </View>

      {/* MODEL menu (dummy) */}
      {modelOpen && (
        <View style={styles.menu}>
          {MODELS.map(m => (
            <TouchableOpacity key={m} onPress={()=>{setModel(m);setModelOpen(false);}}>
              <Text style={styles.menuItem}>{m}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      {/* BRAND menu (dummy) */}
      {brandOpen && (
        <View style={styles.menu}>
          {BRANDS.map(b => (
            <TouchableOpacity key={b} onPress={()=>{setBrand(b);setBrandOpen(false);}}>
              <Text style={styles.menuItem}>{b}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      <View style={styles.locationInput}>
        <Image
          source={require('./FilterTabAssets/location.png')}
          style={styles.locationIcon}
        />
        <TextInput
          value={location}
          onChangeText={setLocation}
          placeholder="Location"
          placeholderTextColor="#A9A9A9"
          style={styles.input}
        />
      </View>

      {/* double-slider */}
      <Text style={styles.priceLabel}>Price range</Text>
      <Text style={styles.priceText}>
        Rs. {fmt(minPrice)} – Rs. {fmt(maxPrice)}
      </Text>

      {/* lower thumb – MIN */}
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={maxPrice - 10_000}
        value={minPrice}
        step={10_000}
        onValueChange={setMinPrice}
        minimumTrackTintColor="#E5E5E5"
        maximumTrackTintColor="#E5E5E5"
        thumbTintColor={colors.primary}
      />

      {/* upper thumb – MAX (drawn on top so its knob is visible) */}
      <Slider
        style={[styles.slider, StyleSheet.absoluteFill]}
        minimumValue={minPrice + 10_000}
        maximumValue={3_000_000}
        value={maxPrice}
        step={10_000}
        onValueChange={setMaxPrice}
        minimumTrackTintColor="#E5E5E5"
        maximumTrackTintColor="#E5E5E5"
        thumbTintColor={colors.primary}
      />

      {/* --- search button ---------------------------------------------- */}
      <TouchableOpacity
        style={styles.searchBtn}
        onPress={() =>
          onSearch?.({ model, brand, min: minPrice, max: maxPrice, location })
        }>
        <Text style={styles.searchTxt}>Search</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default FilterContent;

const styles = StyleSheet.create({
  container: { padding: 20, paddingBottom: 60, backgroundColor: '#FFF' },

  row: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 18 },
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
  dropdownText: { color: '#A9A9A9', fontSize: 14, fontFamily: 'Poppins-Regular' },
  arrow: { width: 16, height: 16 },

  menu: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 5,
    marginBottom: 10,
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 2,
  },
  menuItem: {
    padding: 10,
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#E5E5E5',
  },

  /* location -------------------------------------------------------- */
  locationInput: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
    borderRadius: 8,
    padding: 12,
    marginBottom: 20,
  },
  locationIcon: { width: 16, height: 20 },
  input: { flex: 1, marginLeft: 8, fontSize: 14, fontFamily: 'Poppins-Regular' },

  priceLabel: { fontFamily: 'Poppins-Bold', fontSize: 18, marginBottom: 4 },
  priceText : { fontFamily: 'Poppins-Regular', fontSize: 14, color: colors.grey },
  slider    : { width: '100%', height: 45 },

  
  searchBtn : {
    alignSelf: 'center',
    marginTop: 30,
    paddingVertical: 12,
    paddingHorizontal: 60,
    backgroundColor: colors.primary,
    borderRadius: 10,
  },
  searchTxt : { color: '#FFF', fontFamily: 'Poppins-Bold', fontSize: 16 },
});
