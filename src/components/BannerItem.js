import React from 'react';
import {View, ImageBackground, Text, StyleSheet, Image} from 'react-native';
import Icon from '../constants/Icon';

const BannerItem = ({image}) => (
  <View style={styles.bannerItem}>
    <ImageBackground
      source={image}
      style={styles.bannerImage}
      imageStyle={styles.imageStyle}>
      <View style={styles.overlayContent}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 10,
            width: '92%',
          }}>
          <Text style={styles.bannerTextSmall}>Total Wallet Balance</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={[styles.bannerTextSmall, {marginRight: 5}]}>USD</Text>
            <Image
              source={Icon.arrow_down_white}
              style={{height: 12, width: 12}}
              resizeMode="contain"
            />
          </View>
        </View>
        <Text
          style={[
            styles.bannerText,
            {alignSelf: 'flex-start', marginLeft: 10},
          ]}>
          $705874.40
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 10,
            width: '92%',
          }}>
          <View>
            <Text style={[styles.bannerTextSmall, {alignSelf: 'flex-start'}]}>
              Weekly Profit
            </Text>
            <Text
              style={[
                styles.bannerTextSmall,
                {alignSelf: 'flex-start', fontWeight: 'bold', fontSize: 16},
              ]}>
              $1580.78
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={Icon.arrow_up_white}
              style={{height: 12, width: 12}}
              resizeMode="contain"
            />
            <Text style={[styles.bannerTextSmall, {marginLeft: 5}]}>+15%</Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  bannerItem: {
    marginRight: 10,
  },
  bannerImage: {
    width: 300,
    height: 150,
    borderRadius: 10,
    overflow: 'hidden', // Ensures the corners of the ImageBackground are rounded
  },
  imageStyle: {
    borderRadius: 10, // Applies rounded corners to the ImageBackground
  },
  overlayContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)', // Optional: adds a semi-transparent overlay
  },
  bannerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  bannerTextSmall: {
    color: 'white',
    fontSize: 14,
  },
});

export default BannerItem;
