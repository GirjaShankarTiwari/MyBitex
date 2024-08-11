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

const OptVerify = ({navigation}) => {
  const [phone, setPhone] = useState('');
  const createPassword = () => {
    navigation.navigate('createPassword');
  };
  return (
    <SafeAreaView
      style={[commonStyles.container, {backgroundColor: Color.primary}]}>
      <CustomHeader title={'OTP Verification'} navigation={navigation} />
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
            source={Icon.otp}
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
            An authentication code has been sent to{'\n'} (+880) 111 222 333
          </Text>
          <View
            style={{
              marginTop: 40,
              marginBottom: 20,
              justifyContent: 'space-evenly',
              flexDirection: 'row',
            }}>
            <View style={styles.inputUi}>
              <TextInput
                placeholderTextColor={Color.gray}
                style={styles.inputText}
                onChangeText={txt => setPhone(txt)}
                keyboardType="numeric"
                maxLength={1}
              />
            </View>
            <View style={styles.inputUi}>
              <TextInput
                placeholderTextColor={Color.gray}
                style={styles.inputText}
                onChangeText={txt => setPhone(txt)}
                keyboardType="numeric"
                maxLength={1}
              />
            </View>
            <View style={styles.inputUi}>
              <TextInput
                placeholderTextColor={Color.gray}
                style={styles.inputText}
                onChangeText={txt => setPhone(txt)}
                keyboardType="numeric"
                maxLength={1}
              />
            </View>
            <View style={styles.inputUi}>
              <TextInput
                placeholderTextColor={Color.gray}
                style={styles.inputText}
                onChangeText={txt => setPhone(txt)}
                keyboardType="numeric"
                maxLength={1}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              margin: 16,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: Color.white}}>I didn't receive code.</Text>
            </View>
            <TouchableOpacity>
              <Text style={{color: Color.orange}}>Resend Code</Text>
            </TouchableOpacity>
          </View>

          <Text
            style={{
              color: Color.cyan3,
              fontWeight: 700,
              alignSelf: 'center',
              marginTop: 10,
            }}>
            1:20 Sec left
          </Text>

          <CustomButton
            title={'Verify Now'}
            color={Color.white}
            c1={Color.cyan1}
            c2={Color.cyan1}
            c3={Color.cyan2}
            onPress={createPassword}
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
    height: 60,
    borderRadius: 30,
    width: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputText: {
    color: Color.white,
    fontSize: 16,
    paddingLeft: 16,
  },
});

export default OptVerify;
