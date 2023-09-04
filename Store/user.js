import {createSlice} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    isLoggedIn: false,
  },
  reducers: {
    setAuth: (state, action) => {
      state.isLoggedIn = action.payload.isLoggedIn;
      AsyncStorage.setItem('token', action.payload.user.token)
      console.log(action.payload.isLoggedIn);
    },
    purgeAuth: state => {
      state.isLoggedIn = false;
      AsyncStorage.removeItem('token');
      console.log('purgeAuth')
    },
  },
});

export const {setAuth, purgeAuth} = userSlice.actions;
export const selectIsLoggedIn = (state) => state.user.isLoggedIn;
export default userSlice.reducer;
