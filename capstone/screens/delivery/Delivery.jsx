import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  TextInput,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import Round from '../../components/Round';
function Delivery({ route, navigation }) {

  const {id} = route.params;
  console.log("id_dev:", id);
  return (
    <View style={styles.container}>
      <View style={styles.buttonView}>
        <Round
          title="중식"
          onPress={() => navigation.navigate('List', { category: '중식', id : id})}
        />
        <Round
          title="양식"
          onPress={() => navigation.navigate('List', { category: '양식', id : id })}
        />
        <Round
          title="분식"
          onPress={() => navigation.navigate('List', { category: '분식', id : id })}
        />
        <Round
          title="햄버거"
          onPress={() => navigation.navigate('List', { category: '햄버거', id : id })}
        />
        <Round
          title="치킨"
          onPress={() => navigation.navigate('List', { category: '치킨', id : id })}
        />
        <Round
          title="피자"
          onPress={() => navigation.navigate('List', { category: '피자', id : id })}
        />
      </View>
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  buttonView: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
};
export default Delivery;
