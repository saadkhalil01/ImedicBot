import {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from './SignIn';
import SignUp from './SignUp';
import ResetPassword from './ResetPassword';
import ForgotPassword from './ForgotPassword';
import React from 'react';
import ChatHistory from './ChatHistory';
import Chat from './Chat';
import UserDetails from './UserDetails';
import OTP from './OTP';
import {useDispatch, useSelector} from 'react-redux';
import {selectIsLoggedIn, setAuth} from '../Store/user';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import http from '../Api';

const Stack = createNativeStackNavigator();

export default function NavigationStack() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  //console.log("logged In user\n",isLoggedIn)
  const dispatch = useDispatch();

  const getContext =  () => {
    
      http
        .get('/user/context')
        .then((response)=>setAuth(response.data.data))
        .catch(error => {
          console.log("----------------------------\n",error.message);});
    
  };

  useEffect(() => {
    try {
      AsyncStorage.getItem('token')
        .then(token => {
          console.log(token)
          getContext();
        })
        .catch(error => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="ChatHistory" component={ChatHistory} />
            <Stack.Screen name="Chat" component={Chat} />
            <Stack.Screen name="UserDetails" component={UserDetails} />
          </Stack.Navigator>
        </>
      ) : (
        <>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="OTP" component={OTP} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
            <Stack.Screen name="ResetPassword" component={ResetPassword} />
            <Stack.Screen name="ChatHistory" component={ChatHistory} />
            <Stack.Screen name="Chat" component={Chat} />
            <Stack.Screen name="UserDetails" component={UserDetails} />
          </Stack.Navigator>
        </>
      )}
    </NavigationContainer>
  );
}
