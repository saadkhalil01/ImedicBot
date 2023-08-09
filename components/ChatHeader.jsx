import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import ChatHistory from '../Screens/ChatHistory';
import UserDetails from '../Screens/UserDetails';

export default function ChatHeader({ name, onPress,navigation }) {
    if (name != 'chat')
        return (
            <View style={{ flexDirection: 'row' }}>
                <View style={styles.HeaderContainer}>
                    <Text style={styles.headingStyle}>iMEDIC BOT</Text>
                    <Text style={styles.TextStyle}>Your Personalize Health Assistant</Text>
                </View>
                <View style={styles.userIconContainer}>
                    <TouchableOpacity onPress={onPress}>
                        <Image style={styles.imageDesign2} source={require('../assets/Image/account.png')} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    else {
        return (
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={onPress} style={styles.backButton}>
                    <Image style={styles.imageDesign} source={require('../assets/Image/back.png')} />
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
        width: widthPercentageToDP(80),
        height: heightPercentageToDP(10),
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems:'center',
        paddingLeft:widthPercentageToDP(20),
        marginBottom: '2%',
        borderBottomWidth: 0.5,
        borderColor: 'grey'

    },
    HeaderContainer2: {
        width: widthPercentageToDP(100),
        height: heightPercentageToDP(10),
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 40,
        borderBottomWidth: 0.5,
        borderColor: 'grey',
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
        paddingLeft: 10,
        backgroundColor: '#FFFFFF',
        height: heightPercentageToDP(10),
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 0.5,
        borderColor: 'grey'
    },
    imageDesign: {
        height: 25,
        width: 25,
        alignSelf: 'center'
    }
    ,
    imageDesign2: {
        height: 30,
        width: 30,
        alignSelf: 'center'
    },
    userIconContainer: {
        width: widthPercentageToDP(20),
        height: heightPercentageToDP(10),
        borderBottomWidth: 0.5,
        borderColor: 'grey',
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
    }
});