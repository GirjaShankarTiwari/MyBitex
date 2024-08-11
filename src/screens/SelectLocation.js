import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {commonStyles} from '../utils/Styles';
import Color from '../constants/Color';
import CustomHeader from '../components/CustomHeader';
import Icon from '../constants/Icon';
import CustomButton from '../components/CustomButton';
import * as Animatable from 'react-native-animatable';

const SelectLocation = ({navigation}) => {
  const [password, setPassword] = useState('');
  const goToHome = () => {
    navigation.navigate('baseScreen');
  };
  return (
    <SafeAreaView
      style={[commonStyles.container, {backgroundColor: Color.primary}]}>
      <CustomHeader title={'Select Location'} navigation={navigation} />
      <View style={{flex: 1}}>
        <View
          style={{
            flex: 0.7,
            justifyContent: 'center',
            alignItems: 'center',
            margin: 20,
            borderRadius: 20,
          }}>
          <Animatable.Image
            animation={'zoomIn'}
            duration={1400}
            source={Icon.select_location}
            style={{height: 200, width: 200}}
            resizeMode="contain"
          />
        </View>
        <View style={{flex: 1, margin: 20}}>
          <TouchableOpacity style={styles.inputUi}>
            <Text style={styles.inputText}>Select your Country</Text>
            <Image
              source={Icon.picker}
              style={{
                height: 20,
                width: 20,
                paddingRight: 10,
                resizeMode: 'contain',
              }}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.inputUi}>
            <Text style={styles.inputText}>Select your City</Text>
            <Image
              source={Icon.picker}
              style={{
                height: 20,
                width: 20,
                paddingRight: 10,
                resizeMode: 'contain',
              }}
            />
          </TouchableOpacity>

          <CustomButton
            title={'Continue'}
            color={Color.white}
            c1={Color.cyan1}
            c2={Color.cyan1}
            c3={Color.cyan2}
            onPress={goToHome}
            marginTop={40}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  inputUi: {
    backgroundColor: Color.secondry,
    height: 50,
    borderRadius: 24,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 16,
    paddingRight: 16,
    marginTop: 20,
  },
  inputText: {
    color: Color.white,
    fontSize: 16,
    marginLeft: 10,
  },
});

export default SelectLocation;
