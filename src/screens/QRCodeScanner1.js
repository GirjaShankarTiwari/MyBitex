import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  ActivityIndicator,
  Animated,
  Dimensions,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {commonStyles} from '../utils/Styles';
import Color from '../constants/Color';
import CustomHeader from '../components/CustomHeader';
import LinearGradient from 'react-native-linear-gradient';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {
  Camera,
  useCameraDevice,
  useCameraDevices,
  useCodeScanner,
} from 'react-native-vision-camera';
import Icon from '../constants/Icon';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const QRCodeScanner1 = ({navigation}) => {
  const [hasPermission, setHasPermission] = useState(false);
  const device = useCameraDevice('back');

  const codeScanner = useCodeScanner({
    codeTypes: ['qr', 'ean-13'],
    onCodeScanned: codes => {
      console.log(`Scanned ${codes.length} codes!`);
    },
  });

  useEffect(() => {
    const requestPermissions = async () => {
      const cameraPermission = await Camera.requestCameraPermission();
      const microphonePermission = await Camera.requestMicrophonePermission();

      if (
        cameraPermission === 'authorized' &&
        microphonePermission === 'authorized'
      ) {
        setHasPermission(true);
      } else {
        Alert.alert(
          'Permission Required',
          'Camera and microphone permissions are required to use this feature.',
        );
      }
    };

    requestPermissions();
  }, []);

  // Render camera only when a device is available
  // if (device == null) return <ActivityIndicator size={'large'} />;

  return (
    <SafeAreaView
      style={[commonStyles.container, {backgroundColor: Color.primary}]}>
      <StatusBar backgroundColor={Color.primary} barStyle="light-content" />
      <CustomHeader title={'Scan QR code'} navigation={navigation} />
      <Text
        style={{
          color: Color.white,
          alignSelf: 'center',
          textAlign: 'center',
          opacity: 0.6,
          marginTop: 30,
        }}>
        Place QR code inside the frame{'\n'} to scan please avoid shake to get
        results{'\n'}quickly
      </Text>

      <View
        style={{
          width: 200,
          height: 200,
          alignSelf: 'center',
          margin: 20,
          borderRadius: 6,
        }}>
        <Camera
          style={{
            width: 220,
            height: 220,
            alignSelf: 'center',
            borderRadius: 6,
          }}
          device={device}
          codeScanner={codeScanner}
          isActive={true}
        />
      </View>

      {/* <Camera style={StyleSheet.absoluteFill} device={device} isActive={true} /> */}

      <Text
        style={{
          color: Color.white,
          alignSelf: 'center',
          textAlign: 'center',
          opacity: 0.6,
          marginTop: 20,
        }}>
        70%
      </Text>
      <Image
        source={Icon.scanning}
        style={styles.loading}
        resizeMode="contain"
      />
      <Text
        style={{
          color: Color.white,
          alignSelf: 'center',
          textAlign: 'center',
          opacity: 0.6,
          marginTop: 0,
        }}>
        Scanning ...
      </Text>
      <TouchableOpacity style={[styles.gradientBtn]}>
        <LinearGradient
          colors={[Color.cyan1, Color.cyan1, Color.cyan2]}
          style={styles.btcBtn}>
          <Text style={{color: Color.white, fontWeight: 700, fontSize: 14}}>
            Place Code
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  gradientBtn: {
    width: '80%',
    height: 40,
    alignSelf: 'center',
    elevation: 3,
    marginTop: 30,
    margin: 14,
  },
  btcBtn: {
    borderRadius: 20,
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
  loading: {
    height: 30,
    width: width * 0.7,
    marginTop: 10,
    alignSelf: 'center',
  },
});

export default QRCodeScanner1;
