import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import InputField from '../components/InputField';
import CustomButton from '../components/CustomButton';
import Check from '../components/Check';

export default function SignIn() {
  return (
    <View style={styles.mainContainer}>
      <Header name="Sign In"/>
      <InputField name="Login"/>
      <InputField name="password"/>
      <Check/>
      <CustomButton name="Login"/>
      <CustomButton name="Forgot password"/>
    </View>
  )
}
const styles = StyleSheet.create({
  mainContainer:{
    flex:1,
    flexDirection:'column',
    backgroundColor:'#FFFFFF',
    justifyContent:'space-evenly'
  }
});