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
import BouncyCheckbox from 'react-native-bouncy-checkbox';

function Signup() {
  const [user, setUser] = useState({
    id: '',
    password: '',
    name: '',
    address: '',
    phone: '',
    nickname: '',
  });

  const {id, password, name, address, phone, nickname} = user;

  const onChangeText = (id, value) =>
    setUser({
      ...user,
      [id]: value,
    });

  const onSubmit = async () => {
    try {
      await axios.post('http://127.0.0.1:3000/users/signup', user);
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
        <View style={styles.input}>
          <Text>이름</Text>
          <TextInput
            value={name}
            onChangeText={text => onChangeText('name', text)}
          />
        </View>
        <View style={styles.input}>
          <Text>주소</Text>
          <TextInput
            value={address}
            onChangeText={text => onChangeText('address', text)}
          />
        </View>
        <View style={styles.input}>
          <Text>전화번호</Text>
          <TextInput
            value={phone}
            onChangeText={text => onChangeText('phone', text)}
          />
        </View>
        <View style={styles.input}>
          <Text>별명</Text>
          <TextInput
            value={nickname}
            onChangeText={text => onChangeText('nickname', text)}
          />
        </View>
        <View style={styles.input}>
          <Text>질병</Text>
          <TextInput />
        </View>
        <View style={styles.input}>
          <Text>알레르기</Text>
          <TextInput />
        </View>
        <BouncyCheckbox
          text="개인정보 수집 및 이용에 동의합니다."
          fillColor="#F5A623"
          unfillColor="#fff"
          iconStyle={{borderColor: '#F5A623'}}
          textStyle={{color: '#F5A623'}}
          onPress={isChecked => console.log(isChecked)}
        />
        <BouncyCheckbox
          text="개인정보 제3자 제공에 동의합니다."
          fillColor="#F5A623"
          unfillColor="#fff"
          iconStyle={{borderColor: '#F5A623'}}
          textStyle={{color: '#F5A623'}}
          onPress={isChecked => console.log(isChecked)}
        />
        <BouncyCheckbox
          text="마케팅 정보 수신에 동의합니다."
          fillColor="#F5A623"
          unfillColor="#fff"
          iconStyle={{borderColor: '#F5A623'}}
          textStyle={{color: '#F5A623'}}
          onPress={isChecked => console.log(isChecked)}
        />
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

export default Signup;
