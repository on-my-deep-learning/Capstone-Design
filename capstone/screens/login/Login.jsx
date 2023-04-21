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
import useStore from '../../store.js';
import SlimButton from '../../components/SlimButton';

function Login({navigation}) {
  const [visible, setVisible] = useState(true);
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
      const res = await axios.post('http://127.0.0.1:3000/users/login', user);
      const res_token = res.data.token;
      useStore.setState({id: id});
      useStore.setState({token: res_token});
      console.log(useStore.getState());
    } catch (err) {
      // toast
      console.log(err);
      setVisible(!visible);
      return;
    }
    navigation.navigate('Home');
    setVisible(visible);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonView}>
        <View style={styles.input}>
          <Text>아이디</Text>
          <TextInput
            value={id}
            onChangeText={text => onChangeText('id', text)}
          />
        </View>
        <View style={styles.input}>
          <Text>비밀번호</Text>
          <TextInput
            value={password}
            onChangeText={text => onChangeText('password', text)}
          />
        </View>
        <SlimButton title="로그인" onPress={onSubmit} />
        <View>
          {visible ? null : (
            <Text style={styles.errtext}>
              아이디 혹은 비밀번호가 틀렸습니다
            </Text>
          )}
        </View>
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
  errtext: {
    color: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 40,
    fontSize: 20,
  },
});

export default Login;
