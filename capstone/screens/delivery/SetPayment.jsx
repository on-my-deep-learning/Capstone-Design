import {StyleSheet, Text, View, Button, SafeAreaView} from 'react-native';
import React from 'react';
import Squarebutton from '../../components/SquareButton';
import Square from '../../components/Square';
import Square_gray from '../../components/Square_gray';
import SlimButton from '../../components/SlimButton';

function SetPayment({navigation, route}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonView}>
        <Text style={styles.title}>결제 방법</Text>
        <Squarebutton title="신용·체크카드" style={styles.slim}></Squarebutton>
        {/* <View style={styles.flex}>
          <Square title="계좌이체"></Square>
          <Square title="무통장입금"></Square>
          <Square title="휴대폰결제"></Square>
        </View> */}
        <View style={styles.flex}>
          <Square_gray title="국민"></Square_gray>
          <Square title="신한"></Square>
          <Square title="삼성"></Square>
          <Square title="현대"></Square>
        </View>
        <View style={styles.flex}>
          <Square title="비씨"></Square>
          <Square title="농협"></Square>
          <Square title="하나"></Square>
          <Square title="롯데"></Square>
        </View>
        <View style={styles.flex}>
          <Square title="우리"></Square>
          <Square title="씨티"></Square>
          <Square title="카뱅"></Square>
          <Square title="수협"></Square>
        </View>
        <View style={styles.slim}>
          <SlimButton
            title="결제하기"
            onPress={() => navigation.navigate('Payment')}></SlimButton>
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
    fontSize: 25,
    margin: 10,
    fontWeight: 'bold',
  },
  flex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  slim: {
    marginTop: 300,
  },
});

export default SetPayment;
