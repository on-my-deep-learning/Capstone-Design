import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';

const Round = ({ title, onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);

const { width, height } = Dimensions.get("window");
const radius = Math.floor(width / 5 + 10);

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#53796E',
    alignItems: 'center',
    justifyContent: 'center',
    width: radius,
    height: radius,
    marginBottom: 10,
    borderRadius: radius / 2,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Round;