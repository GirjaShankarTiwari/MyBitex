import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Color from '../constants/Color';
import Icon from '../constants/Icon';

const BaseScreenHeader = ({title, navigation}) => {
  const gotoMySettings = () => {
    navigation.navigate('mySettings');
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={gotoMySettings}>
        <Image
          source={Icon.drawer}
          style={{height: 28, width: 28}}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <Text style={{color: Color.white, fontSize: 18, fontWeight: 700}}>
        {title}
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate('notifications')}>
        <Image
          source={Icon.bell}
          style={{height: 40, width: 40}}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.primaryDark,
    height: 55,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default BaseScreenHeader;
