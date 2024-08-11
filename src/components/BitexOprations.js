import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Color from '../constants/Color';
import Icon from '../constants/Icon';

const BitexOprations = () => {
  return (
    <View
      style={{
        height: 90,
        width: '90%',
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 20,
        justifyContent: 'space-between',
        marginHorizontal: 10,
      }}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity>
          <Image
            source={Icon.send}
            style={{height: 50, width: 50}}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Text style={{marginTop: 8, color: Color.white, opacity: 0.7}}>
          Send
        </Text>
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity>
          <Image
            source={Icon.receive}
            style={{height: 50, width: 50}}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Text style={{marginTop: 8, color: Color.white, opacity: 0.7}}>
          Receive
        </Text>
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity>
          <Image
            source={Icon.buy}
            style={{height: 50, width: 50}}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Text style={{marginTop: 8, color: Color.white, opacity: 0.7}}>
          Buy
        </Text>
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity>
          <Image
            source={Icon.swap}
            style={{height: 50, width: 50}}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Text style={{marginTop: 8, color: Color.white, opacity: 0.7}}>
          Swap
        </Text>
      </View>
    </View>
  );
};

export default BitexOprations;
