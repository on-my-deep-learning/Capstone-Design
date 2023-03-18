import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({ title, onPress, children }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    {children}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#CEC9BE',
    borderRadius: 5,
    paddingVertical: 50,
    paddingHorizontal: 20,
    marginVertical: 10,
    width: "100%",
  },
});

export default Button;