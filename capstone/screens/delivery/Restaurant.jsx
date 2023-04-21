import {StyleSheet, Text, View, Button, SafeAreaView} from 'react-native';
import React from 'react';
import {useState, useEffect} from 'react';
import ImgButton from '../../components/ImgButton';

function Menu({navigation, route}) {
  let [menu, setmenu] = useState([
    '노란콩 도시락',
    '쿼카 샐러드',
    '낑깡 떡볶이',
  ]);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{route.params.id}</Text>
      {menu.map((item, index) => {
        return (
          <ImgButton
            key={index.toString()}
            title={item}
            style={styles.buttonView}
            onPress={() => navigation.navigate('Menu', {id: item})}></ImgButton>
        );
      })}
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
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
});

export default Menu;
