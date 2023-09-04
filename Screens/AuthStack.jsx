import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ChatHistory from './ChatHistory';
import Chat from './Chat';
import UserDetails from './UserDetails';

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="ChatHistory" component={ChatHistory} />
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="UserDetails" component={UserDetails} />
    </Stack.Navigator>
  );
}
