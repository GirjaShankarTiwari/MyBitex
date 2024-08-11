import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Color from '../constants/Color';
import Icon from '../constants/Icon';

const CustomHeader2 = ({title, icon, navigation}) => {
  const gotoScanner = () => {
    navigation.navigate('qrCodeScanner');
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.circle}
        onPress={() => navigation.goBack()}>
        <Image
          source={Icon.back}
          style={{height: 18, width: 18}}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <Text style={{color: Color.white, fontSize: 18, fontWeight: 700}}>
        {title}
      </Text>
      <TouchableOpacity style={styles.circle} onPress={gotoScanner}>
        <Image
          source={icon}
          style={{height: 18, width: 18}}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 55,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },

  circle: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: Color.primaryDark,
  },
});

export default CustomHeader2;
