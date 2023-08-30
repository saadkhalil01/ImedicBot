import {View, Text, StyleSheet, ImageBackground, Alert} from 'react-native';
import React, {useState} from 'react';
import Header from '../components/Header';
import InputField from '../components/InputField';
import CustomButton from '../components/CustomButton';
import Check from '../components/Check';
import SignUp from './SignUp';
import ForgotPassword from './ForgotPassword';
import HeaderButton from '../components/HeaderButton';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import ChatHistory from './ChatHistory';
import axios from 'axios';

export default function SignIn({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  function isEmail(emailAdress) {
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (emailAdress.match(regex)) return true;
    else return false;
  }

  const errorfield = () => {
    Alert.alert('Please fill all fields First!');
  };

  const loginAPI = async (email, password) => {
    try {
      user = {
        email: email,
        password: password,
      };
      await axios
        .post('http://192.168.1.9:8000/api/user/login', {user})
        .then(response => {
          console.log(response.data.message);
          navigation.navigate(ChatHistory);
        })
        .catch(error => {
          console.log(error);
          Alert.alert("Invalid Credentials")
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <KeyboardAwareScrollView>
      <View style={{flex: 1, height: hp(100)}}>
        <View style={styles.customHeader}>
          <Text style={styles.headingStyle}>iMEDIC BOT</Text>
          <HeaderButton
            name="Sign Up"
            text="Don't have an account?"
            onPress={() => {
              navigation.navigate(SignUp);
            }}
          />
        </View>
        <ImageBackground
          style={styles.mainContainer0}
          resizeMode="stretch"
          source={require('../assets/Image/imedicBot.png')}
        />
        <View style={styles.mainContainer}>
          <Header name="Sign In" />
          <InputField name="email" email={email} setEmail={setEmail} />
          <InputField
            name="password"
            password={password}
            setPassword={setPassword}
          />
          <Check name="Remember me" />
          <CustomButton
            name="Login"
            onPress={() => {
              if(isEmail(email)){
              email === '' || password === '' || !email || !password
                ? errorfield()
                : loginAPI(email, password);}
                else{
                  Alert.alert('email format is not valid use "abc@gmail.com" !')
                }
            }}
          />
          <CustomButton
            name="Forgot password"
            onPress={() => {
              navigation.navigate(ForgotPassword);
            }}
          />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  customHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: widthPercentageToDP(4),
    height: hp(10),
    alignItems: 'center',
  },
  headingStyle: {
    color: '#00A3FF',
    fontSize: 14,
    fontWeight: '800',
    width: '20%',
  },
  mainContainer0: {
    position: 'absolute',
    top: 75,
    height: 300,
    width: wp(100),
  },
  mainContainer: {
    top: 250,
    zIndex: 1,
    width: wp(100),
    height: hp(100),
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    marginBottom: 20,
  },
});
