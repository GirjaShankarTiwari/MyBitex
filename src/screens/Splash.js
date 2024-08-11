import {
  Dimensions,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import Color from '../constants/Color';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

import {commonStyles} from '../utils/Styles';
import Icon from '../constants/Icon';
import * as Animatable from 'react-native-animatable';

const Splash = ({navigation}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      // navigation.replace('welcome');
      navigation.replace('baseScreen');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <SafeAreaView
      style={[
        commonStyles.container,
        {
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: Color.primary,
        },
      ]}>
      <Animatable.Image
        source={Icon.logo}
        style={{height: 180, width: 180}}
        resizeMode="contain"
        animation={'zoomIn'}
        duration={1400}
      />
      <Animatable.Image
        source={Icon.bitex}
        style={styles.bitex}
        resizeMode="contain"
        animation={'fadeInUp'}
        duration={1400}
      />
      <Animatable.Image
        source={Icon.loading}
        style={styles.loading}
        resizeMode="contain"
        animation={'fadeInUp'}
        duration={1400}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  logo: {
    height: height * 0.2,
    width: width * 0.5,
  },
  bitex: {
    height: height * 0.07,
    width: width / 2,
    marginTop: height * 0.02,
  },
  loading: {
    height: height * 0.07,
    width: width * 0.7,
    marginTop: height * 0.05,
  },
});

export default Splash;
