import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS, FONTS} from '../helpers/colors';

export default function JojoButtonComponent({
  text,
  onPress,
  style = {},
  textStyle = {},
  buttonStyle = {},
}) {
  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity onPress={onPress} style={[styles.button, buttonStyle]}>
        <Text style={[styles.text, textStyle]}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 20,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    borderRadius: 12,
    width: '90%',
    backgroundColor: COLORS.yellow,
    alignSelf: 'center',
  },
  text: {
    color: COLORS.white,
    fontSize: 18,
    fontFamily: FONTS.bold,
    fontWeight: 'bold',
    lineHeight: 28,
  },
});
