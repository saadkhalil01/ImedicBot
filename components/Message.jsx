import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

export default function Message(props) {
    var hour = new Date().getHours();
    var min = new Date().getMinutes();
    var time =hour+':'+min;

    if (props.bit == '1') {
        return (
            <>
                <View style={styles.MessageDesign}>
                    <Text style={styles.textStyle}>{props.text}</Text>
                </View>
                <Text style={{color:'grey',marginLeft:'auto',marginTop:'1%',marginRight:'7%',fontSize:12}}>{time}</Text>
            </>
        )
    }
    else {
        return (
            <>
               <View style={styles.MessageDesignBot}>
                <Text style={styles.textStyle}>{props.text}</Text>
               </View>
               <Text style={{color:'grey',marginLeft:'7%',marginTop:'1%',marginRight:'auto',fontSize:12}}>{time}</Text>
            </>
           
        )
    }
}
const styles = StyleSheet.create({

    MessageDesign: {
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        marginLeft: 'auto',
        marginRight: '5%',
        marginTop: '2%',
        borderRadius: 15,
        width: 'auto'
    },
    MessageDesignBot: {
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        marginRight: 'auto',
        marginLeft: '5%',
        marginTop: '2%',
        borderRadius: 15,
        maxWidth: 180
    },
    textStyle: {
        color: 'grey',
        fontSize: 15,
        paddingHorizontal: 2,
        textAlign: 'left'
    }
});