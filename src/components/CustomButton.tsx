import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle } from 'react-native';

interface Props {
  title: string;
  onPress: () => void;
  backgroundColor?: string;
  textColor?: string;
  style?: ViewStyle; 
}

const CustomButton: React.FC<Props> = ({
  title,
  onPress,
  backgroundColor = '#FF5C00',
  textColor = '#fff',
  style,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, { backgroundColor }, style]} 
    >
      <Text style={[styles.text, { color: textColor }]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;


const styles = StyleSheet.create({
  button: {
    width: '100%',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    
  },
  text: {
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    
  },
});




// import React from 'react';
// import { TouchableOpacity, Text, StyleSheet, ViewStyle } from 'react-native';

// interface Props {
//   title: string;
//   onPress: () => void;
//   backgroundColor?: string;
//   textColor?: string;
//   style?: ViewStyle; // ✅ allow external styling
// }

// const CustomButton: React.FC<Props> = ({
//   title,
//   onPress,
//   backgroundColor = '#FF5C00',
//   textColor = '#fff',
//   style,
// }) => {
//   return (
//     <TouchableOpacity
//       onPress={onPress}
//       style={[styles.button, { backgroundColor }, style]} // ✅ apply external style
//     >
//       <Text style={[styles.text, { color: textColor }]}>{title}</Text>
//     </TouchableOpacity>
//   );
// };

// export default CustomButton;
