import React from 'react';
import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import QRCode from 'react-native-qrcode-svg';
import {useNavigation} from '@react-navigation/native';
import JojoHeader from '../components/JojoHeader';
import JojoButtonComponent from '../components/JojoButtonComponent';
import BackgroundImage from '../assets/background.png';
import Logo from '../assets/logo.png';
import Smile from '../assets/smile.png';

export default function () {
  const navigation = useNavigation();

  const handleNavigateHome = () => {
    navigation.navigate('DrawerNavigator', {screen: 'JojoHomeScreen'});
  };

  return (
    <ImageBackground style={styles.container} source={BackgroundImage}>
      <JojoHeader />

      <View style={styles.logoContainer}>
        <Image source={Logo} style={styles.logo} />
      </View>

      <Text style={styles.title}>
        <Text style={{fontSize: 50}}>{'спасибо'.toUpperCase()}</Text>
        {'\n'}за заказ!
      </Text>

      <View style={styles.qrContainer}>
        <Image source={Smile} style={styles.smile} />

        <QRCode
          value="https://platan.uz/"
          size={Dimensions.get('window').width / 2.5}
        />
      </View>

      <JojoButtonComponent
        text="На главную"
        style={styles.button}
        onPress={handleNavigateHome}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height,
    width: width,
    backgroundColor: COLORS.main,
  },
  title: {
    textAlign: 'center',
    fontFamily: FONTS.black,
    color: COLORS.white,
    fontSize: 36,
    marginTop: 20,
    paddingVertical: 30,
  },
  qrContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  button: {
    position: 'absolute',
    bottom: 50,
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: width * 0.8,
    height: 80,
    resizeMode: 'contain',
  },
  smile: {
    width: 100,
    height: 100,
    marginBottom: 30,
  },
});
