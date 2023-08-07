import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import InputField from '../components/InputField';
import CustomButton from '../components/CustomButton';
import SignIn from './SignIn';
import SignUp from './SignUp';
import HeaderButton from '../components/HeaderButton';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';


export default function ResetPassword({ navigation }) {
  return (
    <KeyboardAwareScrollView >
      <View style={{ flex: 1, height: hp(100) }}>
        <View style={styles.customHeader}>
          <Text style={styles.headingStyle}>iMEDIC BOT</Text>
          <HeaderButton
            name='Sign In'
            text="                         "
            onPress={() => { navigation.navigate(SignIn) }} />
        </View>
        <Image style={styles.mainContainer0}
          resizeMode='stretch'
          source={require('../assets/Image/imedicBot.png')} />
        <View style={styles.mainContainer}>
          <Header name="Reset Password" />
          <InputField name="password" />
          <InputField name="confirm password" />
          <CustomButton name="Login In" onPress={() => { navigation.navigate(SignIn) }} />
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
    position: 'absolute',
    top: 55,
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