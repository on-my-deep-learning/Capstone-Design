import {StyleSheet, Text, View, Button, SafeAreaView} from 'react-native';
import React from 'react';
import MyButton from '../../components/SlimButton';
import ImgButton from '../../components/ImgButton';
import {useState, useEffect} from 'react';

function Restaurant({navigation}) {
  let [menu, setmenu] = useState([
    '노란콩 도시락',
    '쿼카 샐러드',
    '돼지 빅스비',
  ]);
  return (
    <SafeAreaView style={styles.container}>
      {menu.map((item, index) => {
        return (
          <ImgButton
            key={index.toString()}
            title={item}
            style={styles.buttonView}
            onPress={() => navigation.navigate('Menu')}></ImgButton>
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
