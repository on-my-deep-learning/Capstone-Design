import {StyleSheet, Text, View, Button, SafeAreaView} from 'react-native';
import React from 'react';
import {useState, useEffect} from 'react';
import ImgButton from '../../components/ImgButton';

function Menu({navigation, route}) {
  let [menu, setmenu] = useState([
    '코알라의 토마토파스타',
    '코알라의 까르보나라',
    '코알라의 알리오올리오',
    '코알라의 로제파스타',
  ]);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{route.params.id}</Text>
      <Text style={styles.text}>------메인메뉴------</Text>
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
  text: {
    fontSize: 20,
    marginVertical: 10,
    textAlign: 'left',
  },
});

export default Menu;
