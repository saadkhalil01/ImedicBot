import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import React, {useState} from 'react';
import Header from '../components/Header';
import InputField from '../components/InputField';
import CustomButton from '../components/CustomButton';
import SignUp from './SignUp';
import HeaderButton from '../components/HeaderButton';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import ChatHistory from './ChatHistory';
import axios from 'axios';
import ResetPassword from './ResetPassword';
import http from '../Api';

export default function OTP({route, navigation}) {
  const [otp, setOtp] = useState('');
  const {email,type} = route.params;

  const verifyOTP =  (email,type) => {
    http
      .post(`/user/otp/verify/${type}`, {
        email: email,
        otp: otp,
      })
      .then(response => {
        obj = response.data.data;
        console.log(obj.resetPasswordToken);
        (type == 1)
          ? navigation.navigate('ChatHistory')
          : navigation.navigate('ResetPassword', {
              email: email,
              resetPasswordToken: obj.resetPasswordToken,
            });
      })
      .catch(error => {
        console.log('Axios error:', error);
      });
  };

  const resendOtp = (email) => {
    http
      .post(`/user/resend/otp/${email}`)
      .then(response => {
        console.log(response.data.message);
      })
      .catch(error => {
        console.log('Axios Error: ', error.message);
      });
  };

  return (
    <KeyboardAwareScrollView>
      <View style={{flex: 1, height: hp(100), backgroundColor: 'white'}}>
        <View style={styles.customHeader}>
          <Text style={styles.headingStyle}>iMEDIC BOT</Text>
        </View>
        <ImageBackground
          style={styles.mainContainer0}
          resizeMode="stretch"
          source={require('../assets/Image/imedicBot.png')}
        />
        <View style={styles.mainContainer}>
          <Header name="OTP" />
          <InputField name="One Time Password" otp={otp} setOtp={setOtp} />
          <CustomButton
            name="Enter"
            onPress={() => {
             verifyOTP(email,type);
            }}
          />
          <CustomButton
            name="Resend"
            onPress={() => {
              resendOtp(email);
            }}
          />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}
const styles = StyleSheet.create({
  customHeader: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: wp(4),
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
    backgroundColor: 'white',
    borderRadius: 20,
    marginBottom: 20,
  },
});
