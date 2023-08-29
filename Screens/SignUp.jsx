import { View, Text, Image, StyleSheet } from 'react-native'
import React, { useState } from 'react';
import Header from '../components/Header'
import InputField from '../components/InputField';
import CustomButton from '../components/CustomButton';
import SignIn from './SignIn';
import HeaderButton from '../components/HeaderButton';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import { heightPercentageToDP as hp, widthPercentageToDP, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import axios from 'axios';

export default function SignUp({ navigation }) {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
  const signUpAPI = (email,password) => {
    
    axios.post("http://192.168.1.3:8000/api/user/signup", {
      email: email,
      password: password
    })
      .then((response) => {
        console.log(response.data.message);
      })
      .catch((error) => {
        console.log('Axios error:', error);
      });
    
} 

  return (
    <KeyboardAwareScrollView>
      <View style={{ flex: 1, height: hp(100) }}>
        <View style={styles.customHeader}>
          <Text style={styles.headingStyle}>iMEDIC BOT</Text>
          <HeaderButton name='Sign In' text='Already have an account?' onPress={() => { navigation.navigate(SignIn) }} />
        </View>
        <Image style={styles.mainContainer0} resizeMode='stretch'
          source={require('../assets/Image/imedicBot.png')} />
        <View style={styles.mainContainer}>
          <Header name="Sign Up" />
          <InputField name="email" email={email} setEmail={setEmail}  />
          <InputField name="password" password={password} setPassword={setPassword}  />
          <InputField name="confirm password" password={password} setPassword={setPassword}/>
          <CustomButton name="Sign Up" onPress={() => {signUpAPI(email,password)}} />
        </View>
      </View>
    </KeyboardAwareScrollView>

  )
}
const styles = StyleSheet.create({

  customHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: widthPercentageToDP(4),
    height: hp(10),
    alignItems: 'center'
  },
  headingStyle: {
    color: '#00A3FF',
    fontSize: 14,
    fontWeight: '800',
    width: '20%'
  },
  mainContainer0: {
    position: 'absolute',
    top: 75,
    height: 300,
    width: wp(100)
  },
  mainContainer: {
    top: 250,
    zIndex: 1,
    width: wp(100),
    height: hp(100),
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    marginBottom: 20
  }
});