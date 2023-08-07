import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Header({name}) {
  return (
    <View style={styles.HeaderContainer}>
      <Text style={styles.TextStyle}>{name}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
 HeaderContainer:{
    width:'90%',
    height:60,
    backgroundColor:'#FFFFFF',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:15,
    alignSelf:'center',
    marginBottom:'2%'
},
 TextStyle:{
    color:'#313D5B',
    fontWeight:'500',
    fontSize:30,
    alignSelf:'flex-start'
 }
});