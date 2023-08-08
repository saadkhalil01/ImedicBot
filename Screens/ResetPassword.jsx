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
  customHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: hp(10),
    alignItems: 'center',
    paddingLeft:'5%',
    paddingRight:'10%'
  },
  headingStyle: {
    color: '#00A3FF',
    fontSize: 14,
    fontWeight: '800',
    width:'20%'
  },
  mainContainer0: {
    position:'absolute',
    top:75,
    height: 300,
    width: wp(100)
  },
  mainContainer: {
    top:250,
    zIndex: 1,
    width:wp(100),
    height:hp(100),
    backgroundColor: '#FFFFFF',
    borderRadius:20,
    marginBottom:20
  }
});