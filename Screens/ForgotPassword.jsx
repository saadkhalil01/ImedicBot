import {View, Text, StyleSheet, Image} from 'react-native';
import React, {useState} from 'react';
import Header from '../components/Header';
import InputField from '../components/InputField';
import CustomButton from '../components/CustomButton';
import OTP from './OTP';
import HeaderButton from '../components/HeaderButton';
import SignUp from './SignUp';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import axios from 'axios';
import http from '../Api';

export default function ForgotPassword({navigation}) {
  const [email, setEmail] = useState('');

  const ForgotPass = async () => {
    try {
      const response = await http.post("/user/forgot/email", {
        email: email
      });

      console.log(response.data.message);
      navigation.navigate('OTP', { email: email ,type:2});
    } catch (error) {
      console.log('Axios error:', error);
    }
  }

  return (
    <KeyboardAwareScrollView>
      <View style={{flex: 1, height: hp(100)}}>
        <View style={styles.customHeader}>
          <Text style={styles.headingStyle}>iMEDIC BOT</Text>
          <HeaderButton
            name="Sign Up"
            text="Don't have an account?"
            onPress={() => {
              navigation.navigate(SignUp);
            }}
          />
        </View>
        <Image
          style={styles.mainContainer0}
          resizeMode="stretch"
          source={require('../assets/Image/imedicBot.png')}
        />
        <View style={styles.mainContainer}>
          <Header name="Forgot your Password!" />
          <InputField name="email" email={email} setEmail={setEmail}  />
          <CustomButton
            name="Request"
            onPress={() => {
              ForgotPass(email)
            }}
          />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}
const styles = StyleSheet.create({
  customHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: widthPercentageToDP(4),
    height: hp(10),
    alignItems: 'center',
  },
  headingStyle: {
    color: '#00A3FF',
    fontSize: 14,
    fontWeight: '800',
    width: '20%',
  },
  mainContainer0: {
    position: 'absolute',
    top: 75,
    height: 300,
    width: wp(100),
  },
  mainContainer: {
    top: 250,
    zIndex: 1,
    width: wp(100),
    height: hp(100),
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    marginBottom: 20,
  },
});
