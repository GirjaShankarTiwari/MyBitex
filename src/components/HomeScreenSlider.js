import {View, Text, FlatList, StyleSheet} from 'react-native';
import React from 'react';
import BannerItem from './BannerItem';
import Icon from '../constants/Icon';

const banners = [
  {id: '1', image: Icon.bg_orange},
  {id: '2', image: Icon.bg_orange},
  {id: '3', image: Icon.bg_orange},
];

const HomeScreenSlider = () => {
  return (
    <View style={{marginTop: 20}}>
      <FlatList
        data={banners}
        renderItem={({item}) => <BannerItem image={item.image} />}
        keyExtractor={item => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
        nestedScrollEnabled={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingLeft: 10,
  },
});

export default HomeScreenSlider;
