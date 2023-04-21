import React from 'react';
import {TouchableOpacity, Text, StyleSheet, Dimensions} from 'react-native';

const Button = ({title, onPress}) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);

const {width, height} = Dimensions.get('window');
const radius = Math.floor(width / 5 + 10);

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#E2E1E6',
    width: radius,
    borderRadius: 5,
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginVertical: 5,
  },
  text: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Button;
