import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {Image} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import ChatHistory from './ChatHistory';
import {purgeAuth, selectEmail} from '../Store/user';
import {useDispatch, useSelector} from 'react-redux';
import NavigationStack from './NavigatorStack';
import SignIn from './SignIn';
import NotAuthStack from './NotAuthStack';

export default function UserDetails({route,navigation}) {
  const dispatch = useDispatch();
  const name = useSelector(selectEmail);
  console.log(name)
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(ChatHistory);
        }}
        style={styles.backButton}>
        <Image
          style={styles.upparbackbutton}
          source={require('../assets/Image/back.png')}
        />
      </TouchableOpacity>
      <View style={styles.mainCard}>
        <View style={styles.imageCircled}>
          <Image
            style={styles.imageDesign}
            source={require('../assets/Image/download.jpeg')}
          />
        </View>
        <View style={styles.iconsContainer}>
          <Text style={{color: 'black', fontSize: 18, fontWeight: '600'}}>
            {name}
          </Text>
          <View style={styles.seperator} />
          <View style={styles.iconPlusTextContainer}>
            <Image
              style={styles.iconDesign}
              source={require('../assets/Image/facebook.png')}
            />
            <Text style={styles.iconText}> facebook </Text>
          </View>
          <View style={styles.iconPlusTextContainer}>
            <Image
              style={styles.iconDesign}
              source={require('../assets/Image/github.png')}
            />
            <Text style={styles.iconText}> github </Text>
          </View>
          <View style={styles.iconPlusTextContainer}>
            <Image
              style={styles.iconDesign}
              source={require('../assets/Image/pinterest.png')}
            />
            <Text style={styles.iconText}> pinterest </Text>
          </View>
          <View style={styles.iconPlusTextContainer}>
            <Image
              style={styles.iconDesign}
              source={require('../assets/Image/twitter.png')}
            />
            <Text style={styles.iconText}> twitter </Text>
          </View>
          <View style={styles.seperator} />
          <TouchableOpacity
            onPress={() => {
              dispatch(purgeAuth());
            }}>
            <View style={styles.iconPlusTextContainer}>
              <Image
                style={styles.iconDesign}
                source={require('../assets/Image/logout.png')}
              />
              <Text style={styles.iconText}>Logout</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F0F3F7',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  mainCard: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: '#F0F3F7',
    paddingTop: '20%',
    paddingLeft: '10%',
    width: widthPercentageToDP(80),
  },
  imageCircled: {
    padding: 2,
    width: widthPercentageToDP(23),
    backgroundColor: 'black',
    borderRadius: 50,
    marginBottom: 10,
  },
  imageDesign: {
    height: heightPercentageToDP(11),
    width: widthPercentageToDP(22),
    borderRadius: 50,
  },
  iconsContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F0F3F7',
    padding: 10,
  },
  iconDesign: {
    height: 20,
    width: 20,
    marginVertical: 10,
  },
  iconText: {
    color: 'grey',
    fontSize: 12,
    marginHorizontal: 10,
  },
  iconPlusTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  seperator: {
    height: 1,
    backgroundColor: 'black',
    marginVertical: 10,
  },
  backButton: {
    padding: 10,
    backgroundColor: '#F0F3F7',
    height: heightPercentageToDP(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  upparbackbutton: {
    height: 25,
    width: 25,
  },
});
