import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  TextInput,
} from 'react-native';
import React from 'react';

function Login() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonView}>
        <View style={styles.input}>
          <Text>id</Text>
          <TextInput onChangeText={text => onChangeText('id', text)} />
        </View>
        <View style={styles.input}>
          <Text>password</Text>
          <TextInput onChangeText={text => onChangeText('password', text)} />
        </View>
        <Button title="submit" />
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
  input: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    height: 60,
    fontSize: 40,
    justifyContent: 'center',
  },
});

export default Login;
