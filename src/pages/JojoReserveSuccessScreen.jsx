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
import {useNavigation} from '@react-navigation/native';
import JojoHeader from '../components/JojoHeader';
import JojoButtonComponent from '../components/JojoButtonComponent';
import Logo from '../assets/logo.png';
import BackgroundImage from '../assets/background.png';
import SuccessIcon from '../assets/success_icon.png';

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

      <Image
        source={SuccessIcon}
        style={{
          alignSelf: 'center',
          width: width * 0.4,
          height: width * 0.4,
          objectFit: 'contain',
          marginTop: 40,
        }}
      />

      <Text style={styles.title}>
        <Text style={{fontSize: 40}}>СПАСИБО ЗА</Text>
        {'\n'}РЕЗЕРВ!
      </Text>

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
    marginTop: Dimensions.get('window').height * 0.1,
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
    height: 60,
    resizeMode: 'contain',
  },
});
