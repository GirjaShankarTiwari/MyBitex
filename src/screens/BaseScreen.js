import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Home';
import Color from '../constants/Color';
import {useNavigation} from '@react-navigation/native';
import Transaction from './Transaction';
import Chat from './Chat';
import Settings from './Settings';
import Icon from '../constants/Icon';
import PortfolioList from './PortfolioList';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MarketTrends from './MarketTrends';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="portfolioList"
        component={PortfolioList}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="marketTrends"
        component={MarketTrends}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

const BaseScreen = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Color.primary}}>
      <StatusBar backgroundColor={Color.primaryDark} barStyle="light-content" />
      <Tab.Navigator
        initialRouteName="HomeStack"
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: Color.primaryLight,
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            borderColor: Color.primaryLight,
            height: 80,
          },
        }}>
        <Tab.Screen
          name="homeStack"
          component={HomeStack}
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) => {
              return (
                <Image
                  source={Icon.home}
                  style={{
                    height: 26,
                    width: 26,
                    tintColor: focused ? Color.cyan3 : Color.unselectIcon,
                  }}></Image>
              );
            },
          }}
        />

        <Tab.Screen
          name="transaction"
          component={Transaction}
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) => {
              return (
                <Image
                  source={Icon.wallet}
                  style={{
                    height: 26,
                    width: 26,
                    tintColor: focused ? Color.cyan3 : Color.unselectIcon,
                  }}></Image>
              );
            },
          }}
        />
        <Tab.Screen
          name="abc"
          component={Chat}
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <TouchableOpacity>
                <ImageBackground
                  source={Icon.path}
                  resizeMode="contain"
                  style={{
                    height: 60,
                    width: 60,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={Icon.plus}
                    resizeMode="contain"
                    style={{
                      height: 20,
                      width: 20,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  />
                </ImageBackground>
              </TouchableOpacity>
            ),
          }}
        />
        <Tab.Screen
          name="chat"
          component={Chat}
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) => {
              return (
                <Image
                  source={Icon.chats}
                  style={{
                    height: 26,
                    width: 26,
                    tintColor: focused ? Color.cyan3 : Color.unselectIcon,
                  }}></Image>
              );
            },
          }}
        />

        <Tab.Screen
          name="settings"
          component={Settings}
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) => {
              return (
                <Image
                  source={Icon.settings}
                  style={{
                    height: 26,
                    width: 26,
                    tintColor: focused ? Color.cyan3 : Color.unselectIcon,
                  }}></Image>
              );
            },
          }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    shadowColor: 'black',
    elevation: 5,
  },
});

export default BaseScreen;
