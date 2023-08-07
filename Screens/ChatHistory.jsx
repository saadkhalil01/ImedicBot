import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import ChatHeader from '../components/ChatHeader';

export default function ChatHistory() {
    return (
        <> 
            <ChatHeader name='chathistory'/>
            <View style={styles.bottomContainer}>
                <View style={styles.buttonDesign}>
                    <TouchableOpacity>
                        <Text style={styles.buttonText}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    buttonDesign: {
        position:'absolute',
        top:'80%',
        left:'70%',
        height: 40,
        width: 40,
        backgroundColor: '#00A3FF',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        margin: '5%'
    },
    bottomContainer: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline'
    },
    buttonText: {
        color: 'white',
        fontSize: 32,
        alignSelf: 'center'
    }
});