import { View, Image, TextInput, StyleSheet,TouchableWithoutFeedback, secureTextEntry, Alert } from 'react-native'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import { useState } from 'react';
import React from 'react'

export default function InputField({ name }) {
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
                onChangeText={setInput}
                value={input}
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
    else{
        return(
            <View style={styles.mainContainer}>
            <TextInput style={styles.TextStyle}
                placeholder={name}
                placeholderTextColor='grey'
                onChangeText={setInput}
                value={input}
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
        marginBottom:'5%'
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