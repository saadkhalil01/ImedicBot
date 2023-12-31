import { View, Image, TextInput, StyleSheet,TouchableWithoutFeedback, secureTextEntry, Alert } from 'react-native'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import { useState } from 'react';
import React from 'react'
import { heightPercentageToDP } from 'react-native-responsive-screen';

export default function InputField({ name,email,password,setPassword,setEmail,otp,setOtp }) {
    const [eye, setEye] = useState(false);
    const [input, setInput] = useState('');
    const [hide, Show] = useState(true);

    if(name === 'password' || name === 'confirm password'){
        return (
        <>
          <View style={styles.mainContainer}>
            <TextInput style={styles.TextStyle}
                placeholder={name}
                placeholderTextColor='grey'
                onChangeText={(val)=>{setPassword(val)}}
                value={password}
                secureTextEntry={hide}
            />
            <TouchableWithoutFeedback onPress={() => {setEye(!eye);Show(!hide)}}>
                <Image style={styles.imageShape}
                    source={
                        (eye === true) ?
                            require('../assets/Image/view.png')
                            :
                            require('../assets/Image/hide.png')
                    } />
            </TouchableWithoutFeedback>
         </View>
        </>
    )}
    else if(name==='email'){
        return(
            <View style={styles.mainContainer}>
            <TextInput style={styles.TextStyle}
                placeholder={name}
                placeholderTextColor='grey'
                onChangeText={(val)=>{setEmail(val)}}
                value={email}
            />
            </View>
        )
    }
    else{
        return(
            <View style={styles.mainContainer}>
            <TextInput style={styles.TextStyle}
                placeholder={name}
                placeholderTextColor='grey'
                keyboardType='number-pad'
                onChangeText={(val)=>{setOtp(val)}}
                value={otp}
            />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    mainContainer: {
        width: '90%',
        height: 60,
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        alignSelf: 'center',
        elevation: 2,
        padding: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom:heightPercentageToDP(2)
    },
    imageShape: {
        height: 25,
        width: 25
    },
    TextStyle: {
        width: '90%',
        height: 60,
        color: 'black',
    }

});