import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CarDetailsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Car Details Screen</Text>
    </View>
  );
};

export default CarDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
});
