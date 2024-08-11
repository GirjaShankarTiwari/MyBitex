import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import React from 'react';
import {commonStyles} from '../utils/Styles';
import Color from '../constants/Color';
import HomeTopView from '../components/HomeTopView';
import HomeScreenSlider from '../components/HomeScreenSlider';
import PortfolioSlider from '../components/PortfolioSlider';
import BitexOprations from '../components/BitexOprations';
import MarketData from '../components/MarketData';
import * as Animatable from 'react-native-animatable';
const AnimatableLayout = Animatable.createAnimatableComponent(View);

const Home = ({navigation}) => {
  const gotoPortfolio = () => {
    navigation.navigate('portfolioList');
  };
  const gotoMarketTrends = () => {
    navigation.navigate('marketTrends');
  };
  return (
    <SafeAreaView
      style={[commonStyles.container, {backgroundColor: Color.primary}]}>
      <FlatList
        data={[1]}
        renderItem={({item, index}) => {
          return (
            <View>
              <HomeTopView navigation={navigation} />
              <AnimatableLayout
                style={styles.topRoundView}
                animation={'zoomIn'}
                duration={1400}>
                <HomeScreenSlider />
                <View style={styles.portfolio}>
                  <Text
                    style={{color: Color.white, fontWeight: 600, fontSize: 18}}>
                    Portfolio
                  </Text>

                  <TouchableOpacity onPress={gotoPortfolio}>
                    <Text
                      style={{color: Color.white, fontSize: 14, opacity: 0.3}}>
                      View All+
                    </Text>
                  </TouchableOpacity>
                </View>
                <PortfolioSlider />
                <BitexOprations />
                <View style={styles.portfolio}>
                  <Text
                    style={{color: Color.white, fontWeight: 600, fontSize: 18}}>
                    Market
                  </Text>

                  <TouchableOpacity onPress={gotoMarketTrends}>
                    <Text
                      style={{color: Color.white, fontSize: 14, opacity: 0.3}}>
                      View All+
                    </Text>
                  </TouchableOpacity>
                </View>
                <MarketData />
              </AnimatableLayout>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  topRoundView: {
    backgroundColor: Color.primary,
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -20,
  },
  portfolio: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    marginTop: 16,
    marginLeft: 10,
    marginRight: 10,
  },
});
export default Home;
