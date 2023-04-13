import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  TextInput,
} from 'react-native';
import React from 'react';
import Round from '../../components/Round';

function Recipe({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.input}>
        <TextInput placeholder="검색하기" />
      </View>
      <View style={styles.buttonView}>
        <Round title="한식" onPress={() => navigation.navigate('Detail')} />
        <Round title="한식" onPress={() => navigation.navigate('Foodresult')} />
        <Round title="한식" onPress={() => navigation.navigate('Foodresult')} />
        <Round title="한식" onPress={() => navigation.navigate('Foodresult')} />
        <Round title="한식" onPress={() => navigation.navigate('Foodresult')} />
        <Round title="한식" onPress={() => navigation.navigate('Foodresult')} />
        <Round title="한식" onPress={() => navigation.navigate('Foodresult')} />
        <Round title="한식" onPress={() => navigation.navigate('Foodresult')} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  input: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    height: 60,
    fontSize: 40,
    justifyContent: 'center',
    marginLeft: 20,
  },
  buttonView: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default Recipe;
