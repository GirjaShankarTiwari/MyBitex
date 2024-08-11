import {View, Text, SafeAreaView, StyleSheet, Image} from 'react-native';
import React from 'react';
import {commonStyles} from '../utils/Styles';
import Icon from '../constants/Icon';
import Color from '../constants/Color';
import String from '../constants/String';
import CustomButton from '../components/CustomButton';
import * as Animatable from 'react-native-animatable';
const AnimatableLayout = Animatable.createAnimatableComponent(View);

const PreLogin = ({navigation}) => {
  const gotoLogin = () => {
    navigation.navigate('login');
  };
  const toToRegister = () => {
    navigation.navigate('login');
  };
  return (
    <SafeAreaView
      style={[commonStyles.container, {backgroundColor: Color.primary}]}>
      <AnimatableLayout
        animation={'zoomIn'}
        duration={1400}
        style={{
          flex: 1,
          backgroundColor: Color.secondry,
          justifyContent: 'center',
          alignItems: 'center',
          margin: 20,
          borderRadius: 20,
        }}>
        <Image source={Icon.wel3} style={{height: 200, width: 200}} />
      </AnimatableLayout>
      <View style={{flex: 0.9}}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={[styles.welcomeText, {fontWeight: '600'}]}>
            {String.wel1}
          </Text>
          <Text style={[styles.lorem]}>
            Reference site about Lorem{'\n'}Ipsum, giving information origins
          </Text>
        </View>
        <AnimatableLayout
          animation={'fadeInUp'}
          duration={1400}
          style={{marginTop: 25, marginLeft: 20, marginRight: 20}}>
          <CustomButton
            title={'Login'}
            color={Color.white}
            c1={Color.plum1}
            c2={Color.plum1}
            c3={Color.plum2}
            onPress={gotoLogin}
            marginTop={0}
          />
          <CustomButton
            title={'Register'}
            color={Color.white}
            c1={Color.cyan1}
            c2={Color.cyan1}
            c3={Color.cyan2}
            onPress={toToRegister}
            marginTop={20}
          />
        </AnimatableLayout>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  welcomeText: {
    color: Color.cyan1,
    fontSize: 30,
    textAlign: 'center',
  },
  lorem: {
    fontSize: 15,
    color: Color.white,
    marginTop: 16,
    opacity: 0.6,
    textAlign: 'center',
  },
});

export default PreLogin;
