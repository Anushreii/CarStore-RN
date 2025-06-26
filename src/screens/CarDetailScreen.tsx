import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

const { width } = Dimensions.get('window');

const CarDetailScreen = ({ route }: any) => {
  const { car } = route.params;

  return (
    <View style={styles.container}>
      
      <Image source={car.image} style={styles.carImage} resizeMode="contain" />

      {/* Title */}
      <Text style={styles.carTitle}>{car.title}</Text>

      {/* Price */}
      <Text style={styles.carPrice}>{car.price}</Text>

      {/* Description (optional) */}
      <Text style={styles.description}>
        This premium car is known for its advanced features, comfort, and performance. Perfect for modern drivers.
      </Text>

      {/* Buttons */}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.buttonPrimary}>
          <Text style={styles.buttonText}>Book Now</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonSecondary}>
          <Text style={styles.buttonText}>Wishlist</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CarDetailScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  carImage: {
    width: '100%',
    height: 250,
    borderRadius: 12,
    marginBottom: 20,
  },
  carTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  carPrice: {
    fontSize: 18,
    color: '#FF5722',
    marginBottom: 15,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
    lineHeight: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonPrimary: {
    backgroundColor: '#1E88E5',
    padding: 12,
    borderRadius: 10,
    width: '48%',
    alignItems: 'center',
  },
  buttonSecondary: {
    backgroundColor: '#4CAF50',
    padding: 12,
    borderRadius: 10,
    width: '48%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
