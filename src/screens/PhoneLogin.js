import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {commonStyles} from '../utils/Styles';
import Color from '../constants/Color';
import CustomHeader from '../components/CustomHeader';
import Icon from '../constants/Icon';
import CustomButton from '../components/CustomButton';
import * as Animatable from 'react-native-animatable';

const PhoneLogin = ({navigation}) => {
  const [phone, setPhone] = useState('');
  const gotoVerifyOTP = () => {
    navigation.navigate('optVerify');
  };
  return (
    <SafeAreaView
      style={[commonStyles.container, {backgroundColor: Color.primary}]}>
      <CustomHeader title={'SignIn'} navigation={navigation} />
      <View style={{flex: 1}}>
        <View
          style={{
            flex: 0.7,

            justifyContent: 'center',
            alignItems: 'center',
            margin: 20,
            borderRadius: 20,
          }}>
          <Animatable.Image
            animation={'zoomIn'}
            duration={1400}
            source={Icon.phone_login}
            style={{height: 200, width: 200}}
            resizeMode="contain"
          />
        </View>
        <View style={{flex: 1, margin: 20}}>
          <Text
            style={{
              color: Color.white,
              alignSelf: 'center',
              textAlign: 'center',
              opacity: 0.6,
            }}>
            Simply enter your phone number to login{'\n'} or create an account.
          </Text>
          <View style={styles.inputUi}>
            <TouchableOpacity
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{fontSize: 16, fontWeight: 700, color: Color.white}}>
                  +88
                </Text>
                <Image source={Icon.down} style={{marginLeft: 10}} />
              </View>
            </TouchableOpacity>
            <View
              style={{
                height: 36,
                width: 0.5,
                backgroundColor: Color.white,
                opacity: 0.5,
                marginLeft: 10,
              }}></View>
            <View style={{flex: 4}}>
              <TextInput
                placeholder="Phone"
                placeholderTextColor={Color.gray}
                style={styles.inputText}
                onChangeText={txt => setPhone(txt)}
                keyboardType="phone-pad"
              />
            </View>
          </View>

          <Text
            style={{
              color: Color.white,
              alignSelf: 'center',
              textAlign: 'center',
              marginTop: 20,
              opacity: 0.6,
            }}>
            By using our mobile app, you agree to our{'\n'} Privacy Policy and
            Terms of Use
          </Text>

          <CustomButton
            title={'Continue'}
            color={Color.white}
            c1={Color.cyan1}
            c2={Color.cyan1}
            c3={Color.cyan2}
            onPress={gotoVerifyOTP}
            marginTop={40}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  inputUi: {
    backgroundColor: Color.secondry,
    height: 50,
    borderRadius: 24,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 16,
    paddingRight: 16,
    marginTop: 20,
  },
  inputText: {
    color: Color.white,
    fontSize: 16,
    paddingLeft: 16,
  },
});

export default PhoneLogin;
