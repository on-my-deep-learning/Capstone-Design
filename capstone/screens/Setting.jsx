import {StyleSheet, Text, View, Button, SafeAreaView} from 'react-native';
import React from 'react';
import MyButton from '../components/Button';

function Setting({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonView}>
        <MyButton
          title="회원가입"
          onPress={() => navigation.navigate('Signup')}></MyButton>
        <MyButton
          title="로그인"
          onPress={() => navigation.navigate('Login')}></MyButton>
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
});

export default Setting;
