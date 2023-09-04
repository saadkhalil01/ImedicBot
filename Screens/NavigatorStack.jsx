import {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setAuth} from '../Store/user';
import AsyncStorage from '@react-native-async-storage/async-storage';
import http from '../Api';
import AuthStack from './AuthStack';
import NotAuthStack from './NotAuthStack';

export default function NavigationStack() {
  const user = useSelector(state => state.user.value);
  const dispatch = useDispatch();

  const getContext = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        
        http
          .get('/user/context')
          .then(response => {
              const user = response.data.data.user;
              console.log('stackNavigator ka response', user.email);
              dispatch(setAuth(user, user.email));
            
          })
          .catch(error => {
            console.log('Error fetching user context:', error.message);
          });
      } else {
        console.log('ojjjjj');
      }
    } catch (error) {
      console.log('Error fetching token from AsyncStorage:', error);
    }
  };

  useEffect(() => {
    getContext();
  }, []);

  return (
    <NavigationContainer>
      {user ? <AuthStack /> : <NotAuthStack />}
    </NavigationContainer>
  );
}
