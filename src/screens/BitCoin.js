import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import React from 'react';
import {commonStyles} from '../utils/Styles';
import Color from '../constants/Color';
import {ScrollView} from 'react-native-virtualized-view';
import CustomHeader2 from '../components/CustomHeader2';
import Icon from '../constants/Icon';
import LinearGradient from 'react-native-linear-gradient';
import {CandlestickChart} from 'react-native-wagmi-charts';
import * as Animatable from 'react-native-animatable';
const AnimatableLayout = Animatable.createAnimatableComponent(SafeAreaView);

const StockItem = Animatable.createAnimatableComponent(TouchableOpacity);

const {width} = Dimensions.get('window');
const data = [
  {time: '14:50', open: 44.5, high: 44.5, low: 43.86, close: 44.3},
  {time: '18:40', open: 44.3, high: 44.4, low: 44.0, close: 44.2},
  {time: '22:31', open: 44.2, high: 44.2, low: 43.8, close: 44.0},
  {time: '02:21', open: 44.0, high: 44.1, low: 43.9, close: 44.1},
  {time: '06:12', open: 44.1, high: 44.2, low: 44.0, close: 44.1},
  {time: '10:30', open: 44.1, high: 44.3, low: 43.8, close: 43.9},
];

const BitCoin = ({navigation}) => {
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
            title={'Bitcoin (BTC)'}
            icon={Icon.favorite}
            navigation={navigation}
          />
        </View>

        <StockItem
          animation={'slideInRight'}
          duration={1400}
          style={styles.market_item}>
          <View
            style={{
              flexDirection: 'row',
              height: '100%',
              width: '100%',
              flex: 1,
            }}>
            <View
              style={{
                flex: 2,
                height: 50,

                flexDirection: 'row',
                alignSelf: 'center',
              }}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingLeft: 15,
                }}>
                <Image
                  source={Icon.bitcoin}
                  style={{height: 45, width: 45}}
                  resizeMode="contain"
                />
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingLeft: 15,
                }}>
                <Text
                  style={{
                    color: Color.white,
                    fontWeight: 600,
                    fontSize: 18,
                  }}>
                  $40,900.64
                </Text>
                <Text
                  style={{
                    color: Color.cyan3,
                    opacity: 0.6,
                    fontWeight: 600,
                    fontSize: 12,
                    alignSelf: 'flex-start',
                    marginTop: 5,
                  }}>
                  + $508.20 (+0.31)
                </Text>
              </View>
            </View>
          </View>
        </StockItem>
        <AnimatableLayout
          animation={'slideInLeft'}
          duration={1400}
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 8,
          }}>
          <TouchableOpacity style={[styles.gradientBtn]}>
            <LinearGradient
              colors={[Color.cyan1, Color.cyan1, Color.cyan2]}
              style={styles.btcBtn}>
              <Text style={{color: Color.white, fontWeight: 600, fontSize: 12}}>
                Global Average
              </Text>
            </LinearGradient>
          </TouchableOpacity>
          <View style={{flexDirection: 'row', marginRight: 16}}>
            <TouchableOpacity
              style={{
                height: 40,
                width: 40,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={Icon.candle_icon}
                style={{height: 36, width: 36, marginRight: 30}}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: 40,
                width: 40,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={Icon.maximise_graph}
                style={{height: 36, width: 36}}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        </AnimatableLayout>

        <View style={{margin: 20, alignSelf: 'center'}}>
          <CandlestickChart.Provider data={data}>
            <CandlestickChart>
              <CandlestickChart.Candles
                positiveColor={Color.cyan3}
                negativeColor={Color.negativeColor}
              />
              {/* Custom X-Axis */}
              <View style={styles.xAxis}>
                {data.map((item, index) => (
                  <Text key={index} style={styles.xAxisLabel}>
                    {item.time}
                  </Text>
                ))}
              </View>
              {/* Custom Y-Axis (Static Example) */}

              <View style={styles.yAxis}>
                <Text style={styles.yAxisLabel}>44,5</Text>
                <Text style={styles.yAxisLabel}>44,4</Text>
                <Text style={styles.yAxisLabel}>44,3</Text>
                <Text style={styles.yAxisLabel}>44,2</Text>
                <Text style={styles.yAxisLabel}>44,1</Text>
                <Text style={styles.yAxisLabel}>44,0</Text>
                <Text style={styles.yAxisLabel}>43,9</Text>
                <Text style={styles.yAxisLabel}>43,9</Text>

                {/* Add more labels as needed */}
              </View>
            </CandlestickChart>
          </CandlestickChart.Provider>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 10,
          }}>
          <Text style={styles.graphFilterText}>1H</Text>
          <Text style={styles.graphFilterText}>1D</Text>
          <Text style={styles.graphFilterText}>1W</Text>
          <Text style={styles.graphFilterText}>1M</Text>
          <Text style={styles.graphFilterText}>6M</Text>
          <Text style={styles.graphFilterText}>1Y</Text>
          <Text style={styles.graphFilterText}>ALL</Text>
        </View>

        <AnimatableLayout
          animation={'slideInDown'}
          duration={1600}
          style={{marginHorizontal: 5}}>
          <View
            style={{
              flexDirection: 'row',
              flex: 1,
              marginVertical: 8,
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                height: 60,
                flex: 1,
                backgroundColor: Color.primaryLight,
                borderRadius: 10,
                marginRight: 8,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: Color.cyan3,
                  opacity: 0.6,
                  fontWeight: 600,
                  fontSize: 12,
                  marginTop: 5,
                }}>
                Market Cap
              </Text>
              <Text style={styles.graphFilterText}>20,351.00 BTC</Text>
            </View>
            <View
              style={{
                height: 60,
                flex: 1,
                marginLeft: 8,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: Color.primaryLight,
                borderRadius: 10,
              }}>
              <Text
                style={{
                  color: Color.cyan3,
                  opacity: 0.6,
                  fontWeight: 600,
                  fontSize: 12,
                  marginTop: 5,
                }}>
                Volume (24 hours)
              </Text>
              <Text style={styles.graphFilterText}>$98,669.59</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              flex: 1,
              marginVertical: 8,
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                height: 60,
                flex: 1,
                backgroundColor: Color.primaryLight,
                borderRadius: 10,
                marginRight: 8,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: Color.cyan3,
                  opacity: 0.6,
                  fontWeight: 600,
                  fontSize: 12,
                  marginTop: 5,
                }}>
                Available Supply
              </Text>
              <Text style={styles.graphFilterText}>15.897.198</Text>
            </View>
            <View
              style={{
                height: 60,
                flex: 1,
                marginLeft: 8,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: Color.primaryLight,
                borderRadius: 10,
              }}>
              <Text
                style={{
                  color: Color.cyan3,
                  opacity: 0.6,
                  fontWeight: 600,
                  fontSize: 12,
                  marginTop: 5,
                }}>
                Total Supply
              </Text>
              <Text style={styles.graphFilterText}>27.6412.348</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              flex: 1,
              marginVertical: 8,
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                height: 60,
                flex: 1,
                backgroundColor: Color.primaryLight,
                borderRadius: 10,
                marginRight: 8,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: Color.cyan3,
                  opacity: 0.6,
                  fontWeight: 600,
                  fontSize: 12,
                  marginTop: 5,
                }}>
                Low (24 hours)
              </Text>
              <Text style={styles.graphFilterText}>$54,987.12</Text>
            </View>
            <View
              style={{
                height: 60,
                flex: 1,
                marginLeft: 8,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: Color.primaryLight,
                borderRadius: 10,
              }}>
              <Text
                style={{
                  color: Color.cyan3,
                  opacity: 0.6,
                  fontWeight: 600,
                  fontSize: 12,
                  marginTop: 5,
                }}>
                High (24 hours)
              </Text>
              <Text style={styles.graphFilterText}>14,147.96</Text>
            </View>
          </View>
        </AnimatableLayout>
      </ScrollView>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 8,
        }}>
        <TouchableOpacity style={[styles.gradientBtn]}>
          <LinearGradient
            colors={[Color.plum1, Color.plum1, Color.plum2]}
            style={styles.btcBtn}>
            <Text style={{color: Color.white, fontWeight: 700, fontSize: 14}}>
              Sell
            </Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.gradientBtn]}>
          <LinearGradient
            colors={[Color.cyan1, Color.cyan1, Color.cyan2]}
            style={styles.btcBtn}>
            <Text style={{color: Color.white, fontWeight: 700, fontSize: 14}}>
              Buy
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
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
    borderRadius: 20,
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  graphFilterText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
    marginTop: 5,
  },
  gradientBtn: {
    width: '40%',
    height: 40,
    alignSelf: 'flex-start',
    elevation: 3,
    margin: 14,
  },
  market_item: {
    width: '95%',
    height: 65,
    alignSelf: 'center',
    backgroundColor: Color.primaryLight,
    borderRadius: 10,
    marginBottom: 16,
  },
  xAxis: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    width: width - 20,
  },
  xAxisLabel: {
    fontSize: 12,
    color: Color.white,
    opacity: 0.5,
  },
  yAxis: {
    position: 'absolute',
    left: 10,
    top: 20,
    justifyContent: 'space-between',
    height: 300,
  },
  yAxisLabel: {
    fontSize: 12,
    color: Color.white,
    opacity: 0.5,
  },
});

export default BitCoin;
