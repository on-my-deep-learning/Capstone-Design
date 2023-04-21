import {StyleSheet, Text, View, Button, SafeAreaView} from 'react-native';
import React from 'react';
import MyButton from '../../components/SlimButton';
import ImgButton from '../../components/ImgButton';
import {useState, useEffect} from 'react';
import axios from 'axios';

function Restaurant({navigation}) {
  let [menu, setmenu] = useState([
    '코알라 찌개',
    '쿼카 뼈해장국',
    '웜뱃 제육볶음',
    '나무늘보 볶음밥',
  ]);
  return (
    <SafeAreaView style={styles.container}>
      {menu.map((item, index) => {
        return (
          <ImgButton
            key={index.toString()}
            title={item}
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
