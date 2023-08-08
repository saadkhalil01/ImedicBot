import { View, ScrollView, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'
import ChatHeader from '../components/ChatHeader';
import Chat from './Chat';
import { heightPercentageToDP } from 'react-native-responsive-screen';

export default function ChatHistory({ navigation }) {

    //mutualable list for rendernig data from list to useState list 
    const [dataList, setDataList] = useState([]);
    const [count,setCount] = useState(0);

    function addListItem(item) {
        setDataList(prevItem => [...prevItem, item]);
        setCount(count+1);
    }

    function ChatComponent(props) {
        return (
            <TouchableOpacity onPress={() => { navigation.navigate(Chat) }} style={styles.chatcomponentshape}>
                <Image style={{ width: 25, marginRight: 5 }} source={require('../assets/Image/sestoscope.png')} />
                <Text style={{ color: 'grey', fontSize: 20, width: 250, marginLeft: 4 }}>{props.text}</Text>
                <Image source={require('../assets/Image/trash.png')} />
            </TouchableOpacity>
        )
    }

    return (
        <View style={{ flex: 1 }}>
            <ChatHeader name='chatHitory' />
            <ScrollView style={styles.historyDesign}>
                {dataList.map((item, index) => (
                    <ChatComponent key={index} text={item}/>
                ))}
            </ScrollView>
            <View style={styles.bottomContainer}>
                <View style={styles.buttonDesign}>
                    <TouchableOpacity onPress={() => {(count%2==0)?addListItem('Assit with user request..'):addListItem('A random chat with bot.')}}>
                        <Text style={styles.buttonText}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    buttonDesign: {
        position: 'absolute',
        top: '2%',
        left: '70%',
        height: 40,
        width: 40,
        backgroundColor: '#00A3FF',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        margin: '5%'
    },
    historyDesign: {
        flex: 1,
        backgroundColor: '#F0F3F7'
    },
    bottomContainer: {
        height: heightPercentageToDP(15),
        backgroundColor: '#F0F3F7',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontSize: 32
    },
    chatcomponentshape: {
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        height: heightPercentageToDP(9),
        marginBottom: 12,
        marginHorizontal: 12,
        borderRadius: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        elevation: 1,
        padding: 10
    }
});