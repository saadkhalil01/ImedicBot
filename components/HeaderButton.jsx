import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

export default function HeaderButton({ name,text,onPress }) {
    return (
        <View style={styles.LeftBox}>
            <Text style={{ color: 'grey', fontSize: 12, marginLeft: 5 }}>{text}</Text>
            <TouchableOpacity onPress={onPress} style={styles.buttonStyle}>
                <Text style={{ color: '#FFFFFF', fontSize: 14 }}>{name}</Text>
            </TouchableOpacity>

        </View>
    )
}
const styles = StyleSheet.create({
    LeftBox: {
        flexDirection: 'row', 
        width: 120, 
        justifyContent: 'space-between',
        alignSelf:'center',
        marginEnd:'10%'
    },
    buttonStyle: {
        padding: 5,
        width: 65,
        alignItems: 'center',
        backgroundColor: '#00A3FF',
        borderRadius: 10
    },
});