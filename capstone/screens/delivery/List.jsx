import {StyleSheet, Text, View, Button, SafeAreaView} from 'react-native';
import React from 'react';
import MyButton from '../../components/SlimButton';
import ImgButton from '../../components/ImgButton';
import {useState, useEffect} from 'react';
import axios from 'axios';

function Restaurant({navigation}) {
  let [menu, setmenu] = useState([
    // {
    //   title: '코알라 파스타',
    //   img: {require("/Users/rayley/ReactNativeProjects/capstone/image/biryani.png")},
    // },
    '코알라 파스타',
    '쿼카 피자',
    '나무늘보 필라프',
  ]);
  // let [img, setimg] = useState([
  //   require('../../image/biryani.jpg'),
  //   require('../../image/noodles.jpg'),
  //   require('../../image/pizza.jpg'),
  //   require('../../image/poke.jpg'),
  // ]);
  return (
    <SafeAreaView style={styles.container}>
      {menu.map((item, index) => {
        return (
          <ImgButton
            key={index.toString()}
            title={item}
            // img={item.img}
            style={styles.buttonView}
            onPress={() =>
              navigation.navigate('Restaurant', {id: item})
            }></ImgButton>
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

export default Restaurant;
