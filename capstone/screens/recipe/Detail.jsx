import {StyleSheet, Text, View, Button, SafeAreaView} from 'react-native';
import React from 'react';
import ImgButton from '../../components/ImgButton';

function Detail({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <ImgButton
        title="노란콩 도시락"
        style={styles.buttonView}
        onPress={() => navigation.navigate('Foodresult')}></ImgButton>
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
    height: '100%',
  },
});

export default Detail;
