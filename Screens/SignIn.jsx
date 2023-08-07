import { View, Text, StyleSheet, ImageBackground, ScrollView, Dimensions } from 'react-native';
import React from 'react';
import Header from '../components/Header';
import InputField from '../components/InputField';
import CustomButton from '../components/CustomButton';
import Check from '../components/Check';
import SignUp from './SignUp';
import ForgotPassword from './ForgotPassword';
import HeaderButton from '../components/HeaderButton';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import { heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

export default function SignIn({ navigation }) {
  return (
   <KeyboardAwareScrollView>
    <View style={{flex:1, height:hp(100)}}>
      <View style={styles.customHeader}>
        <Text style={styles.headingStyle}>iMEDIC BOT</Text>
        <HeaderButton name='Sign Up' text="Don't have an account?" onPress={()=>{navigation.navigate(SignUp)}}/>
      </View>
      <ImageBackground
        style={styles.mainContainer0}
        resizeMode='stretch'
        source={require('../assets/Image/imedicBot.png')}
      />
      <View style={styles.mainContainer}>
          <Header name="Sign In" />
          <InputField name="email" />
          <InputField name="password" />
          <Check name='Remeber me' />
          <CustomButton name="Login" onPress={() => { navigation.navigate(SignUp) }} />
          <CustomButton name="Forgot password" onPress={() => { navigation.navigate(ForgotPassword) }} />
      </View>
      </View>
      </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  customHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    height: 55,
    alignItems: 'center',
  },
  headingStyle: {
    color: '#00A3FF',
    fontSize: 14,
    fontWeight: '800',
    width: 60
  },
  mainContainer0: {
    height: 275,
    width: 365
  },
  mainContainer: {
    position:'absolute',
    zIndex: 1,
    top:280,
    width:360,
    height:hp(100),
    backgroundColor: '#FFFFFF',
    paddingTop:10,
    borderRadius:20
  }
});
