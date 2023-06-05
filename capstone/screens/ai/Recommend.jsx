import {StyleSheet, Text, View, Button, SafeAreaView} from 'react-native';
import React from 'react';
import MyButton from '../../components/SlimButton';
import ImgButton from '../../components/ImgButton';
import {useState, useEffect} from 'react';
import axios from 'axios';

function Recommend({navigation}) {
  let [menu, setmenu] = useState([
    '노란콩 샐러드',
    '너구리 특제 포케',
    '팬더 쌀국수',
  ]);
  const setRes = async () => {
    try {
      const restaurantList = await axios.get(
        'http://localhost:3000/restaurant/name',
      );
      arr = restaurantList.data.restaurants;
      menu = Object.values(arr);
      console.log(menu[1].name);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      {menu.map((item, index) => {
        return (
          <ImgButton
            key={index.toString()}
            title={item}
            style={styles.buttonView}
            onPress={() => navigation.navigate('Menu', {id: item})}>
            {/* onPress={() => setRes()}> */}
          </ImgButton>
        );
      })}
      {/* <View style={styles.buttonView}>
        <MyButton
          title="다시 추천 받기"
          onPress={() => navigation.navigate('Recommend')}></MyButton>
      </View> */}
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
});

export default Recommend;
