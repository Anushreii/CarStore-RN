import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Circle from '../components/Circle';
import colors from '../constant/colors';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import KeyboardWrapper from '../components/KeyboardWrapper';
import { useNavigation } from '@react-navigation/native';

const Signup: React.FC = ()=>{
    const navigation = useNavigation();
    return(
        
      <KeyboardWrapper style={styles.container}>

        <Circle size={80} bgColor={colors.primary} textColor={colors.white}></Circle>

        <Text style={styles.title}>Sign Up</Text>
        <Text style={styles.txt}>Find Your Dream car! </Text>

        <CustomInput placeholder='Full Name' iconName='person'/>
        <CustomInput placeholder='Email address' iconName='email'/>
        <CustomInput placeholder='Phone number' iconName='phone'/>
        <CustomInput placeholder='Password' iconName='lock' />

         {/* <View style={{ marginBottom: 30, marginTop: 30 }}>  */}
          <CustomButton title='Sign Up'
            backgroundColor={colors.primary}
            onPress={() => console.log('signup pressed')} /> 

        <View style={styles.footer}>
          <Text style={styles.footertxt}>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login' as never)}>
            <Text style={styles.link}>Sign in</Text>
          </TouchableOpacity>

        </View>
      </KeyboardWrapper>
    )
}

export default Signup;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:25,
        backgroundColor:'#FFFFFF',
    },

    title:{
     fontSize:24,
     color: colors.black,
     fontFamily:'Poppins-Bold',
     
    },

    txt:{
     fontSize: 16,
     marginBottom:50,
     fontFamily: 'Poppins-Regular'
    },

    footer:{
      marginTop:20,
      fontSize:14,
      fontFamily:"Poppins-Regular",
      flexDirection: 'row',

    },

    link:{
     fontFamily:'Poppins-Bold',
     fontSize:14,
     color:colors.primary,
    },

    footertxt:{
      color:colors.grey,

    }

})






