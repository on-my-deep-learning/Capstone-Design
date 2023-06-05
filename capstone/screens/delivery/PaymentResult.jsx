import {StyleSheet, Text, View, Button, SafeAreaView} from 'react-native';
import React from 'react';
import SlimButton from '../../components/SlimButton';

function PaymentResult({navigation, route}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonView}>
        <Text style={styles.title}>결제가 완료되었습니다!</Text>
        <Text style={styles.text}>주문번호 : 2</Text>
        <Text style={styles.text}>결제금액 : 10,900원</Text>
        <Text style={styles.text}>결제방법 : 신용·체크카드</Text>
        <Text style={styles.text}>
          주문내역 : [코알라파스타] 코알라의 까르보나라
        </Text>
        <Text style={styles.text}>주문자 : Test</Text>
        <Text style={styles.text}>주문자 연락처 : 010-1234-1234</Text>
        <Text style={styles.text}>
          주문자 주소 : 경상북도 경산시 하양읍 하양로 13-13 D2-521
        </Text>
        <SlimButton title="확인" onPress={() => navigation.navigate('Home')} />
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
  },
  text: {
    fontSize: 20,
    marginVertical: 10,
  },
});

export default PaymentResult;
