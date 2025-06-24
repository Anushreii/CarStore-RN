import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView
} from 'react-native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import Circle from '../components/Circle';
import color from '../constant/colors';
//import KeyboardWrapper from '../components/KeyboardWrapper';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';


const Login: React.FC = () => {
  const navigation = useNavigation();
  //const navigation = useNavigation<NativeStackNavigationProp<any>>();

//  const handleLogin = () => {
//   navigation.replace('Main'); // Goes to BottomTab
// };

  return (
    
    // <KeyboardAvoidingView style={styles.container}>
    //   <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
    //     <ScrollView contentContainerStyle={{flexGrow:1}} keyboardShouldPersistTaps='handled'>
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={color.white} />

     
      <Circle size={80} bgColor={color.primary} textColor={color.white} />

      
      <Text style={styles.title}>Login</Text>
      <Text style={styles.subtitle}>Welcome to CarStore</Text>

      
      <CustomInput placeholder="Username" iconName='person'/>
      <CustomInput placeholder="Password" iconName='lock' secureTextEntry />
      

      <TouchableOpacity>
      <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity> 

      
      <CustomButton
        title="Login"
        onPress={() => console.log('Login pressed')}
        backgroundColor={color.primary}
        textColor={color.white}
      />

      {/* Footer Signup Link */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Signup' as never)}>
          <Text style={styles.signupLink}>Sign Up</Text>
        </TouchableOpacity>
        </View>
      </View>
    //   </ScrollView>
    //   </TouchableWithoutFeedback>
    // </KeyboardAvoidingView>
  );
};

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
    fontSize: 19,
    fontFamily: 'Poppins-Bold',
    color: color.black,
    fontWeight:"600",
    marginTop: 5,
  },
  subtitle: {
    fontSize: 14,
    color: '#000000',
    fontFamily: 'Poppins-Regular',
    marginBottom: 60,
    fontWeight:'400',
  },
  forgot: {
    fontSize: 14,
    color: color.black,
    fontFamily: 'Poppins-Bold',
    fontWeight:'500',
    marginBottom: 20,
  },
  footer: {
    flexDirection: 'row',
    marginTop: 30,
  },
  footerText: {
    fontSize: 14,
    color: color.grey,
    fontFamily: 'Poppins-Regular',
    fontWeight:'600',
  },
  signupLink: {
    fontSize: 14,
    color: color.primary,
    fontFamily: 'Poppins-Bold',
    marginLeft: 5,
  },
});


