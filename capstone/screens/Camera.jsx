import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect} from 'react';
import Round from '../components/Round';
import {Camera, useCameraDevices} from 'react-native-vision-camera';
import MyButton from '../components/Button';

function CameraScreen({navigation}) {
  const devices = useCameraDevices();
  const device = devices.back;

  const initCamera = async () => {
    await Camera.requestCameraPermission();
  };

  useEffect(() => {
    initCamera();
  }, []);

  const CameraView = () => {
    if (null == device) {
      return <ActivityIndicator size={'large'} color="#0000ff" />;
    }
    return (
      <Camera style={StyleSheet.absoluteFill} device={device} isActive={true} />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cView}>{CameraView()}</View>
      <View style={styles.buttonView}>
        <Round title="" onPress={() => navigation.navigate('Foodresult')} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    textAlign: 'center',
    justifyContent: 'flex-start',
  },
  buttonView: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cView: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CameraScreen;
