import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {commonStyles} from '../utils/Styles';
import Color from '../constants/Color';
import {ScrollView} from 'react-native-virtualized-view';
import HomeTopView from '../components/HomeTopView';
import CustomHeader2 from '../components/CustomHeader2';
import Icon from '../constants/Icon';
import LinearGradient from 'react-native-linear-gradient';
import MarketData from '../components/MarketData';
import * as Animatable from 'react-native-animatable';
const AnimatableLayout = Animatable.createAnimatableComponent(View);

const PortfolioList = ({navigation}) => {
  return (
    <SafeAreaView
      style={[
        commonStyles.container,
        {backgroundColor: Color.primary, paddingHorizontal: 8},
      ]}>
      <StatusBar backgroundColor={Color.primary} barStyle="light-content" />
      <ScrollView>
        <View style={{marginTop: 10}}>
          <CustomHeader2
            title={'Portfolio'}
            icon={Icon.dots}
            navigation={navigation}
          />
        </View>
        <ImageBackground
          style={styles.background}
          resizeMode="cover"
          source={Icon.portfolio_bg}>
          <TouchableOpacity style={[styles.btnOuter]}>
            <LinearGradient
              colors={[Color.plum1, Color.plum1, Color.plum2]}
              style={styles.btcBtn}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{color: Color.white, fontSize: 12}}>BTC/USD</Text>
                <Image
                  source={Icon.arrow_down_white}
                  style={{height: 10, width: 10, marginLeft: 5}}
                  resizeMode="contain"
                />
              </View>
            </LinearGradient>
          </TouchableOpacity>

          <View style={{height: 100, width: 150, alignSelf: 'flex-start'}}>
            <Text
              style={[
                styles.bannerText,
                {alignSelf: 'flex-start', marginLeft: 16},
              ]}>
              $61,671.50
            </Text>
            <Text
              style={{
                color: Color.white,
                opacity: 0.6,
                marginLeft: 16,
                marginTop: 4,
                fontSize: 12,
              }}>
              + $248.23 (+0.35)
            </Text>
          </View>

          <TouchableOpacity
            style={[
              styles.btnOuter,
              {position: 'absolute', right: 30, bottom: 25},
            ]}>
            <LinearGradient
              colors={[Color.pink1, Color.pink1, Color.pink2]}
              style={styles.btcBtn}>
              <Text style={{color: Color.white, fontSize: 12}}>
                Add Balance
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </ImageBackground>

        <AnimatableLayout
          animation={'fadeInUp'}
          duration={1400}
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 8,
          }}>
          <TouchableOpacity style={[styles.gradientBtn]}>
            <LinearGradient
              colors={[Color.cyan1, Color.cyan1, Color.cyan2]}
              style={styles.btcBtn}>
              <Text style={{color: Color.white, fontWeight: 600, fontSize: 12}}>
                Highest holdings
              </Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.gradientBtn]}>
            <LinearGradient
              colors={[Color.plum1, Color.plum1, Color.plum2]}
              style={styles.btcBtn}>
              <Text style={{color: Color.white, fontWeight: 600, fontSize: 12}}>
                24 Hours
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </AnimatableLayout>

        <AnimatableLayout
          style={{marginTop: 8}}
          animation={'zoomIn'}
          duration={1400}>
          <MarketData />
        </AnimatableLayout>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    width: '95%',
    height: 140,
    alignSelf: 'center',
    alignItems: 'center',
    marginVertical: 10,
    paddingTop: 10,
  },
  btnOuter: {
    width: '25%',
    height: 30,
    alignSelf: 'flex-start',
    elevation: 3,
    margin: 14,
  },
  btcBtn: {
    borderRadius: 15,
    width: '100%',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  gradientBtn: {
    width: '40%',
    height: 36,
    alignSelf: 'flex-start',
    elevation: 3,
    margin: 14,
  },
});

export default PortfolioList;
