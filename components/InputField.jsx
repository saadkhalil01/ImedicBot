import { View, Image,TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import { useState } from 'react';
import React from 'react'

export default function InputField({ name }) {
    const [eye,setEye] = useState(true);

    return (
        
            <TextInput style={styles.mainContainer}
                placeholder={name}
                placeholderTextColor='grey'
            />
            // <TouchableOpacity onPress={()=>setEye(!eye)}>
            //     <Image style={styles.imageShape }
            //     source={
            //         name==='password' || name ==='confirm password'?
            //           require('..\assets\Image\eye.png')
            //         :
            //           require('..\assets\Image\closeEye.jpeg')    
            //     }/>
            // </TouchableOpacity>    
        
    )
}
const styles = StyleSheet.create({
    mainContainer: {
        width: '90%',
        height: 60,
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        alignSelf: 'center',
        elevation: 2,
        paddingLeft: 20,
        justifyContent:'space-between'
    },
    imageShape:{
        height:40,
        width:40
    }

});