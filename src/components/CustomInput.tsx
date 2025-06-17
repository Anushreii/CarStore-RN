import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';
import color from '../constant/colors';

interface Props {
  placeholder: string;
  secureTextEntry?: boolean;
}

const CustomInput: React.FC<Props> = ({ placeholder, secureTextEntry }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        style={styles.input}
        placeholderTextColor={color.grey}
      />
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  inputContainer: {
    width:'100%',
    backgroundColor: color.white,
    borderWidth: 1,
    borderColor:'#FFFFFF',
    paddingHorizontal: 15,
    marginBottom: 20,
    elevation:2,
    borderRadius: 10,
  },
  input: {
    height: 50,
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: color.black, 
   // elevation: 1,
   
    
  },
});
