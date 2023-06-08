import React from 'react';
import { StyleSheet, Text } from 'react-native';

const Title = ({ title }) => {
  return <Text style={styles.title}>{title}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: 'black',
    margin: 10,
  },
});

export default Title;