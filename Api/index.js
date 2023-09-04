import axios from 'axios';
import {environment} from '../constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

axios.defaults.baseURL = 'http://192.168.1.28:8000/api';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.timeout = 10000;

try {
  AsyncStorage.getItem('token')
    .then(token => {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    })
    .catch(error => {
      console.log(error);
    });
} catch (err) {
  console.log(err);
}

const http = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  refreshToken: token => {
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
  },
};

export default http;
