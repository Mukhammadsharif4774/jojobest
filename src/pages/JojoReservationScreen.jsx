import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
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

const InputField = ({placeholder, value, onChangeText}) => (
  <TextInput
    style={styles.textInput}
    placeholderTextColor={COLORS.white}
    placeholder={placeholder}
    value={value}
    onChangeText={onChangeText}
  />
);

export default function () {
  const navigation = useNavigation();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    table: '',
    time: '',
    date: '',
  });

  const handleInputChange = (field, value) => {
    setFormData(prevData => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleReservation = () => {
    // Additional validation and logic can be added here
    navigation.navigate('DrawerNavigator', {
      screen: 'JojoReserveSuccessScreen',
    });
  };

  return (
    <ImageBackground source={BackgroundImage} style={styles.container}>
      <JojoHeader />

      <View style={styles.logoContainer}>
        <Image source={Logo} style={styles.logo} />
      </View>

      <Text style={styles.title}>Зарезервировать столик</Text>

      <View style={styles.yellowView} />

      <ScrollView style={styles.flex} contentContainerStyle={styles.main}>
        <InputField
          placeholder={'Имя'}
          value={formData.name}
          onChangeText={text => handleInputChange('name', text)}
        />

        <InputField
          placeholder={'Номер телефона'}
          value={formData.phone}
          onChangeText={text => handleInputChange('phone', text)}
        />

        <InputField
          placeholder={'Столик'}
          value={formData.table}
          onChangeText={text => handleInputChange('table', text)}
        />

        <InputField
          placeholder={'Время'}
          value={formData.time}
          onChangeText={text => handleInputChange('time', text)}
        />

        <InputField
          placeholder={'Дата'}
          value={formData.date}
          onChangeText={text => handleInputChange('date', text)}
        />
      </ScrollView>

      <JojoButtonComponent
        text={'Зарезервировать'}
        style={styles.button}
        onPress={handleReservation}
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
  yellowView: {
    height: 8,
    width: 80,
    backgroundColor: COLORS.yellow,
    borderRadius: 25,
    alignSelf: 'center',
  },
  flex: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontFamily: FONTS.black,
    color: COLORS.white,
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  main: {
    paddingBottom: 100,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 60,
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
