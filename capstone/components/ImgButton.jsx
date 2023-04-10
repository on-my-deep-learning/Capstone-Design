import React from 'react';
import {TouchableOpacity, StyleSheet, View, Text} from 'react-native';

const Button = ({title, onPress}) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <View style={styles.container}>
      <View style={styles.imgView} />
      <View style={styles.description}>
        <Text style={styles.text}>{title}</Text>
        {/* <Text style={styles.text}>ㅁ ㅁ ㅁ ㅁ ㅁ</Text> */}
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
  },
});

export default Button;
