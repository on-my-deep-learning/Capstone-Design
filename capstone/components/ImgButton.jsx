import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({ title, onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}/>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#CEC9BE',
    borderRadius: 5,
    paddingVertical: 50,
    paddingHorizontal: 20,
    marginVertical: 10,
  },
});

export default Button;