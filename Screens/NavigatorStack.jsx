import { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from './SignIn';
import SignUp from './SignUp';
import ResetPassword from './ResetPassword';
import ForgotPassword from './ForgotPassword';
import React from 'react';
import ChatHistory from './ChatHistory';
import Chat from './Chat';
import UserDetails from './UserDetails';
import OTP from './OTP';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn, setAuth } from '../Store/user';
import AsyncStorage from '@react-native-async-storage/async-storage';
import http from '../Api';

const Stack = createNativeStackNavigator();

export default function NavigationStack() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    const getContext = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        if (token) {
          http
            .get('/user/context')
            .then((response) => {
              // Assuming response.data.data contains user data and a token property
              const userContext = response.data.data;
              dispatch(setAuth({ isLoggedIn: true, user: { token, ...userContext } }));
            })
            .catch((error) => {
              console.log('Error fetching user context:', error.message);
            });
        }
      } catch (error) {
        console.log('Error fetching token from AsyncStorage:', error);
      }
    };

    getContext();
  }, [dispatch]);

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="ChatHistory" component={ChatHistory} />
            <Stack.Screen name="Chat" component={Chat} />
            <Stack.Screen name="UserDetails" component={UserDetails} />
          </Stack.Navigator>
        </>
      ) : (
        <>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
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
