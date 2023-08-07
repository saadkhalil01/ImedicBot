import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SignIn from './SignIn'
import SignUp from './SignUp'
import ResetPassword from './ResetPassword'
import ForgotPassword from './ForgotPassword'
import React from 'react'

const Stack = createNativeStackNavigator();

export default function NavigationStack() {
  
  return (
   <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}} >
        <Stack.Screen name='SignIn' component={SignIn}/>
        <Stack.Screen name='SignUp' component={SignUp}/>
        <Stack.Screen name='ForgotPassword' component={ForgotPassword}/>
        <Stack.Screen name='ResetPassword' component={ResetPassword}/>
     </Stack.Navigator>
   </NavigationContainer>
  )
}