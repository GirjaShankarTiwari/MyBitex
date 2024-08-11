import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {commonStyles} from '../utils/Styles';
import Color from '../constants/Color';

const Chat = () => {
  return (
    <SafeAreaView
      style={[commonStyles.container, {backgroundColor: Color.primary}]}>
      <Text>Chat</Text>
    </SafeAreaView>
  );
};

export default Chat;
