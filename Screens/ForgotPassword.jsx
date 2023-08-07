import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import InputField from '../components/InputField';
import CustomButton from '../components/CustomButton';
import ResetPassword from './ResetPassword';
import HeaderButton from '../components/HeaderButton';
import SignUp from './SignUp';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

export default function ForgotPassword({ navigation }) {
  return (
    <KeyboardAwareScrollView >
    <View style={{ flex: 1, height: hp(100) }}>
      <View style={styles.customHeader}>
        <Text style={styles.headingStyle}>iMEDIC BOT</Text>
        <HeaderButton name='Sign Up' text="Don't have an account?" onPress={() => { navigation.navigate(SignUp) }} />
      </View>
      <Image style={styles.mainContainer0} resizeMode='stretch'
        source={require('../assets/Image/imedicBot.png')} />
      <View style={styles.mainContainer}>
        <Header name="Forgot your Password!" />
        <InputField name="Email Address" />
        <CustomButton name="Request" onPress={() => { navigation.navigate(ResetPassword) }} />
      </View>
    </View>
    </KeyboardAwareScrollView>
  )
}
const styles = StyleSheet.create({
  headingStyle: {
    color: '#00A3FF',
    fontSize: 14,
    fontWeight: '800',
    width: 60
  },
  customHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    height: 55,
    alignItems: 'center',
  },
  mainContainer0: {
    height: 275,
    width: 365
  },
  mainContainer: {
    position: 'absolute',
    top: 300,
    width: 360,
    height: 670,
    backgroundColor: '#FFFFFF',
    paddingTop: 10,
    borderRadius: 20

  }
});