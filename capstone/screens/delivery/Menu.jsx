import {StyleSheet, Text, View, Button, SafeAreaView} from 'react-native';
import React from 'react';
import SlimButton from '../../components/SlimButton';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

function Menu({navigation, route}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonView}>
        <Text style={styles.title}>{route.params.id}</Text>
        <Text style={styles.text}>가격 : 10,900원</Text>
        <Text style={styles.text}>
          메뉴 설명 : 노란콩이 들어간 건강한 샐러드 (병아리콩, 토마토, 양상추,
          케일, 적상추, 삶은계란)
        </Text>
        <Text style={styles.text}>주문 수량 : 1</Text>
        <Text style={styles.center}>------토핑 선택------</Text>
        <BouncyCheckbox
          text="닭가슴살"
          fillColor="black"
          unfillColor="#fff"
          iconStyle={{borderColor: 'black'}}
          textStyle={{color: 'black'}}
          onPress={isChecked => console.log(isChecked)}
        />
        <BouncyCheckbox
          text="닭다리살"
          fillColor="black"
          unfillColor="#fff"
          iconStyle={{borderColor: 'black'}}
          textStyle={{color: 'black'}}
          onPress={isChecked => console.log(isChecked)}
        />
        <BouncyCheckbox
          text="불고기"
          fillColor="black"
          unfillColor="#fff"
          iconStyle={{borderColor: 'black'}}
          textStyle={{color: 'black'}}
          onPress={isChecked => console.log(isChecked)}
        />
        <BouncyCheckbox
          text="오리"
          fillColor="black"
          unfillColor="#fff"
          iconStyle={{borderColor: 'black'}}
          textStyle={{color: 'black'}}
          onPress={isChecked => console.log(isChecked)}
        />
        <Text style={styles.center}>------드레싱 선택------</Text>
        <BouncyCheckbox
          text="오리엔탈"
          fillColor="black"
          unfillColor="#fff"
          iconStyle={{borderColor: 'black'}}
          textStyle={{color: 'black'}}
          onPress={isChecked => console.log(isChecked)}
        />
        <BouncyCheckbox
          text="발사믹"
          fillColor="black"
          unfillColor="#fff"
          iconStyle={{borderColor: 'black'}}
          textStyle={{color: 'black'}}
          onPress={isChecked => console.log(isChecked)}
        />
        <BouncyCheckbox
          text="스위트칠리"
          fillColor="black"
          unfillColor="#fff"
          iconStyle={{borderColor: 'black'}}
          textStyle={{color: 'black'}}
          onPress={isChecked => console.log(isChecked)}
        />
        <View style={styles.buttonMargin}>
          <SlimButton
            title="주문하기"
            onPress={() => navigation.navigate('SetPayment')}
          />
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
  title: {
    fontSize: 30,
    textAlign: 'center',
    marginVertical: 20,
  },
  text: {
    fontSize: 20,
    marginVertical: 10,
  },
  buttonMargin: {
    marginTop: 200,
  },
  center: {
    textAlign: 'center',
    fontSize: 20,
  },
});

export default Menu;
