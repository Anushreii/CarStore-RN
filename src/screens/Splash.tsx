import React from 'react';
import { View, StyleSheet, Image, Text, StatusBar, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const Splash: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <Image
        source={require('../assets/car-wash.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <TouchableOpacity onPress={() => navigation.navigate('Login' as never)}>
        <Text style={styles.title}>CarStore</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF5C00',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontFamily: 'Poppins-Bold',
    color: '#FFFFFF',
    marginTop: 20,
  },
  logo: {
    width: width * 0.3,
    height: height * 0.2,
  },
});
