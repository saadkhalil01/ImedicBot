import {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {selectIsLoggedIn, setAuth} from '../Store/user';
import AsyncStorage from '@react-native-async-storage/async-storage';
import http from '../Api';
import AuthStack from './AuthStack';
import NotAuthStack from './NotAuthStack';

const Stack = createNativeStackNavigator();

export default function NavigationStack(props) {
  const [render, setRender] = useState(false);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  const getContext = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        http
          .get('/user/context')
          .then(response => {
            setRender(true);
            const userContext = response.data.data;
            console.log(userContext)
            dispatch(
              setAuth({
                isLoggedIn: true,
                email: userContext.user.email,
                user: {token, ...userContext},
              }),
            );
          })
          .catch(error => {
            console.log('Error fetching user context:', error.message);
          });
      } else {
        setRender(false);
      }
    } catch (error) {
      console.log('Error fetching token from AsyncStorage:', error);
    }
  };

  useEffect(() => {
    console.log(isLoggedIn)
    getContext();
  }, []);

  return (
    <NavigationContainer>
      {isLoggedIn ? <AuthStack /> : <NotAuthStack />}
    </NavigationContainer>
  );
}
