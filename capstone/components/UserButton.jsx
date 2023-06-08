import React from 'react';
import {TouchableOpacity, StyleSheet, View, Text, Image} from 'react-native';

const Button = ({title, onPress}) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <View style={styles.container}>
      <Image source={require('../image/profile.jpg')} style={styles.image} />
      <View style={styles.description}>
        <Text style={styles.text}>lv.1</Text>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    marginVertical: 10,
    width: '95%',
    marginBottom: 10,
    // borderBottomWidth: 1,
    // borderBottomColor: 'grey',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 100,
  },
  imgView: {
    width: 100,
    height: 100,
    backgroundColor: '#E2E1E6',
    borderRadius: 5,
  },
  description: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    marginVertical: 20,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
});

export default Button;
