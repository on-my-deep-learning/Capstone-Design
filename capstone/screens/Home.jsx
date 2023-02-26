import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';
import React from 'react';
import Title from '../components/Title';
import MyButton from '../components/Button';

function Home() {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.buttonView}>
            <Title title="주소"></Title>
            <MyButton title="레시피"/>
            <MyButton title="배달 및 예약"/>
            <MyButton title="친구 초대"/>
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
        width: "95%",
    }
  });

export default Home;