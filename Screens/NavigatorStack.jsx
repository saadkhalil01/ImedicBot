import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SignIn from './SignIn'
import SignUp from './SignUp'
import ResetPassword from './ResetPassword'
import ForgotPassword from './ForgotPassword'
import React from 'react'
import ChatHistory from './ChatHistory'
import Chat from './Chat'
import UserDetails from './UserDetails'

const Stack = createNativeStackNavigator();

export default function NavigationStack() {
  
  return (
   <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}} >
        <Stack.Screen name='SignIn' component={SignIn}/>
        <Stack.Screen name='SignUp' component={SignUp}/>
        <Stack.Screen name='ForgotPassword' component={ForgotPassword}/>
        <Stack.Screen name='ResetPassword' component={ResetPassword}/>
        <Stack.Screen name='ChatHistory' component={ChatHistory}/>
        <Stack.Screen name='Chat' component={Chat}/>
        <Stack.Screen name='UserDetails' component={UserDetails}/>
     </Stack.Navigator>
   </NavigationContainer>
  )
}