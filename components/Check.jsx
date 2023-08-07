import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native'
import { useState } from 'react';
import React from 'react'

export default function Check({name}) {
  const [toggleCheckBox, setToggleCheckBox] = useState(false)

  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity onPress={()=>setToggleCheckBox(!toggleCheckBox)}>
        
          <Image  style={styles.imageStyle}source={
            toggleCheckBox?
            require('../assets/Image/tick.png'): require('../assets/Image/box.png')
          }/>
   
      </TouchableOpacity>
      <Text style={{color:'grey'}}>{name}</Text>
    </View>
  )

}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft: '5%',
    marginBottom:'5%'
  },
  imageStyle: {
    height: 20,
    width: 20,
    marginRight:10
  }
});