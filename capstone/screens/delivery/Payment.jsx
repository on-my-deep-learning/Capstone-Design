import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import Payments from 'iamport-react-native';
import {useState, useEffect} from 'react';

function Payment({navigation}) {
  // _onPaymentResultReceive = (data) => {
  //   console.log(data);
  //   Alert.alert('결제 결과', JSON.stringify(data));
  // };
  const [pg, setPg] = useState('html5_inicis');
  const [tierCode, setTierCode] = useState(undefined);
  const [method, setMethod] = useState('card');
  const [cardQuota, setCardQuota] = useState(0);
  const [merchantUid, setMerchantUid] = useState(`mid_${new Date().getTime()}`);
  const [name, setName] = useState('아임포트 결제데이터분석');
  const [amount, setAmount] = useState('39000');
  const [buyerName, setBuyerName] = useState('홍길동');
  const [buyerTel, setBuyerTel] = useState('01012341234');
  const [buyerEmail, setBuyerEmail] = useState('example@example.com');
  const [vbankDue, setVbankDue] = useState('');
  const [bizNum, setBizNum] = useState('');
  const [escrow, setEscrow] = useState(false);
  const [digital, setDigital] = useState(false);
  const params = {
    pg,
    pay_method: method,
    currency: undefined,
    notice_url: undefined,
    display: undefined,
    merchant_uid: merchantUid,
    name,
    amount,
    app_scheme: 'exampleforrn',
    tax_free: undefined,
    buyer_name: buyerName,
    buyer_tel: buyerTel,
    buyer_email: buyerEmail,
    buyer_addr: undefined,
    buyer_postcode: undefined,
    custom_data: undefined,
    vbank_due: undefined,
    digital: undefined,
    language: undefined,
    biz_num: undefined,
    customer_uid: undefined,
    naverPopupMode: undefined,
    naverUseCfm: undefined,
    naverProducts: undefined,
    m_redirect_url: Payments.M_REDIRECT_URL,
    niceMobileV2: true,
    escrow,
  };
  const userCode = 'A';
  return (
    <SafeAreaView style={styles.container}>
      <Payments.Payment
        userCode="A"
        tierCode="DEVELOPER"
        loading={
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>결제중...</Text>
          </View>
        }
        data={params}
        callback={response => navigation.replace('PaymentResult', {response})}
      />
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
    fontSize: 20,
    textAlign: 'center',
  },
});

export default Payment;
