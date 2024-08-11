import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import React from 'react';
import Icon from '../constants/Icon';
import Color from '../constants/Color';
import {useNavigation} from '@react-navigation/native';

const marketData = [
  {
    id: 1,
    name: 'Achain',
    short: 'ACH',
    amount: '$15,813.20',
    earn: '-3.84%',
    isProfit: false,
    image: Icon.achain,
  },
  {
    id: 2,
    name: 'Tron',
    short: 'TRX',
    amount: '$12,64.80',
    earn: '-3.84%',
    isProfit: false,
    image: Icon.tron,
  },
  {
    id: 3,
    name: 'Etherium',
    short: 'BCH',
    amount: '$12,64.80',
    earn: '+3.84%',
    isProfit: true,
    image: Icon.etherium,
  },
  {
    id: 4,
    name: 'Binance Coin',
    short: 'CAD',
    amount: '$12,64.80',
    earn: '-3.84%',
    isProfit: false,
    image: Icon.binance_coin,
  },
  {
    id: 5,
    name: 'Pound',
    short: 'GBP',
    amount: '$12,64.80',
    earn: '-3.84%',
    isProfit: false,
    image: Icon.pound,
  },
  {
    id: 6,
    name: 'Tether',
    short: 'USDT',
    amount: '$12,64.80',
    earn: '+3.84%',
    isProfit: true,
    image: Icon.tether,
  },
  {
    id: 7,
    name: 'Bitcoin Cash',
    short: 'BCH',
    amount: '$12,64.80',
    earn: '+3.84%',
    isProfit: true,
    image: Icon.bitcoin_cash,
  },
];

const MarketData = () => {
  const navigation = useNavigation();
  const gotoBitCoin = () => {
    navigation.navigate('bitCoin');
  };
  return (
    <View>
      <FlatList
        data={marketData}
        nestedScrollEnabled={true}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity style={styles.market_item} onPress={gotoBitCoin}>
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
                      paddingLeft: 10,
                    }}>
                    <Image
                      source={item.image}
                      style={{height: 45, width: 45}}
                      resizeMode="contain"
                    />
                  </View>
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      paddingLeft: 10,
                    }}>
                    <Text
                      style={{
                        color: Color.cyan2,
                        opacity: 0.6,
                        fontWeight: 600,
                        fontSize: 15,
                      }}>
                      {item.name}
                    </Text>
                    <Text
                      style={{
                        color: Color.white,
                        opacity: 0.6,
                        fontWeight: 600,
                        fontSize: 12,
                        alignSelf: 'flex-start',
                        marginTop: 5,
                      }}>
                      {item.short}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flex: 1,
                    height: 50,
                  }}>
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'flex-end',
                      paddingRight: 16,
                    }}>
                    <Text
                      style={{
                        color: Color.white,
                        opacity: 0.6,
                        fontWeight: 600,
                        fontSize: 15,
                        marginTop: 5,
                      }}>
                      {item.amount}
                    </Text>

                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 8,
                      }}>
                      <Image
                        source={Icon.arrow_down_white}
                        style={{
                          height: 10,
                          width: 10,
                          tintColor: item.isProfit ? Color.cyan2 : Color.pink2,
                        }}
                        resizeMode="contain"
                      />
                      <Text
                        style={{
                          color: item.isProfit ? Color.cyan2 : Color.pink2,
                          opacity: 0.6,
                          fontWeight: 600,
                          fontSize: 12,
                          marginLeft: 5,
                        }}>
                        {item.earn}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  market_item: {
    width: '95%',
    height: 65,
    alignSelf: 'center',
    backgroundColor: Color.primaryLight,
    borderRadius: 10,
    marginBottom: 16,
  },
});

export default MarketData;
