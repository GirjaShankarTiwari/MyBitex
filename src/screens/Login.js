import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {commonStyles} from '../utils/Styles';
import Color from '../constants/Color';
import CustomHeader from '../components/CustomHeader';
import Icon from '../constants/Icon';
import CustomButton from '../components/CustomButton';
import * as Animatable from 'react-native-animatable';
const AnimatableLayout = Animatable.createAnimatableComponent(View);

const Login = ({navigation}) => {
  const gotoSignIn = () => {
    navigation.navigate('phoneLogin');
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
            source={Icon.email_login}
            style={{height: 200, width: 200}}
            resizeMode="contain"
          />
        </View>
        <View style={{flex: 1, margin: 20}}>
          <AnimatableLayout
            style={styles.inputUi}
            animation={'slideInLeft'}
            duration={1400}>
            <Image source={Icon.email} />
            <TextInput
              placeholder="Email Id"
              placeholderTextColor={Color.gray}
              style={styles.inputText}
            />
          </AnimatableLayout>
          <AnimatableLayout
            style={styles.inputUi}
            animation={'slideInRight'}
            duration={1400}>
            <Image source={Icon.pass} />
            <TextInput
              placeholder="Password"
              placeholderTextColor={Color.gray}
              style={styles.inputText}
              secureTextEntry={true}
            />
          </AnimatableLayout>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              margin: 16,
            }}>
            <TouchableOpacity>
              <View style={{flexDirection: 'row'}}>
                <Image source={Icon.checked} style={{height: 18, width: 18}} />

                <Text style={{color: Color.white, marginLeft: 8}}>
                  Remember me
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text style={{color: Color.orange}}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
          <CustomButton
            title={'Sign in'}
            color={Color.white}
            c1={Color.cyan1}
            c2={Color.cyan1}
            c3={Color.cyan2}
            onPress={gotoSignIn}
            marginTop={25}
          />
          <View
            style={{
              position: 'absolute',
              bottom: 5,
              alignSelf: 'center',
              flexDirection: 'row',
            }}>
            <Text style={{color: Color.white}}>
              Already have not an account?
            </Text>
            <TouchableOpacity>
              <Text style={{color: Color.orange, marginLeft: 10}}>
                Sing up !
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
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
    paddingLeft: 16,
  },
});

export default Login;
