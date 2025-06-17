import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props {
  size: number;
  bgColor: string;
  textColor: string;
}

const Circle: React.FC<Props> = ({ size, bgColor, textColor }) => {
  return (
    <View style={[styles.circle, { width: size, height: size, borderRadius: size / 2, backgroundColor: bgColor }]}>
      <Text style={[styles.text, { color: textColor }]}>C</Text>
    </View>
  );
};

export default Circle;

const styles = StyleSheet.create({
  circle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 100,
  },
  text: {
    fontSize: 40,
    fontFamily: 'Poppins-Regular',
    lineHeight:30,
  },
});
