import {View, Text} from 'react-native';
import React from 'react';
import BaseScreenHeader from './BaseScreenHeader';
import Color from '../constants/Color';
import * as Animatable from 'react-native-animatable';
const AnimatableLayout = Animatable.createAnimatableComponent(View);

const HomeTopView = ({navigation}) => {
  return (
    <AnimatableLayout
      animation={'slideInUp'}
      duration={1400}
      style={{
        width: '100%',
        height: 200,
        paddingLeft: 16,
        paddingRight: 12,
        backgroundColor: Color.primaryDark,
      }}>
      <BaseScreenHeader title={''} navigation={navigation} />
      <Text
        style={{
          color: Color.cyan3,
          fontWeight: 500,
          fontSize: 18,
          marginTop: 40,
        }}>
        Hi Alex Smith
      </Text>
      <Text style={{color: Color.white, fontWeight: 700, fontSize: 24}}>
        Good Morning
      </Text>
    </AnimatableLayout>
  );
};

export default HomeTopView;
