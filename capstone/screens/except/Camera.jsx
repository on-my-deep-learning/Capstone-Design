import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect} from 'react';
import Round from '../../components/Round';
import MyButton from '../../components/Button';

function CameraScreen({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cView}>
        <Text>asd</Text>
      </View>
      <View style={styles.buttonView}>
        <Round title="" onPress={() => navigation.navigate('Foodresult')} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    textAlign: 'center',
    justifyContent: 'flex-start',
  },
  buttonView: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cView: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CameraScreen;
