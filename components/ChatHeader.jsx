import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import ChatHistory from '../Screens/ChatHistory';

export default function ChatHeader({ name,onPress}) {
    if (name != 'chat')
        return (
            <View style={styles.HeaderContainer}>
                <Text style={styles.headingStyle}>iMEDIC BOT</Text>
                <Text style={styles.TextStyle}>Your Personalize Health Assistant</Text>
            </View>
        )
    else {
        return (
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={onPress} style={styles.backButton}>
                    <Image style={{ height: 25, width: 25, alignSelf: 'center' }} source={require('../assets/Image/back.png')} />
                </TouchableOpacity>
                <View style={styles.HeaderContainer2}>
                    <Text style={styles.headingStyle}>iMEDIC BOT</Text>
                    <Text style={styles.TextStyle}>Your Personalize Health Assistant</Text>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    HeaderContainer: {
        width: widthPercentageToDP(100),
        height: 60,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom: '2%',
        borderBottomWidth:0.5,
        borderColor:'grey'

    },
    HeaderContainer2: {
        width: widthPercentageToDP(100),
        height: 60,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight:40,
        borderBottomWidth:0.5,
        borderColor:'grey',
        marginBottom: '0%',
    },
    headingStyle: {
        color: '#00A3FF',
        fontSize: 16,
        fontWeight: '800',
        width: 100,
        alignSelf: 'center'
    },
    TextStyle: {
        color: 'grey',
        fontWeight: '500',
        fontSize: 11,
        alignSelf: 'center'
    },
    backButton: {
        paddingLeft:10,
        backgroundColor: '#FFFFFF',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth:0.5,
        borderColor:'grey'
    }
});