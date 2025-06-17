import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import Circle from '../components/Circle';
import color from '../constant/colors';
import { useNavigation } from '@react-navigation/native';
import colors from '../constant/colors';

const Login: React.FC = () => {
 const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar barStyle='dark-content'></StatusBar>
     
      <Circle size={80} bgColor={colors.primary} textColor={colors.white} />

      
      <Text style={styles.title}>Login </Text>
        <Text style={styles.txt}>Welcome to CarStore</Text>
        

      {/* Inputs */}
      <CustomInput placeholder="Username" />
      <CustomInput placeholder="Password" secureTextEntry />
      <Text style={styles.frgtpwrd}>Forget Password?</Text>

      {/* Button */}
      <CustomButton
        title="Login"
        onPress={() => console.log('Login pressed')}
        backgroundColor={color.primary}
        textColor={color.white}
      />

      <View style={styles.footer}>
  <Text style={styles.footerText}>Don’t have an account? </Text>
  <TouchableOpacity onPress={()=>navigation.navigate('Signup' as never)}>
    <Text style={styles.link}>Sign Up</Text>
  </TouchableOpacity>
</View>

      
    </View>
  );
};


{/* <Text style={styles.footer}>
  Don’t have an account?
  <TouchableOpacity onPress={() => navigation.navigate('Signup' as never)}>
    <Text style={styles.link}> Sign Up</Text>
  </TouchableOpacity>
</Text> */}


export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 25,
  },
  title: {
    fontSize: 28,
    fontFamily: 'Poppins-Bold',
    color: color.black,
  },
  txt: {
    marginBottom: 50,
    fontFamily: 'Poppins-Regular',
    color: color.black,
    fontSize:16,
  },

  frgtpwrd: {
    fontFamily: 'Poppins-Bold',
    color: color.black,
    alignSelf: 'center',
    marginBottom: 30,
    fontSize: 14,
  },
  footer: {
    marginTop: 20,
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: color.black,
    flexDirection: 'row',
  },
  link: {
    fontFamily: 'Poppins-Bold',
    color: color.primary,
    marginLeft: 5,
  },

  footerText: {
  fontSize: 14,
  fontFamily: 'Poppins-Regular',
  color: color.grey,
},
});
