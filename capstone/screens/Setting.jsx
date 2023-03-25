import {StyleSheet, Text, View, Button, SafeAreaView} from 'react-native';
import React from 'react';

function Setting({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonView}>
        <View style={styles.imgView} />
        <Text>로그인하세요</Text>
        <Button
          title="회원가입"
          onPress={() => navigation.navigate('Signup')}></Button>
        <Button
          title="로그인"
          onPress={() => navigation.navigate('Login')}></Button>
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
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  imgView: {
    width: 100,
    height: 100,
    backgroundColor: '#8EBDA9',
  },
});

export default Setting;
