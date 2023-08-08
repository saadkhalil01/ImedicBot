import { View, Text, StyleSheet, ScrollView, TextInput, Image, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import ChatHeader from '../components/ChatHeader'
import Message from '../components/Message'
import ChatHistory from './ChatHistory'
import { widthPercentageToDP } from 'react-native-responsive-screen'

export default function Chat({ navigation }) {
  return (
    <>
      <ChatHeader name='chat' onPress={() => { navigation.navigate(ChatHistory) }} />
      <ScrollView style={styles.ChatDesign}>
        <Message text='Hi' bit='1' />
        <Message text='Hi, how may i help you?' bit='0' />
        <Message text='I am feeling sick' bit='1' />
        <Message text='Can you provide me more information about your symptoms?' bit='0' />
        <Message text='Noo' bit='1' />
        <Message text='Why?' bit='0' />
        <Message text='I said noo' bit='1' />
        <Message text='Cannot understand you :(' bit='0' />
        <Message text='bye :)' bit='1' />
        <Message text='If any thing i can do let me know bye' bit='0' />
      </ScrollView>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor:'#FFFFFF'
      }}>
        <TextInput
          placeholder='Type your message'
          placeholderTextColor='grey'
          style={styles.inputDesign}
        />
        <TouchableOpacity>
        <Image style={{backgroundColor:'#FFFFFF',height:50,width:50,marginRight:20}} source={require('../assets/Image/send.png')} />
        </TouchableOpacity>
      </View>

    </>
  )
}
const styles = StyleSheet.create({
  inputDesign: {
    height: 55,
    width:widthPercentageToDP(80),
    backgroundColor: '#FFFFFF',
    marginTop: 10,
    padding: 20,
    color:'black'
  },
  ChatDesign: {
    flex: 1,
    backgroundColor: '#F0F3F7',
  }
});