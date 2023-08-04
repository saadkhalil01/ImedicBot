import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import InputField from '../components/InputField';
import CustomButton from '../components/CustomButton';
import Check from '../components/Check';

export default function ResetPassword() {
  return (
    <View style={styles.mainContainer}>
      <Header name="Reset Password" />
      <InputField name="password" />
      <InputField name="confirm password"/>
      <CustomButton name="Login In" />
    </View>
  )
}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-evenly'
  }
});