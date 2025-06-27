// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   Image,
//   TextInput,
// } from 'react-native';
// import colors from '../../constant/colors';
// import SliderComponent from '../../components/Slider';


// const modelOptions = ['Swift', 'Thar', 'Baleno', 'Ertiga', 'Scorpio'];
// const brandOptions = ['Maruti', 'Mahindra', 'Toyota', 'Tata', 'Hyundai'];

// const AllFilterScreen: React.FC = () => {
//   const [price, setPrice] = useState(0);

//   const [showModelDropdown, setShowModelDropdown] = useState(false);
//   const [showBrandDropdown, setShowBrandDropdown] = useState(false);

//   const [selectedModel, setSelectedModel] = useState('Model');
//   const [selectedBrand, setSelectedBrand] = useState('Brand');

//   /** reusable  renderer */
//   const dropdownList = (
//     data: string[],
//     onSelect: (v: string) => void,
//   ) => (
//     <View style={styles.dropdownList}>
//       {data.map((item)=>(
//         <TouchableOpacity
//         key={item}
//         style={styles.dropdownItem}
//         onPress={() => onSelect(item)}>
//           <Text style={styles.dropdownItemText}>{item}</Text>
//         </TouchableOpacity>
//       ))}
//     </View>
//   );

//   return (
//     <View style={styles.modalContainer}>

//       <View style={styles.row}>
//         <View style={{ flex: 1, marginHorizontal: 5 }}>
//           <TouchableOpacity
//             style={styles.dropdown}
//             onPress={() => {
//               setShowModelDropdown(!showModelDropdown);
//               setShowBrandDropdown(false);
//             }}
//           >
//             <Text style={styles.dropdownText}>{selectedModel}</Text>
//             <Image
//               source={require('./FilterTabAssets/arrow.png')}
//               style={styles.arrow}
//               resizeMode="contain"
//             />
//           </TouchableOpacity>
//           {showModelDropdown &&
//             dropdownList(modelOptions, (v) => {
//               setSelectedModel(v);
//               setShowModelDropdown(false);
//             })}
//         </View>

//         {/* Brand */}
//         <View style={{ flex: 1, marginHorizontal: 5 }}>
//           <TouchableOpacity
//             style={styles.dropdown}
//             onPress={() => {
//               setShowBrandDropdown(!showBrandDropdown);
//               setShowModelDropdown(false);
//             }}
//           >
//             <Text style={styles.dropdownText}>{selectedBrand}</Text>
//             <Image
//               source={require('./FilterTabAssets/arrow.png')}
//               style={styles.arrow}
//               resizeMode="contain"
//             />
//           </TouchableOpacity>
//           {showBrandDropdown &&
//             dropdownList(brandOptions, (v) => {
//               setSelectedBrand(v);
//               setShowBrandDropdown(false);
//             })}
//         </View>
//       </View>

//       {/* ——— Location input ——— */}
//       <View style={styles.locationInput}>
//         <Image
//           source={require('./FilterTabAssets/location.png')}
//           style={styles.locationIcon}
//         />
//         <TextInput
//           placeholder="Location"
//           placeholderTextColor="#A9A9A9"
//           style={styles.input}
//         />
//       </View>

//       {/* ——— Price slider ——— */}
//       <SliderComponent price={price} onChange={setPrice} />

//       {/* ——— Search button ——— */}
//       <TouchableOpacity style={styles.searchBtn}>
//         <Text style={styles.searchTxt}>Search</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default AllFilterScreen;

// const styles = StyleSheet.create({
//   modalContainer: {
//     backgroundColor: '#fff',
//     padding: 34,
//     width: '100%',
//     height: 500,
//     alignSelf: 'center',
//   },

//   row: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 20,
//   },

//   dropdown: {
//     backgroundColor: '#F9FAFB',
//     padding: 12,
//     borderRadius: 8,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },

//   dropdownText: {
//     color: '#A9A9A9',
//     fontSize: 14,
//     fontFamily: 'Poppins-Regular',
//   },

//   arrow: { width: 16, height: 16 },

//   /* location */
//   locationInput: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#F9FAFB',
//     borderRadius: 8,
//     padding: 12,
//     marginBottom: 20,
//   },
//   locationIcon: { width: 16, height: 20 },
//   input: {
//     flex: 1,
//     marginLeft: 8,
//     fontSize: 14,
//     fontFamily: 'Poppins-Regular',
//     color: colors.black,
//   },

//   /* search */
//   searchBtn: {
//     backgroundColor: colors.primary,
//     paddingVertical: 12,
//     paddingHorizontal: 40,
//     borderRadius: 10,
//     alignSelf: 'center',
//     marginTop: 60,
//   },
//   searchTxt: {
//     color: '#fff',
//     fontFamily: 'Poppins-Bold',
//     fontSize: 16,
//   },

//   /* dropdown list */
//   dropdownList: {
//     backgroundColor: '#fff',
//     borderRadius: 8,
//     paddingVertical: 6,
//     marginTop: 4,
//     elevation: 3,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 6,
//   },
//   dropdownItem: {
//     paddingVertical: 10,
//     paddingHorizontal: 12,
//   },
//   dropdownItemText: {
//     fontSize: 14,
//     fontFamily: 'Poppins-Regular',
//     color: colors.black,
//   },
// });








// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   Image,
//   TextInput,
//   FlatList,
// } from 'react-native';
// import SliderComponent from '../../components/Slider';
// import colors from '../../constant/colors';

// const modelOptions = ['Swift', 'Thar', 'Baleno', 'Ertiga', 'Scorpio'];
// const brandOptions = ['Maruti', 'Mahindra', 'Toyota', 'Tata', 'Hyundai'];

// const AllFilterScreen: React.FC = () => {
//   const [price, setPrice] = useState(0);
//   const [showModelDropdown, setShowModelDropdown] = useState(false);
//   const [showBrandDropdown, setShowBrandDropdown] = useState(false);
//   const [selectedModel, setSelectedModel] = useState('Model');
//   const [selectedBrand, setSelectedBrand] = useState('Brand');

//   const renderDropdown = (data: string[], onSelect: (value: string) => void) => (
//     <View style={styles.dropdownList}>
//       {data.map((item, index) => (
//         <TouchableOpacity
//           key={index}
//           onPress={() => {
//             onSelect(item);
//           }}
//           style={styles.dropdownItem}
//         >
//           <Text style={styles.dropdownItemText}>{item}</Text>
//         </TouchableOpacity>
//       ))}
//     </View>
//   );

//   return (
//     <View style={styles.modalContainer}>
//       <View style={styles.row}>
//         <View style={{ flex: 1, marginHorizontal: 5 }}>
//           <TouchableOpacity
//             style={styles.dropdown}
//             onPress={() => {
//               setShowModelDropdown(!showModelDropdown);
//               setShowBrandDropdown(false);
//             }}
//           >
//             <Text style={styles.dropdownText}>{selectedModel}</Text>
//             <Image
//               source={require('./FilterTabAssets/arrow.png')}
//               style={styles.arrow}
//               resizeMode="contain"
//             />
//           </TouchableOpacity>
//           {showModelDropdown &&
//             renderDropdown(modelOptions, (value) => {
//               setSelectedModel(value);
//               setShowModelDropdown(false);
//             })}
//         </View>

//         <View style={{ flex: 1, marginHorizontal: 5 }}>
//           <TouchableOpacity
//             style={styles.dropdown}
//             onPress={() => {
//               setShowBrandDropdown(!showBrandDropdown);
//               setShowModelDropdown(false);
//             }}
//           >
//             <Text style={styles.dropdownText}>{selectedBrand}</Text>
//             <Image
//               source={require('./FilterTabAssets/arrow.png')}
//               style={styles.arrow}
//               resizeMode="contain"
//             />
//           </TouchableOpacity>
//           {showBrandDropdown &&
//             renderDropdown(brandOptions, (value) => {
//               setSelectedBrand(value);
//               setShowBrandDropdown(false);
//             })}
//         </View>
//       </View>

//       <View style={styles.locationInput}>
//         <Image
//           source={require('./FilterTabAssets/location.png')}
//           style={styles.locationIcon}
//         />
//         <TextInput
//           placeholder="Location"
//           placeholderTextColor="#A9A9A9"
//           style={styles.input}
//         />
//       </View>

//       <SliderComponent price={price} onChange={setPrice} />

//       <TouchableOpacity style={styles.searchBtn}>
//         <Text style={styles.searchTxt}>Search</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default AllFilterScreen;



// //   dropdownList: {
// //     backgroundColor: '#fff',
// //     borderRadius: 8,
// //     paddingVertical: 6,
// //     marginTop: 4,
// //     elevation: 3,
// //     shadowColor: '#000',
// //     shadowOpacity: 0.1,
// //     shadowRadius: 6,
// //   },
// //   dropdownItem: {
// //     paddingVertical: 10,
// //     paddingHorizontal: 12,
// //   },
// //   dropdownItemText: {
// //     fontSize: 14,
// //     fontFamily: 'Poppins-Regular',
// //     color: colors.black,
// //   },

import React from 'react';
import FilterForm from '../../components/FilterContent';

const AllFilterScreen = () => {
  return (
    <FilterForm
      modelOptions={['Swift', 'Thar', 'Baleno', 'Wagnor', 'G-wagon']}
      brandOptions={['Maruti', 'Nexa']}
    />
  );
};

export default AllFilterScreen;