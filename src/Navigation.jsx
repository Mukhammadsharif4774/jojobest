import React from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  Text,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {COLORS, FONTS} from './helpers/colors';
import JojoHomeScreen from './pages/JojoHomeScreen';
import JojoCartScreen from './pages/JojoCartScreen';
import JojoCartSuccessScreen from './pages/JojoCartSuccessScreen';
import JojoReservationScreen from './pages/JojoReservationScreen';
import JojoReserveSuccessScreen from './pages/JojoReserveSuccessScreen';
import JojoContactsScreen from './pages/JojoContactsScreen';
import JojoEventsScreen from './pages/JojoEventsScreen';
import JojoEventDetailScreen from './pages/JojoEventDetailScreen';
import CloseIcon from './assets/close_icon.png';
import CartIcon from './assets/cart_icon.png';
import Logo from './assets/logo.png';
import BackgroundImage from './assets/background.png';

const {width, height} = Dimensions.get('window');
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          width,
          height,
        },
        headerShown: false,
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      {drawerScreens.map(({name, component}) => (
        <Drawer.Screen key={name} name={name} component={component} />
      ))}
    </Drawer.Navigator>
  );
}

function CustomDrawerContent(props) {
  const navigation = useNavigation();

  const drawerItems = [
    {label: 'МАГАЗИН', screen: 'JojoHomeScreen'},
    {label: 'БРОНЬ', screen: 'JojoReservationScreen'},
    {label: 'КОНТАКТЫ', screen: 'JojoContactsScreen'},
    {label: 'События ресторана', screen: 'JojoEventsScreen'},
  ];

  const navigateToScreen = screen => {
    navigation.navigate('DrawerNavigator', {screen});
  };

  return (
    <ImageBackground style={styles.container} source={BackgroundImage}>
      <View style={styles.closeIconContainer}>
        <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
          <Image source={CloseIcon} style={styles.closeIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.logoContainer}>
        <Image source={Logo} style={styles.logo} />
      </View>
      <View style={styles.mainContainer}>
        {drawerItems.map(({label, screen}) => (
          <TouchableOpacity
            key={screen}
            onPress={() => navigateToScreen(screen)}
            style={[
              styles.drawerItem,
              {
                backgroundColor:
                  screen === 'JojoHomeScreen' ? COLORS.yellow : 'transparent',
              },
            ]}>
            <Text style={styles.itemText}>{label}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity onPress={() => navigateToScreen('JojoCartScreen')}>
        <Image source={CartIcon} style={styles.cartIcon} />
      </TouchableOpacity>
    </ImageBackground>
  );
}

const drawerScreens = [
  {name: 'JojoHomeScreen', component: JojoHomeScreen},
  {name: 'JojoCartScreen', component: JojoCartScreen},
  {name: 'JojoCartSuccessScreen', component: JojoCartSuccessScreen},
  {name: 'JojoReservationScreen', component: JojoReservationScreen},
  {name: 'JojoReserveSuccessScreen', component: JojoReserveSuccessScreen},
  {name: 'JojoContactsScreen', component: JojoContactsScreen},
  {name: 'JojoEventsScreen', component: JojoEventsScreen},
  {name: 'JojoEventDetailScreen', component: JojoEventDetailScreen},
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 60,
    height: height,
    width: width,
  },
  closeIconContainer: {
    position: 'absolute',
    left: 20,
    bottom: 40,
  },
  closeIcon: {
    width: 25,
    height: 25,
  },
  logoContainer: {
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: width * 0.8,
    height: 150,
    resizeMode: 'contain',
  },
  mainContainer: {
    marginTop: height * 0.1,
    alignItems: 'flex-end',
    width: width,
  },
  drawerItem: {
    width: '80%',
    paddingVertical: 5,
    marginTop: 50,
    justifyContent: 'center',
  },
  itemText: {
    fontSize: 18,
    fontFamily: FONTS.black,
    color: COLORS.white,
    textAlign: 'left',
    borderBottomWidth: 1,
    borderColor: COLORS.white,
    width: '100%',
    paddingLeft: 20,
  },
  cartIcon: {
    width: 60,
    height: 60,
    alignSelf: 'center',
    marginTop: height * 0.1,
  },
});
