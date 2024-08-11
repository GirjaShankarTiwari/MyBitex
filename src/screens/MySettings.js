import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React, {useState} from 'react';
import {commonStyles} from '../utils/Styles';
import Color from '../constants/Color';
import CustomHeader from '../components/CustomHeader';
import Icon from '../constants/Icon';
import {ScrollView} from 'react-native-virtualized-view';
import {Switch} from 'react-native-paper';

import * as Animatable from 'react-native-animatable';
const AnimatableLayout = Animatable.createAnimatableComponent(View);
const ProfileTab = Animatable.createAnimatableComponent(TouchableOpacity);

const MySettings = ({navigation}) => {
  const [newsLetter, setNewsLetter] = React.useState(false);
  const [txtMessage, setTxtMessage] = React.useState(false);
  const [phoneCall, setPhoneCall] = React.useState(false);

  const onToggleSwitchNews = () => setNewsLetter(!newsLetter);
  const onToggleSwitchMessage = () => setTxtMessage(!txtMessage);
  const onToggleSwitchPhoneCall = () => setPhoneCall(!phoneCall);

  return (
    <SafeAreaView
      style={[commonStyles.container, {backgroundColor: Color.primary}]}>
      <StatusBar backgroundColor={Color.primary} barStyle="light-content" />
      <CustomHeader title={'Settings'} navigation={navigation} />
      <ScrollView style={{flex: 1}}>
        <TouchableOpacity style={styles.profileTab}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              height: '100%',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: 20,
              }}>
              <Image
                source={Icon.image}
                style={{height: 60, width: 60, borderRadius: 30}}
                resizeMode="contain"
              />
              <View style={{marginLeft: 14}}>
                <Text
                  style={{fontSize: 16, color: Color.white, fontWeight: 600}}>
                  Jhon Smith
                </Text>
                <Text style={{fontSize: 12, color: Color.cyan2}}>
                  Basic Member
                </Text>
              </View>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 15,
              }}>
              <Image
                source={Icon.next}
                style={{height: 16, width: 16}}
                resizeMode="contain"
              />
            </View>
          </View>
        </TouchableOpacity>
        <AnimatableLayout
          animation={''}
          duration={1400}
          style={{
            width: '92%',
            borderRadius: 10,
            paddingBottom: 10,
            marginBottom: 16,
            backgroundColor: Color.primaryLight,
            alignSelf: 'center',
            marginTop: 20,
          }}>
          <View style={styles.accountHeader}>
            <Text style={[styles.header, {fontWeight: 600}]}>Accounts</Text>
          </View>
          <View style={styles.optionsView}>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingVertical: 8,
              }}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={Icon.lock_white}
                  style={{height: 20, width: 20}}
                  resizeMode="contain"
                />
                <Text
                  style={[styles.subTitle, {fontWeight: 500, marginLeft: 14}]}>
                  Change Password
                </Text>
              </View>
              <View>
                <Image
                  source={Icon.next}
                  style={{height: 12, width: 12}}
                  resizeMode="contain"
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingVertical: 8,
                marginTop: 5,
              }}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={Icon.bell_white}
                  style={{height: 20, width: 20}}
                  resizeMode="contain"
                />
                <Text
                  style={[styles.subTitle, {fontWeight: 500, marginLeft: 14}]}>
                  Order Management
                </Text>
              </View>
              <View>
                <Image
                  source={Icon.next}
                  style={{height: 12, width: 12}}
                  resizeMode="contain"
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingVertical: 8,
                marginTop: 5,
              }}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={Icon.setting_white}
                  style={{height: 20, width: 20}}
                  resizeMode="contain"
                />
                <Text
                  style={[styles.subTitle, {fontWeight: 500, marginLeft: 14}]}>
                  Document Management
                </Text>
              </View>
              <View>
                <Image
                  source={Icon.next}
                  style={{height: 12, width: 12}}
                  resizeMode="contain"
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingVertical: 8,
                marginTop: 5,
              }}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={Icon.wallet_white}
                  style={{height: 20, width: 20}}
                  resizeMode="contain"
                />
                <Text
                  style={[styles.subTitle, {fontWeight: 500, marginLeft: 14}]}>
                  Payment
                </Text>
              </View>
              <View>
                <Image
                  source={Icon.next}
                  style={{height: 12, width: 12}}
                  resizeMode="contain"
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingVertical: 8,
                marginTop: 5,
              }}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={Icon.logout}
                  style={{height: 20, width: 20}}
                  resizeMode="contain"
                />
                <Text
                  style={[styles.subTitle, {fontWeight: 500, marginLeft: 14}]}>
                  Sign Out
                </Text>
              </View>
              <View>
                <Image
                  source={Icon.next}
                  style={{height: 12, width: 12}}
                  resizeMode="contain"
                />
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              height: 40,
              backgroundColor: Color.primary_green,
              justifyContent: 'center',
              paddingLeft: 16,
              marginTop: 10,
            }}>
            <Text style={{fontSize: 16, color: Color.cyan3, fontWeight: 600}}>
              More Options
            </Text>
          </View>
          <View style={styles.optionsView}>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingVertical: 8,
              }}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={Icon.news_letter}
                  style={{height: 20, width: 20}}
                  resizeMode="contain"
                />
                <Text
                  style={[styles.subTitle, {fontWeight: 500, marginLeft: 14}]}>
                  Newsletter
                </Text>
              </View>
              <View>
                <Switch
                  color={Color.cyan1}
                  value={newsLetter}
                  onValueChange={onToggleSwitchNews}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingVertical: 8,
                marginTop: 5,
              }}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={Icon.txt_message}
                  style={{height: 20, width: 20}}
                  resizeMode="contain"
                />
                <Text
                  style={[styles.subTitle, {fontWeight: 500, marginLeft: 14}]}>
                  Text Message
                </Text>
              </View>
              <View>
                <Switch
                  color={Color.cyan1}
                  value={txtMessage}
                  onValueChange={onToggleSwitchMessage}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingVertical: 8,
                marginTop: 5,
              }}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={Icon.phonecall}
                  style={{height: 20, width: 20}}
                  resizeMode="contain"
                />
                <Text
                  style={[styles.subTitle, {fontWeight: 500, marginLeft: 14}]}>
                  Phone Call
                </Text>
              </View>
              <View>
                <Switch
                  color={Color.cyan1}
                  value={phoneCall}
                  onValueChange={onToggleSwitchPhoneCall}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingVertical: 8,
                marginTop: 5,
              }}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={Icon.currency}
                  style={{height: 20, width: 20}}
                  resizeMode="contain"
                />
                <Text
                  style={[styles.subTitle, {fontWeight: 500, marginLeft: 14}]}>
                  Currency
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={[
                    styles.subTitle,
                    {marginLeft: 12, marginRight: 8, opacity: 0.6},
                  ]}>
                  $USD
                </Text>
                <Image
                  source={Icon.next}
                  style={{height: 12, width: 12}}
                  resizeMode="contain"
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingVertical: 8,
                marginTop: 5,
              }}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={Icon.language}
                  style={{height: 20, width: 20}}
                  resizeMode="contain"
                />
                <Text
                  style={[styles.subTitle, {fontWeight: 500, marginLeft: 14}]}>
                  Language
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={[
                    styles.subTitle,
                    {marginLeft: 12, marginRight: 8, opacity: 0.6},
                  ]}>
                  English
                </Text>
                <Image
                  source={Icon.next}
                  style={{height: 12, width: 12}}
                  resizeMode="contain"
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingVertical: 8,
                marginTop: 5,
              }}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={Icon.link}
                  style={{height: 20, width: 20}}
                  resizeMode="contain"
                />
                <Text
                  style={[styles.subTitle, {fontWeight: 500, marginLeft: 14}]}>
                  Linked Accounts
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={[
                    styles.subTitle,
                    {marginLeft: 12, marginRight: 8, opacity: 0.6},
                  ]}>
                  Facebook, go...
                </Text>
                <Image
                  source={Icon.next}
                  style={{height: 12, width: 12}}
                  resizeMode="contain"
                />
              </View>
            </TouchableOpacity>
          </View>
        </AnimatableLayout>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  profileTab: {
    width: '92%',
    height: 80,
    borderRadius: 10,
    backgroundColor: Color.primaryLight,
    alignSelf: 'center',
    marginTop: 10,
  },
  header: {
    fontSize: 16,
    color: Color.white,
    alignSelf: 'flex-start',
    marginLeft: 16,
  },
  accountHeader: {
    height: 45,
    width: '100%',
    backgroundColor: Color.cyan2,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    justifyContent: 'center',
  },
  optionsView: {
    width: '92%',
    alignSelf: 'center',
    marginTop: 15,
  },
  subTitle: {
    fontSize: 14,
    color: Color.white,
  },
});

export default MySettings;
