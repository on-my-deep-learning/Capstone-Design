import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';
import React from 'react';
import ImgButton from '../../components/ImgButton'

function Detail({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
        <ImgButton title='text' style={styles.buttonView} onPress={() => navigation.navigate('Foodresult')}>
            <View style={styles.imgView}/>
            <Text>노란콩도시락</Text>
        </ImgButton>
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
      height: "15%",
    },
    imgView: {
      width: "30%",
      height: "100%",
      backgroundColor: '#8EBDA9',
    }
  });

export default Detail;