import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Image,
  ImageBackground,
} from 'react-native';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import {useNavigation} from '@react-navigation/native';
import JojoHeader from '../components/JojoHeader';
import JojoButtonComponent from '../components/JojoButtonComponent';
import Logo from '../assets/logo.png';
import BackgroundImage from '../assets/background.png';

export default function () {
  const navigation = useNavigation();

  const handleNavigateHome = () => {
    navigation.navigate('DrawerNavigator', {screen: 'JojoHomeScreen'});
  };

  const renderTextInput = placeholder => (
    <View style={styles.textInputContainer}>
      <TextInput
        placeholder={placeholder}
        style={styles.textInput}
        placeholderTextColor={COLORS.white}
        editable={false}
      />
    </View>
  );

  return (
    <ImageBackground style={styles.container} source={BackgroundImage}>
      <JojoHeader />

      <View style={styles.logoContainer}>
        <Image source={Logo} style={styles.logo} />
      </View>

      <Text style={styles.title}>Контакты</Text>

      <View style={styles.yellowView} />

      <View style={styles.main}>
        {renderTextInput('Номер')}
        {renderTextInput('Адрес')}
        {renderTextInput('Данные')}
        {renderTextInput('Индекс')}
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
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: width * 0.8,
    height: 60,
    resizeMode: 'contain',
  },
  flex: {
    flex: 1,
  },
  title: {
    fontSize: 25,
    fontFamily: FONTS.black,
    color: COLORS.white,
    paddingTop: 30,
    textAlign: 'center',
  },
  main: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 40,
  },
  textInputContainer: {
    width: '100%',
  },
  textInput: {
    height: 55,
    width: '85%',
    marginVertical: 10,
    fontSize: 15,
    fontFamily: FONTS.medium,
    borderBottomWidth: 1,
    borderColor: COLORS.white,
    textAlign: 'left',
    color: COLORS.white,
    alignSelf: 'center',
  },
  button: {
    position: 'absolute',
    bottom: 50,
  },
  placeholder: {
    marginLeft: 10,
    color: COLORS.white,
    fontFamily: FONTS.light,
  },
  yellowView: {
    height: 8,
    width: 80,
    backgroundColor: COLORS.yellow,
    borderRadius: 25,
    alignSelf: 'center',
  },
});
