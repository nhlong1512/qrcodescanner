/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { useNavigation } from '@react-navigation/native';

interface Props {
  navigation: any;
}

interface dataObject {
  data: string;
}

const ScanQRCodeScreen = ({ navigation }: Props) => {

  const handleQRRead = ({data} : dataObject) => {

    console.log(data);
    // alert(data)
    navigation.navigate("QRFieldList",{data:data});
  };

  return (
    <QRCodeScanner
      // eslint-disable-next-line no-alert
      onRead={handleQRRead}
      reactivate={true}
      reactivateTimeout={1000}
      showMarker={true}
      // flashMode={RNCamera.Constants.FlashMode.torch}
    />
  );
};

export default ScanQRCodeScreen;

const styles = StyleSheet.create({});
