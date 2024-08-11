import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {commonStyles} from '../utils/Styles';
import Color from '../constants/Color';

const Transaction = () => {
  return (
    <SafeAreaView
      style={[commonStyles.container, {backgroundColor: Color.primary}]}>
      <Text>Transaction</Text>
    </SafeAreaView>
  );
};

export default Transaction;
