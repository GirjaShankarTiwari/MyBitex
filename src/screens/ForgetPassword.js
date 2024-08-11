import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useState} from 'react';
import {commonStyles} from '../utils/Styles';
import Color from '../constants/Color';
import CustomHeader from '../components/CustomHeader';
import Icon from '../constants/Icon';
import CustomButton from '../components/CustomButton';
import * as Animatable from 'react-native-animatable';

const ForgetPassword = ({navigation}) => {
  const [password, setPassword] = useState('');
  const selectLocation = () => {
    navigation.navigate('selectLocation');
  };
  return (
    <KeyboardAvoidingView
      style={[commonStyles.container, {backgroundColor: Color.primary}]}>
      <CustomHeader title={'Forget Password'} navigation={navigation} />
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
            source={Icon.forgot_pass}
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
            We will send a mail to the email address{'\n'} you registered to
            regain your password
          </Text>
          <View style={styles.inputUi}>
            <Image source={Icon.email} />
            <TextInput
              placeholder="Email Emial Id"
              placeholderTextColor={Color.gray}
              style={styles.inputText}
              value="johndoe@mail.com"
            />
          </View>
          <View
            style={{
              margin: 16,
            }}>
            <Text
              style={{
                color: Color.orange,
                marginTop: 10,
                textAlign: 'center',
              }}>
              Email sent to ex*****@gmail.com
            </Text>
          </View>

          <CustomButton
            title={'Send'}
            color={Color.white}
            c1={Color.cyan1}
            c2={Color.cyan1}
            c3={Color.cyan2}
            onPress={selectLocation}
            marginTop={40}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  inputUi: {
    backgroundColor: Color.secondry,
    height: 45,
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
    marginLeft: 10,
  },
});

export default ForgetPassword;
