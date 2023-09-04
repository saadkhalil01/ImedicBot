import {createSlice} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { act } from 'react-test-renderer';
import NavigationStack from '../Screens/NavigatorStack';
import SignIn from '../Screens/SignIn';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    isLoggedIn: false,
    email:''
  },
  reducers: {

    setAuth: (state, action) => {
      state.isLoggedIn = action.payload.isLoggedIn;
      state.email = action.payload.email;
      AsyncStorage.setItem('token', action.payload.user.token)
      console.log(action.payload.isLoggedIn);
    },
    purgeAuth: state => {
      state.isLoggedIn = false;
      state.email=''
      AsyncStorage.removeItem('token');
      console.log('purgeAuth')
      //i want to go back to my stack navigator page here and render the isLoggedIn:false stack
    },
  },
});

export const {setAuth, purgeAuth} = userSlice.actions;
export const selectIsLoggedIn = (state) => state.user.isLoggedIn;
export const selectEmail =(state) => state.user.email;
export default userSlice.reducer;
