import React, {useContext} from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {AppContext} from '../components/AppContext';
import JojoHeader from '../components/JojoHeader';
import JojoMenuComponent from '../components/JojoMenuComponent';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import {jojoProducts} from '../helpers/jojoProducts';
import Logo from '../assets/logo.png';
import BackgroundImage from '../assets/background.png';

const JojoCategoryButton = ({label, active, image, activeImage, onPress}) => (
  <TouchableOpacity onPress={onPress} style={styles.categoryItem}>
    <View style={active ? styles.imageContainerActive : styles.imageContainer}>
      <Image source={active ? activeImage : image} style={styles.image} />
    </View>
    <Text style={styles.category}>{label}</Text>
  </TouchableOpacity>
);

export default function JojoHomeScreen() {
  const [category, setCategory] = React.useState(0);
  const {shouldRefresh, toggleRefresh} = useContext(AppContext);
  const categories = [
    {
      name: 'Обед',
      image: require('../assets/category_1.png'),
      activeImage: require('../assets/category_1_active.png'),
    },
    {
      name: 'Ланч',
      image: require('../assets/category_2.png'),
      activeImage: require('../assets/category_2_active.png'),
    },
    {
      name: 'Десерт',
      image: require('../assets/category_3.png'),
      activeImage: require('../assets/category_3_active.png'),
    },
  ];

  const handleCategoryChange = index => {
    setCategory(index);
    toggleRefresh(!shouldRefresh);
  };

  return (
    <ImageBackground style={styles.container} source={BackgroundImage}>
      <JojoHeader />

      <View style={styles.logoContainer}>
        <Image source={Logo} style={styles.logo} />
      </View>

      <View style={styles.categoryContainer}>
        {categories.map((item, index) => (
          <JojoCategoryButton
            key={index}
            label={item.name}
            image={item.image}
            activeImage={item.activeImage}
            active={category === index}
            onPress={() => handleCategoryChange(index)}
          />
        ))}
      </View>

      <ScrollView style={styles.flex} contentContainerStyle={styles.main}>
        {jojoProducts[category].map((product, index) => (
          <JojoMenuComponent key={index} item={product} />
        ))}
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    flex: 1,
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
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: width,
    paddingHorizontal: 20,
    marginVertical: 20,
  },
  categoryItem: {
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  category: {
    fontFamily: FONTS.medium,
    color: COLORS.white,
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
  },
  main: {
    paddingBottom: 100,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
  },
  imageContainer: {
    backgroundColor: COLORS.white,
    padding: 15,
    borderRadius: 12,
  },
  imageContainerActive: {
    backgroundColor: COLORS.yellow,
    padding: 15,
    borderRadius: 12,
  },
  image: {
    width: 70,
    height: 70,
    objectFit: 'contain',
  },
});
