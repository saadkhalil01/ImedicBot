import React from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';
import ResetPassword from './ResetPassword';
import ForgotPassword from './ForgotPassword';
import OTP from './OTP';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ChatHistory from './ChatHistory';
import Chat from './Chat';
import UserDetails from './UserDetails';
const Stack = createNativeStackNavigator();

export default function NotAuthStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="OTP" component={OTP} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />

    </Stack.Navigator>
  );
}
