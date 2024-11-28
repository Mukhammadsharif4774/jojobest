import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import {height, width} from '../helpers/colors';
import ChevronLeft from '../assets/chevron_left.png';
import {useNavigation} from '@react-navigation/native';

export default function ({route}) {
  const {image} = route.params;
  const navigation = useNavigation();

  return (
    <ImageBackground style={styles.container} source={image}>
      <TouchableOpacity onPress={() => navigation.navigate('JojoEventsScreen')}>
        <Image source={ChevronLeft} style={styles.image} />
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    height: height,
  },
  image: {
    width: 30,
    height: 30,
    objectFit: 'contain',
    margin: 25,
  },
});
