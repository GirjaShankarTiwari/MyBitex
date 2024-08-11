import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Color from '../constants/Color';
import Icon from '../constants/Icon';

const CustomHeader = ({title, navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backArrow}
        onPress={() => navigation.goBack()}>
        <Image
          source={Icon.back}
          style={{height: 15, width: 15}}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <Text style={{color: Color.white, fontSize: 18, fontWeight: 700}}>
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.primary,
    height: 55,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  backArrow: {
    height: 40,
    width: 40,
    borderRadius: 23,
    backgroundColor: Color.secondry,
    position: 'absolute',
    left: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CustomHeader;
