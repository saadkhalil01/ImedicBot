import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

export default function InputField({name}) {
  return (
    <TextInput style={styles.mainContainer}
      placeholder={name}
      placeholderTextColor='grey'
    />
  )
}
const styles = StyleSheet.create({
    mainContainer:{
        width:'90%',
        height:60,
        backgroundColor:'#FFFFFF',
        borderRadius:15,
        alignSelf:'center',
        elevation:2,
        paddingLeft:20

    }

});