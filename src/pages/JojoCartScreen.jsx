import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Dimensions,
  ImageBackground,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AppContext} from '../components/AppContext';
import JojoCartItemComponent from '../components/JojoCartItemComponent';
import JojoButtonComponent from '../components/JojoButtonComponent';
import JojoHeader from '../components/JojoHeader';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import BackgroundImage from '../assets/background.png';
import Logo from '../assets/logo.png';

export default function () {
  const navigation = useNavigation();
  const {shouldRefresh} = useContext(AppContext);
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const fetchCart = async () => {
      const storedCart = await AsyncStorage.getItem('cartList');
      setCart(storedCart ? JSON.parse(storedCart) : []);
    };

    fetchCart();
  }, [shouldRefresh]);

  useEffect(() => {
    if (cart.length) {
      const calculatedPrice = cart.reduce(
        (sum, item) => sum + item.price * item.count,
        0,
      );
      setTotalPrice(calculatedPrice);
    } else {
      setTotalPrice(0);
    }
  }, [cart]);

  const handleOrder = () => {
    const destinationScreen = cart.length
      ? 'JojoCartSuccessScreen'
      : 'JojoHomeScreen';
    navigation.navigate('DrawerNavigator', {screen: destinationScreen});
  };

  return (
    <ImageBackground style={styles.container} source={BackgroundImage}>
      <JojoHeader />

      <View style={styles.logoContainer}>
        <Image source={Logo} style={styles.logo} />
      </View>

      {cart.length ? (
        <ScrollView style={styles.flex} contentContainerStyle={styles.main}>
          {cart.map((item, index) => (
            <JojoCartItemComponent item={item} key={index} />
          ))}

          <View style={[styles.row, styles.summaryContainer]}>
            <Text style={styles.sumTitle}>Итого:</Text>
            <Text style={styles.sum}>{totalPrice} $</Text>
          </View>
        </ScrollView>
      ) : (
        <>
          <Text style={styles.empty}>КОРЗИНА</Text>
          <Text style={styles.subEmpty}>пустая...</Text>
        </>
      )}

      <JojoButtonComponent
        text={cart?.length ? 'Завершить заказ' : 'На главную'}
        style={styles.orderButton}
        onPress={handleOrder}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    height: height,
    backgroundColor: COLORS.main,
  },
  flex: {
    flex: 1,
  },
  main: {
    paddingBottom: 100,
    alignItems: 'center',
    paddingHorizontal: 20,
    height: '100%',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    paddingTop: 40,
  },
  empty: {
    marginTop: Dimensions.get('window').height * 0.2,
    textAlign: 'center',
    fontSize: 40,
    fontFamily: FONTS.black,
    color: COLORS.white,
  },
  subEmpty: {
    textAlign: 'center',
    fontSize: 28,
    fontFamily: FONTS.black,
    color: COLORS.white,
  },
  summaryContainer: {
    justifyContent: 'space-between',
    marginTop: 40,
    paddingHorizontal: 40,
    flexDirection: 'row',
    alignItems: 'center',
    width: width,
  },
  sumTitle: {
    fontSize: 24,
    fontFamily: FONTS.bold,
    color: COLORS.yellow,
    textAlign: 'center',
  },
  sum: {
    fontSize: 30,
    fontFamily: FONTS.bold,
    color: COLORS.yellow,
    textAlign: 'center',
    marginLeft: 20,
  },
  orderButton: {
    position: 'absolute',
    bottom: 50,
  },
  logoContainer: {
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: width * 0.8,
    height: 80,
    resizeMode: 'contain',
  },
});
