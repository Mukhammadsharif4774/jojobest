import React from 'react';
import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import JojoHeader from '../components/JojoHeader';
import Logo from '../assets/logo.png';
import EventImage from '../assets/events_background.png';
import Music from '../assets/music_background.png';
import Family from '../assets/family_background.png';
import Football from '../assets/football_background.png';
import Hokkey from '../assets/hokkey_background.png';
import {useNavigation} from '@react-navigation/native';

export default function () {
  const navigation = useNavigation();
  return (
    <ImageBackground style={styles.container} source={EventImage}>
      <JojoHeader />

      <View style={styles.logoContainer}>
        <Image source={Logo} style={styles.logo} />
      </View>

      <Text style={styles.title}>События ресторана</Text>

      <View style={styles.yellowView} />

      <View style={styles.main}>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate('DrawerNavigator', {
              screen: 'JojoEventDetailScreen',
              params: {image: Music},
            })
          }>
          <Text style={styles.name}>
            Вечер живой музыки и {'\n'} выступлений{' '}
          </Text>
          <Text style={styles.time}>20 декабпя в 12:00</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate('DrawerNavigator', {
              screen: 'JojoEventDetailScreen',
              params: {image: Family},
            })
          }>
          <Text style={styles.name}>Семейный День </Text>
          <Text style={styles.time}>20 декабпя в 12:00</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate('DrawerNavigator', {
              screen: 'JojoEventDetailScreen',
              params: {image: Football},
            })
          }>
          <Text style={styles.name}>День футбола</Text>
          <Text style={styles.time}>25 декабпя в 19:00</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate('DrawerNavigator', {
              screen: 'JojoEventDetailScreen',
              params: {image: Hokkey},
            })
          }>
          <Text style={styles.name}>Вечер Хоккея </Text>
          <Text style={styles.time}>30 декабпя в 20:00</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height,
    width: width,
  },
  yellowView: {
    height: 8,
    width: 80,
    backgroundColor: COLORS.yellow,
    borderRadius: 25,
    alignSelf: 'center',
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
  title: {
    textAlign: 'center',
    fontFamily: FONTS.black,
    color: COLORS.white,
    fontSize: 20,
    marginTop: 10,
    paddingTop: 30,
  },
  image: {
    width: '100%',
    height: height * 0.5,
    objectFit: 'contain',
  },
  button: {
    width: width,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 15,
  },
  name: {
    fontSize: 16,
    fontFamily: FONTS.black,
    color: COLORS.white,
  },
  time: {
    fontSize: 15,
    fontFamily: FONTS.regular,
    color: COLORS.white,
  },
  main: {
    position: 'absolute',
    bottom: 20,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
});
