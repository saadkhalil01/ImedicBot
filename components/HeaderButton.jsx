import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

export default function HeaderButton({ name,text,onPress }) {
    return (
        <View style={styles.LeftBox}>
            <Text style={{ color: 'grey', fontSize: 12, width:70 }}>{text}</Text>
            <TouchableOpacity onPress={onPress} style={styles.buttonStyle}>
                <Text style={{ color: '#FFFFFF', fontSize: 13 ,alignSelf:'center'}}>{name}</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    LeftBox: {
        flexDirection: 'row', 
        justifyContent: 'flex-end',
        alignItems:'center',
        width:'55%'
    },
    buttonStyle: {
        padding: 10,
        height:'100%',
        width:'40%',
        alignItems: 'center',
        backgroundColor: '#00A3FF',
        borderRadius: 10,
        marginLeft:3
    },
});