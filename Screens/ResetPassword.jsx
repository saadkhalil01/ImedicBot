import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useRef } from 'react'
import Header from '../components/Header'
import InputField from '../components/InputField';
import CustomButton from '../components/CustomButton';
import SignIn from './SignIn';
import SignUp from './SignUp';
import HeaderButton from '../components/HeaderButton';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import { heightPercentageToDP, heightPercentageToDP as hp, widthPercentageToDP, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import RBSheet from "react-native-raw-bottom-sheet";
import { Gesture } from 'react-native-gesture-handler';

export default function ResetPassword({ navigation }) {

  const refRBSheet = useRef();

  return (
    <KeyboardAwareScrollView >
      <View style={{ flex: 1, height: hp(100) }}>
        <View style={styles.customHeader}>
          <Text style={styles.headingStyle}>iMEDIC BOT</Text>
          <HeaderButton
            name='Sign In'
            text="                         "
            onPress={() => { navigation.navigate(SignIn) }} />
        </View>
        <Image style={styles.mainContainer0}
          resizeMode='stretch'
          source={require('../assets/Image/imedicBot.png')} />
        <View style={styles.mainContainer}>
          <Header name="Reset Password" />
          <InputField name="password" />
          <InputField name="confirm password" />
          <CustomButton name="Continue"
            onPress={() => { refRBSheet.current.open() }} />
        </View>
      </View>
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        animationType='fade'
        height={300}
        customStyles={{
          wrapper: {
            backgroundColor: "rgba(0,0,0,0.2)"
          },
          container: {
            backgroundColor: '#F0F3F7',
            borderTopLeftRadius: 21,
            borderTopRightRadius: 21,
          },
          draggableIcon: {
            backgroundColor: 'grey',
            width: 70,
          }
        }}
      >
        <View style={styles.popUpDesign} >
          <Image style={{ height: 70, width: 70, marginBottom: 20 }} source={require('../assets/Image/party-popper.png')} />
          <Text style={{ color: 'grey', fontSize: 16, textAlign: 'center' }}>
            You have Successfully Register yourself with iMedicBot
          </Text>
        </View>
      </RBSheet>
    </KeyboardAwareScrollView>

  )
}
const styles = StyleSheet.create({
  customHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: widthPercentageToDP(4),
    height: hp(10),
    alignItems: 'center'
  },
  headingStyle: {
    color: '#00A3FF',
    fontSize: 14,
    fontWeight: '800',
    width: '20%'
  },
  mainContainer0: {
    position: 'absolute',
    top: 75,
    height: 300,
    width: wp(100)
  },
  mainContainer: {
    top: 250,
    zIndex: 1,
    width: wp(100),
    height: hp(100),
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    marginBottom: 20
  },
  popUpDesign: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: heightPercentageToDP(100),
    width: widthPercentageToDP(100),
    paddingHorizontal: '10%',
    paddingVertical: '20%'
  }
});