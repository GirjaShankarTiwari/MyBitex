import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import Icon from '../constants/Icon';
import Color from '../constants/Color';

const banners = [
  {id: '1', image: Icon.ethereum, name: 'Ethereum', short: 'ETH'},
  {id: '2', image: Icon.bitcoin, name: 'Bitcoin', short: 'BTC'},
  {id: '3', image: Icon.ethereum, name: 'Ethereum', short: 'ETH'},
];

const PortfolioSlider = () => {
  return (
    <View style={{marginTop: 0}}>
      <FlatList
        data={banners}
        nestedScrollEnabled={true}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              style={{
                height: 130,
                width: 200,
                marginRight: 14,
                borderRadius: 14,

                backgroundColor: Color.primaryLight,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginHorizontal: 15,
                  marginTop: 10,
                }}>
                <Image
                  source={item.image}
                  style={{height: 30, width: 30}}
                  resizeMode="contain"
                />
                <Text style={{color: Color.white, opacity: 0.6}}>
                  {item.name}
                </Text>
                <Image
                  source={Icon.ethernium_p}
                  resizeMode="contain"
                  style={{height: 50, width: 50}}
                />
              </View>
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
                {item.short}
              </Text>
            </TouchableOpacity>
          );
        }}
        keyExtractor={item => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingLeft: 10,
  },
  bannerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default PortfolioSlider;
