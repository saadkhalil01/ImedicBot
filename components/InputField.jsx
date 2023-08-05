import { View, Image, TextInput, StyleSheet, TouchableWithoutFeedback, secureTextEntry, Alert } from 'react-native'
import { useState } from 'react';
import React from 'react'

export default function InputField({ name }) {
    const [eye, setEye] = useState(false);
    const [input, setInput] = useState('');
    const [hide, Show] = useState(true);

    return (
        <>
          <View style={styles.mainContainer}>
            <TextInput style={styles.TextStyle}
                placeholder={name}
                placeholderTextColor='black'
                onChangeText={setInput}
                value={input}
                secureTextEntry={hide}
            />
            <TouchableWithoutFeedback onPress={() => {setEye(!eye);Show(!hide)}}>
                <Image style={styles.imageShape}
                    source={
                        ((name === 'password' || name === 'confirm password') && eye === true) ?
                            require('../assets/Image/eye.png')
                            :
                            require('../assets/Image/closeEye.png')
                    } />
            </TouchableWithoutFeedback>
         </View>
        </>
    )
}
const styles = StyleSheet.create({
    mainContainer: {
        width: '80%',
        height: 60,
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        alignSelf: 'center',
        elevation: 2,
        padding: 10,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    imageShape: {
        height: 25,
        width: 25
    },
    TextStyle: {
        color: 'black',
    }

});