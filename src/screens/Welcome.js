import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Dimensions,
  Image,
  StyleSheet,
  StatusBar,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {commonStyles} from '../utils/Styles';
import Color from '../constants/Color';
import String from '../constants/String';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
const AnimatableLayout = Animatable.createAnimatableComponent(View);

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const Welcome = ({navigation}) => {
  const [data, setData] = useState([
    {
      image: require('../../assets/images/wel1.png'),
      title: String.wel1,
      description: 'Dummy Data',
      page: '1 of 3',
    },
    {
      image: require('../../assets/images/wel2.png'),
      title: String.wel2,
      description: 'Dummy Data',
      page: '2 of 3',
    },
  ]);
  return (
    <SafeAreaView
      style={[
        commonStyles.container,
        {
          backgroundColor: Color.primary,
          justifyContent: 'center',
        },
      ]}>
      <StatusBar backgroundColor={Color.primary} barStyle="light-content" />
      <AnimatableLayout
        animation={'zoomIn'}
        duration={1400}
        style={{
          backgroundColor: Color.secondry,
          borderRadius: 20,
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: 10,
          marginRight: 10,
          marginTop: 20,
          flex: 9,
        }}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          pagingEnabled
          data={data}
          renderItem={({item, index}) => {
            return (
              <View
                style={{
                  width: width - 20,
                  height: height - 100,
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingBottom: 35,
                  paddingTop: 30,
                }}>
                <TouchableOpacity
                  style={[styles.button, {position: 'static', bottom: 5}]}>
                  <LinearGradient
                    colors={[Color.pink1, Color.pink1, Color.pink2]}
                    style={styles.linearGradient}>
                    <Text style={styles.btnTextColor}>{item.page}</Text>
                  </LinearGradient>
                </TouchableOpacity>
                <Image
                  source={item.image}
                  style={{height: 200, width: 200, marginTop: 16}}
                  resizeMode="contain"
                />
                <View
                  style={{
                    flex: 2,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={[styles.welcomeText, {fontWeight: '600'}]}>
                    {item.title}
                  </Text>
                  <Text style={[styles.lorem]}>
                    Reference site about Lorem{'\n'}Ipsum, giving information
                    origins
                  </Text>
                </View>

                <TouchableOpacity
                  style={styles.getStartedbtn}
                  onPress={() => navigation.navigate('preLogin')}>
                  <LinearGradient
                    colors={[Color.cyan1, Color.cyan1, Color.cyan2]}
                    style={styles.gradientGetStartedbtn}>
                    <Text style={styles.btnTextColor}>
                      {String.Get_Started}
                    </Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </AnimatableLayout>
      <View style={{flex: 1.2, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('preLogin')}>
          <LinearGradient
            colors={[Color.pink1, Color.pink1, Color.pink2]}
            style={styles.linearGradient}>
            <Text style={styles.btnTextColor}>Skip</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  pinkbtn: {
    width: '22%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    height: 30,
    elevation: 3,
    borderRadius: 5,
    overflow: 'hidden',
  },
  getStartedbtn: {
    backgroundColor: Color.cyan1,
    borderRadius: 22,
    width: '70%',
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    elevation: 3,
  },
  btnTextColor: {
    color: Color.white,
    fontWeight: 'bold',
  },
  logo: {
    height: height * 0.2,
    width: width * 0.5,
  },
  welcomeText: {
    color: Color.cyan1,
    fontSize: 30,
    textAlign: 'center',
  },
  lorem: {
    fontSize: 15,
    color: Color.white,
    marginTop: 16,
    opacity: 0.6,
    textAlign: 'center',
  },
  button: {
    borderRadius: 5,
    overflow: 'hidden',
    width: '22%',
    alignSelf: 'center',
    height: 30,
    position: 'absolute',
  },
  linearGradient: {
    paddingVertical: 6,
    alignItems: 'center',
    borderRadius: 15,
  },
  gradientGetStartedbtn: {
    borderRadius: 20,
    width: '100%',
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Welcome;
