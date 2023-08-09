import { useRef } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { heightPercentageToDP } from "react-native-responsive-screen";

const CustomButton = function ({ name, onPress, navigation }) {
    const refRBSheet = useRef();
    if (name != "Forgot password") {
        return (
            <>
                <TouchableOpacity onPress={onPress} style={styles.ButtonContainer}>
                    <Text style={styles.ButtonTextDesign}>
                        {name}
                    </Text>
                </TouchableOpacity>
            </>)
    }
    else {
        return (
            <TouchableOpacity onPress={onPress} style={styles.ButtonContainer2}>
                <Text style={styles.ButtonTextDesign2}>
                    {name}
                </Text>
            </TouchableOpacity>
        );
    }
}
const styles = StyleSheet.create({
    ButtonContainer: {
        width: '40%',
        height: 50,
        backgroundColor: '#00A3FF',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        alignSelf: 'center',
        marginBottom: heightPercentageToDP(2)
    },
    ButtonTextDesign: {
        color: '#F8F9FB',
        fontSize: 14,
        fontFamily: "Inter.ttf"
    }, ButtonContainer2: {
        width: '40%',
        height: 50,
        backgroundColor: '#F8F9FB',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        alignSelf: 'center'
    },
    ButtonTextDesign2: {
        color: '#00A3FF',
        fontSize: 14,
        fontFamily: "Inter.ttf"
    },

})
export default CustomButton;