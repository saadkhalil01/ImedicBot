import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
const CustomButton =function ({ name, onPress, navigation }) {

    if (name != "Forgot password") {
        return (
            <TouchableOpacity onPress={onPress} style={styles.ButtonContainer}>
                <Text style={styles.ButtonTextDesign}>
                    {name}
                </Text>
            </TouchableOpacity>);
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
const styles=StyleSheet.create({
 ButtonContainer:{
    width:'90%',
    height:60,
    backgroundColor:'#00A3FF',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:15,
    alignSelf:'center',
    marginBottom:'5%'
 },
 ButtonTextDesign:{
    color:'#F8F9FB',
    fontSize:19,
    fontFamily:"Inter.ttf"
},ButtonContainer2:{
    width:'90%',
    height:60,
    backgroundColor:'#F8F9FB',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:15,
    alignSelf:'center'
 },
 ButtonTextDesign2:{
    color:'#00A3FF',
    fontSize:19,
    fontFamily:"Inter.ttf"
}
})
export default CustomButton;