import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';
import React from 'react';

function Setting() {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.buttonView}>
            <Text>Setting</Text>
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

export default Setting;