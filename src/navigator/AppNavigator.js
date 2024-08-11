import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../screens/Splash';
import Login from '../screens/Login';
import Welcome from '../screens/Welcome';
import PreLogin from '../screens/PreLogin';
import PhoneLogin from '../screens/PhoneLogin';
import OptVerify from '../screens/OptVerify';
import CreatePassword from '../screens/CreatePassword';
import ForgetPassword from '../screens/ForgetPassword';
import SelectLocation from '../screens/SelectLocation';
import BaseScreen from '../screens/BaseScreen';
import Home from '../screens/Home';
import Transaction from '../screens/Transaction';
import Chat from '../screens/Chat';
import Settings from '../screens/Settings';
import PortfolioList from '../screens/PortfolioList';
import MarketTrends from '../screens/MarketTrends';
import BitCoin from '../screens/BitCoin';
import MySettings from '../screens/MySettings';
import QRCodeScanner from '../screens/QRCodeScanner1';
import QRCodeScanner1 from '../screens/QRCodeScanner1';
import Notifications from '../screens/Notifications';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="welcome"
        component={Welcome}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="preLogin"
        component={PreLogin}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="phoneLogin"
        component={PhoneLogin}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="optVerify"
        component={OptVerify}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="createPassword"
        component={CreatePassword}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="forgetPassword"
        component={ForgetPassword}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="selectLocation"
        component={SelectLocation}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="baseScreen"
        component={BaseScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="bitCoin"
        component={BitCoin}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="mySettings"
        component={MySettings}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="qrCodeScanner"
        component={QRCodeScanner1}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="notifications"
        component={Notifications}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
