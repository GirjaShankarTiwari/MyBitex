import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useState, useMemo} from 'react';
import {commonStyles} from '../utils/Styles';
import Color from '../constants/Color';

const Notifications = () => {
  const [myNum, setMyNum] = useState(0);
  const [show, setShow] = useState(false);

  const getValue = () => {
    return setMyNum(myNum + 1);
  };

  const counterNumber = num => {
    console.log('I am called only red button pressed!!');

    for (let i = 0; i <= 100000000; i++) {}
    return num;
  };

  const checkData = useMemo(() => {
    return counterNumber(myNum);
  }, [myNum]);

  return (
    <View
      style={[
        commonStyles.container,
        {justifyContent: 'center', alignItems: 'center'},
      ]}>
      <TouchableOpacity style={styles.btn} onPress={getValue}>
        <Text style={styles.text}>Counter</Text>
      </TouchableOpacity>
      <Text
        style={{fontSize: 21, borderWidth: 1, padding: 20, borderRadius: 10}}>
        Counter Value : {checkData}
      </Text>
      <TouchableOpacity
        style={[styles.btn, {backgroundColor: 'green'}]}
        onPress={() => setShow(!show)}>
        <Text style={styles.text}>
          {show ? 'You Clicked me' : 'Click me plz'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: '70%',
    height: 50,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    margin: 20,
    borderRadius: 10,
  },
  text: {
    fontSize: 18,
    color: Color.white,
  },
});

export default Notifications;
