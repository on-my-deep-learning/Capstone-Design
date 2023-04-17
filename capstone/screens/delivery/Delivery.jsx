import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  TextInput,
} from 'react-native';
import React from 'react';
import Round from '../../components/Round';

function Recipe({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      {/* <View style={styles.input}>
        <TextInput placeholder="검색하기" />
      </View> */}
      <View style={styles.buttonView}>
        <Round
          title="한식"
          onPress={() => navigation.navigate('Restaurant', {id: 1})}
        />
        <Round title="일식" onPress={() => navigation.navigate('Restaurant')} />
        <Round title="중식" onPress={() => navigation.navigate('Restaurant')} />
        <Round title="양식" onPress={() => navigation.navigate('Restaurant')} />
        <Round
          title="아시안"
          onPress={() => navigation.navigate('Restaurant')}
        />
        <Round title="치킨" onPress={() => navigation.navigate('Restaurant')} />
        <Round title="피자" onPress={() => navigation.navigate('Restaurant')} />
        <Round
          title="디저트"
          onPress={() => navigation.navigate('Restaurant')}
        />
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
  input: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    height: 60,
    fontSize: 40,
    justifyContent: 'center',
    marginLeft: 20,
  },
  buttonView: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default Recipe;
