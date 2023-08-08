import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Header({ name }) {

  if (name != 'Forgot your Password!') {
    return (
      <View style={styles.HeaderContainer}>
        <Text style={styles.TextStyle}>{name}</Text>
      </View>
    )
  }
  else {
    return (
      <View style={styles.HeaderContainer2}>
        <Text style={styles.TextStyle2}>{name}</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  HeaderContainer: {
    width: '90%',
    height: 60,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    alignSelf: 'center',
    marginBottom: '2%',
  },
  TextStyle: {
    color: '#313D5B',
    fontWeight: '500',
    fontSize: 30,
    alignSelf: 'flex-start',
  },
  HeaderContainer2: {
    width: '90%',
    height: 120,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    alignSelf: 'center',
    marginBottom: '2%',
  },
  TextStyle2: {
    color: '#313D5B',
    fontWeight: '500',
    fontSize: 30,
    alignSelf: 'flex-start',
  }

});