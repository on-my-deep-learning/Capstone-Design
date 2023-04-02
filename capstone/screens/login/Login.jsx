import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  TextInput,
} from 'react-native';
import {useState, useEffect} from 'react';
import axios from 'axios';
import React from 'react';

function Login() {
  const [user, setUser] = useState({
    id: '',
    password: '',
  });

  const {id, password} = user;

  const onChangeText = (id, value) =>
    setUser({
      ...user,
      [id]: value,
    });

  const onSubmit = async () => {
    try {
      await axios.post('http://127.0.0.1:3000/users/login', user);
    } catch (err) {
      // toast
      console.log(err);
    } finally {
      // navigation
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonView}>
        <View style={styles.input}>
          <Text>id</Text>
          <TextInput
            value={id}
            onChangeText={text => onChangeText('id', text)}
          />
        </View>
        <View style={styles.input}>
          <Text>password</Text>
          <TextInput
            value={password}
            onChangeText={text => onChangeText('password', text)}
          />
        </View>
        <Button title="submit" onPress={onSubmit} />
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
