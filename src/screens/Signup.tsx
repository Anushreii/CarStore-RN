import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Circle from '../components/Circle';
import colors from '../constant/colors';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
const Signup: React.FC = ()=>{
    const navigation = useNavigation();
    return(
        
      <View style={styles.container}>

        <Circle size={80} bgColor={colors.primary} textColor={colors.white}></Circle>

        <Text style={styles.title}>Sign Up</Text>
        <Text style={styles.txt}>Find Your Dream car! </Text>

        <CustomInput placeholder='Full Name'/>
        <CustomInput placeholder='Email address'/>
        <CustomInput placeholder='Phone number'/>
        <CustomInput placeholder='Password'/>

        <CustomButton title='Sign Up' backgroundColor={colors.primary} onPress={()=> console.log('signup pressed')}/>

            <View style={styles.footer}>
            <Text style={styles.footertxt}>Already have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login' as never)}>
                    <Text style={styles.link}>Sign in</Text>
                </TouchableOpacity> 
            
             </View>
      </View>
    )
}

export default Signup;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:25,
    },

    title:{
     fontSize:24,
     color: colors.black,
     fontFamily:'Poppins-Bold'
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


















// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
// import CustomInput from '../components/CustomInput';
// import CustomButton from '../components/CustomButton';
// import Circle from '../components/Circle';
// import color from '../constant/colors';
// import { useNavigation } from '@react-navigation/native';

// const Signup: React.FC = () => {
//   const navigation = useNavigation();

//   return (
//     <View style={styles.container}>
//       <StatusBar barStyle='dark-content' />

//       {/* Logo */}
//       <Circle size={80} bgColor={color.primary} textColor={color.white} />

//       {/* Title */}
//       <Text style={styles.title}>Sign Up</Text>
//       <Text style={styles.txt}>Create your account</Text>

//       {/* Input Fields */}
//       <CustomInput placeholder="Full Name" />
//       <CustomInput placeholder="Email" />
//       <CustomInput placeholder="Password" secureTextEntry />

//       {/* Button */}
//       <CustomButton
//         title="Sign Up"
//         onPress={() => console.log('Signup pressed')}
//         backgroundColor={color.primary}
//         textColor={color.white}
//       />

//       {/* Already have account */}
//       <Text style={styles.footer}>
//         Already have an account?
//         <TouchableOpacity onPress={() => navigation.navigate('Login' as never)}>
//           <Text style={styles.link}> Login</Text>
//         </TouchableOpacity>
//       </Text>
//     </View>
//   );
// };

// export default Signup;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: color.white,
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingHorizontal: 25,
//   },
//   title: {
//     fontSize: 26,
//     fontFamily: 'Poppins-Bold',
//     color: color.black,
//   },
//   txt: {
//     marginBottom: 100,
//     fontFamily: 'Poppins-Medium',
//   },
//   footer: {
//     marginTop: 20,
//     fontSize: 14,
//     fontFamily: 'Poppins-Regular',
//     color: color.black,
//   },
//   link: {
//     fontFamily: 'Poppins-Bold',
//     color: color.primary,
//   },
// });
