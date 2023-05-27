import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  Image,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import useStore from '../../store.js';
import SlimButton from '../../components/SlimButton';

function Home({navigation}) {
  const {id} = useStore(state => state);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonView}>
        <Text style={styles.myText}>아이디 : {id}</Text>
        <Text style={styles.myText}>AI레벨 : 1</Text>
        {/* <SlimButton
          title="추가 설문 하러가기"
          onPress={() => navigation.navigate('Survey')}
        /> */}
        <SlimButton
          title="주문 내역"
          onPress={() => navigation.navigate('History')}
        />
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
  buttonView: {
    width: '95%',
  },
  imgView: {
    width: 100,
    height: 100,
    backgroundColor: '#63666E',
    borderRadius: 5,
  },
  flexView: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  profile: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  myText: {
    fontSize: 20,
    marginVertical: 10,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
});

export default Home;
