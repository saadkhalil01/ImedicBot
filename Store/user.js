import {createSlice} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    value: null,
    email:''
  },
  reducers: {
    setAuth: (state, action) => {
      state.value = action.payload;
      state.email = action.payload.email;
      AsyncStorage.setItem('token', action.payload.token);
      console.log("setAuth call honay ky bd",state.value)
    },
    purgeAuth: state => {
      state.value = null;
      state.email='';
      AsyncStorage.removeItem('token');
      console.log("purgeAuth call honay ky bd",state.value)
    },
  },
});

export const {setAuth, purgeAuth} = userSlice.actions;
export default userSlice.reducer;
