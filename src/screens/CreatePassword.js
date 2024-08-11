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

const CreatePassword = ({navigation}) => {
  const [password, setPassword] = useState('123456890');
  const forGotPassword = () => {
    navigation.navigate('forgetPassword');
  };
  return (
    <SafeAreaView
      style={[commonStyles.container, {backgroundColor: Color.primary}]}>
      <CustomHeader title={'Create password'} navigation={navigation} />
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
            source={Icon.create_pass}
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
            Choose a secure password that will be{'\n'} easy for you to
            remember.
          </Text>
          <View style={[styles.inputUi, {margin: 6}]}>
            <View style={{marginLeft: 25, flex: 4}}>
              <Text
                style={{
                  color: Color.white,
                  opacity: 0.4,
                  marginTop: 8,
                }}>
                Password
              </Text>
              <TextInput
                value={password}
                placeholderTextColor={Color.gray}
                style={styles.inputText}
                secureTextEntry={true}
                onChangeText={txt => setPassword(txt)}
              />
            </View>
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <TouchableOpacity>
                <Image source={Icon.eye} style={{height: 26, width: 26}} />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              margin: 16,
              alignItems: 'flex-start',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <Image
                source={Icon.tick}
                style={{height: 16, width: 16}}
                resizeMode="contain"
              />
              <Text
                style={{
                  color: Color.cyan3,
                  marginLeft: 8,
                }}>
                Has at least 8 characters
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <Image
                source={Icon.tick}
                style={{height: 16, width: 16}}
                resizeMode="contain"
              />
              <Text
                style={{
                  color: Color.cyan3,
                  marginLeft: 8,
                }}>
                Has an uppercase letter or symbol
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <Image
                source={Icon.tick}
                style={{height: 16, width: 16, tintColor: Color.gray}}
                resizeMode="contain"
              />
              <Text
                style={{
                  color: Color.gray,
                  marginLeft: 8,
                }}>
                Has a number
              </Text>
            </View>
          </View>

          <CustomButton
            title={'Continue'}
            color={Color.white}
            c1={Color.cyan1}
            c2={Color.cyan1}
            c3={Color.cyan2}
            onPress={forGotPassword}
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
    borderRadius: 30,
    width: '100%',
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputText: {
    color: Color.white,
    fontSize: 16,
    marginTop: -10,
  },
});

export default CreatePassword;
