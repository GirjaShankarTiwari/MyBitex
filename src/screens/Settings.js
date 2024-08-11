import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {commonStyles} from '../utils/Styles';
import Color from '../constants/Color';

const Settings = () => {
  return (
    <SafeAreaView
      style={[commonStyles.container, {backgroundColor: Color.primary}]}>
      <Text>Settings</Text>
    </SafeAreaView>
  );
};

export default Settings;
