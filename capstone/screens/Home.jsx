import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';
import Title from './Title';

function Home() {
  return (
    <View style={styles.container}>
        <Title title="address"></Title>
        <Text>Open up App.js to start working on your app!</Text>
        <Button
        title="Press me"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
    },
  });

export default Home;