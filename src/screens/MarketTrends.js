import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Image,
  TextInput,
} from 'react-native';
import React from 'react';
import CustomHeader2 from '../components/CustomHeader2';
import Icon from '../constants/Icon';
import {ScrollView} from 'react-native-virtualized-view';
import {commonStyles} from '../utils/Styles';
import Color from '../constants/Color';
import MarketData from '../components/MarketData';
import * as Animatable from 'react-native-animatable';
const AnimatableLayout = Animatable.createAnimatableComponent(SafeAreaView);

const MarketTrends = ({navigation}) => {
  return (
    <SafeAreaView
      style={[commonStyles.container, {backgroundColor: Color.primary}]}>
      <StatusBar backgroundColor={Color.primary} barStyle="light-content" />
      <ScrollView>
        <View style={{marginTop: 10}}>
          <CustomHeader2
            title={'Market Trends'}
            icon={Icon.search}
            navigation={navigation}
          />
        </View>
        <View style={styles.searchBox}>
          <Image
            source={Icon.search}
            style={{height: 18, width: 18, alignSelf: 'center'}}
            resizeMode="contain"
          />
          <TextInput
            placeholder="Search Currency ..."
            style={{color: Color.white, marginLeft: 10}}
            placeholderTextColor={Color.lightgrey}
          />
        </View>
        <AnimatableLayout
          style={{marginTop: 8}}
          animation={'fadeInRight'}
          duration={1400}>
          <MarketData />
        </AnimatableLayout>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  searchBox: {
    height: 55,
    width: '90%',
    backgroundColor: Color.primaryDark,
    borderRadius: 30,
    alignSelf: 'center',
    marginVertical: 15,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    paddingLeft: 15,
    paddingRight: 10,
  },
});

export default MarketTrends;
