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
import Title from '../components/Title';
import MyButton from '../components/Button';
import {useStore} from '../store';

function Home({navigation}) {
  const {id} = useStore();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonView}>
        <View style={styles.flexView}>
          <View style={styles.profile}>
            <Image
              source={require('../image/profile.jpg')}
              style={styles.image}
            />
            <Text>lv.0</Text>
            <Text style={styles.myText}>{id}</Text>
          </View>
        </View>
        <MyButton
          title="AI 추천 받기"
          onPress={() => navigation.navigate('Recommend')}
        />
        <MyButton
          title="다른거 먹을래요"
          onPress={() => navigation.navigate('Delivery')}
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
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
});

export default Home;
