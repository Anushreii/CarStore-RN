import React from 'react';
import { TextInput, StyleSheet, View  } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import color from '../constant/colors';

interface Props {
  placeholder: string;
  secureTextEntry?: boolean;
  iconName: string; 
}

const CustomInput: React.FC<Props> = ({ placeholder, secureTextEntry, iconName }) => {
  return (
    
    <View style={styles.inputContainer}>
      <Icon name={iconName} size={20} color={color.grey} style={styles.icon} />
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
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 15,
    paddingHorizontal: 15,
    marginBottom: 25,
    backgroundColor: color.white,
    borderWidth: 1,
    borderColor: '#F3F4F6',
    elevation:1,
    height:55,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    color: color.black,
   // fontWeight:'500',
   alignItems:'center'
  },
});

