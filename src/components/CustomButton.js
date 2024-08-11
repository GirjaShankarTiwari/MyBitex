import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Color from '../constants/Color';
import LinearGradient from 'react-native-linear-gradient';

const CustomButton = ({title, color, c1, c2, c3, onPress, marginTop}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.getStartedbtn, {marginTop: marginTop}]}>
      <LinearGradient
        colors={[c1, c2, c3]}
        style={styles.gradientGetStartedbtn}>
        <Text style={{color: color, fontWeight: 600, fontSize: 16}}>
          {title}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  getStartedbtn: {
    borderRadius: 22,
    width: '100%',
    height: 44,

    alignSelf: 'center',
    elevation: 3,
  },
  gradientGetStartedbtn: {
    borderRadius: 20,
    width: '100%',
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CustomButton;
