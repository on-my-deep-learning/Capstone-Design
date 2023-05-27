import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  TextInput,
  ScrollView,
} from 'react-native';
import {useState, useEffect} from 'react';
import axios from 'axios';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import Slider from '@react-native-community/slider';
import SlimButton from '../../components/SlimButton';

function Signup({navigation}) {
  const [sliderValue_a, setSliderValue_a] = useState(0);
  const [sliderValue_b, setSliderValue_b] = useState(0);
  const [sliderValue_c, setSliderValue_c] = useState(0);
  let [allergy, setallergy] = useState([
    '새우',
    '굴',
    '게',
    '홍합',
    '오징어',
    '전복',
    '고등어',
    '조개류',
    '메밀',
    '밀',
    '대두',
    '호두',
    '땅콩',
    '잣',
    '가금류',
    '우유',
    '쇠고기',
    '돼지고기',
    '닭고기',
    '복숭아',
    '토마토',
    '아황산류',
  ]);
  const [user, setUser] = useState({
    id: '',
    password: '',
    name: '',
    address: '',
    phone: '',
    nickname: '',
  });

  const {id, password, name, address, phone, nickname} = user;
  const allergyList = [];

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
      navigation.navigate('건강하게먹어요!');
    }
  };

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={styles.buttonView}>
          <View style={styles.input}>
            <Text style={styles.text}>아이디</Text>
            <TextInput
              value={id}
              onChangeText={text => onChangeText('id', text)}
              style={styles.text}
            />
          </View>
          <View style={styles.input}>
            <Text style={styles.text}>비밀번호</Text>
            <TextInput
              value={password}
              onChangeText={text => onChangeText('password', text)}
              style={styles.text}
            />
          </View>
          <View style={styles.input}>
            <Text style={styles.text}>이름</Text>
            <TextInput
              value={name}
              onChangeText={text => onChangeText('name', text)}
              style={styles.text}
            />
          </View>
          <View style={styles.input}>
            <Text style={styles.text}>주소</Text>
            <TextInput
              value={address}
              onChangeText={text => onChangeText('address', text)}
              style={styles.text}
            />
          </View>
          <View style={styles.input}>
            <Text style={styles.text}>전화번호</Text>
            <TextInput
              value={phone}
              onChangeText={text => onChangeText('phone', text)}
              style={styles.text}
            />
          </View>
          <View style={styles.input}>
            <Text style={styles.text}>보유한 질병</Text>
            <TextInput style={styles.text} />
          </View>
          <View style={styles.allergy}>
            <Text style={styles.text}>보유한 알레르기</Text>
            <View style={styles.allergyView}>
              {allergy.map((item, index) => {
                return (
                  <BouncyCheckbox
                    key={index}
                    text={item}
                    fillColor="#63666E"
                    unfillColor="#fff"
                    iconStyle={{borderColor: '#63666E'}}
                    textStyle={{color: '#63666E', fontSize: 20, width: 70}}
                    onPress={isChecked => {
                      allergyList.push(item), console.log(allergyList);
                    }}
                  />
                );
              })}
            </View>
          </View>
          <View style={styles.input}>
            <Text style={styles.text}>선호하는 당도 : {sliderValue_a}</Text>
            <Slider
              value={sliderValue_a}
              onValueChange={e => setSliderValue_a(e)}
              minimumValue={0}
              maximumValue={100}
              minimumTrackTintColor="#53796E"
              maximumTrackTintColor="#8EBDA9"
              step={5}
            />
          </View>
          <View style={styles.input}>
            <Text style={styles.text}>선호하는 염도 : {sliderValue_b}</Text>
            <Slider
              value={sliderValue_b}
              onValueChange={e => setSliderValue_b(e)}
              minimumValue={0}
              maximumValue={100}
              minimumTrackTintColor="#53796E"
              maximumTrackTintColor="#8EBDA9"
              step={5}
            />
          </View>
          <View style={styles.input}>
            <Text style={styles.text}>선호하는 맵기 : {sliderValue_c}</Text>
            <Slider
              value={sliderValue_c}
              onValueChange={e => setSliderValue_c(e)}
              minimumValue={0}
              maximumValue={100}
              minimumTrackTintColor="#53796E"
              maximumTrackTintColor="#8EBDA9"
              step={5}
            />
          </View>
          <BouncyCheckbox
            text="개인정보 수집 및 이용에 동의합니다."
            fillColor="#E69686"
            unfillColor="#fff"
            iconStyle={{borderColor: '#E69686'}}
            textStyle={{color: '#E69686', fontSize: 20}}
            onPress={isChecked => console.log(isChecked)}
          />
          <BouncyCheckbox
            text="마케팅 정보 수신에 동의합니다."
            fillColor="#E69686"
            unfillColor="#fff"
            iconStyle={{borderColor: '#E69686'}}
            textStyle={{color: '#E69686', fontSize: 20}}
            onPress={isChecked => console.log(isChecked)}
          />
          <SlimButton title="회원가입하기" onPress={onSubmit} />
        </View>
      </SafeAreaView>
    </ScrollView>
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
  text: {
    fontSize: 20,
  },
  allergy: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },
  allergyView: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default Signup;
