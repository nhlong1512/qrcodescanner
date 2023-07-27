/* eslint-disable prettier/prettier */
/* eslint-disable no-alert */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Alert,
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Dialog, PaperProvider, Portal} from 'react-native-paper';

interface Props {
  route: any;
  navigation: any;
}

const QRFieldListScreen = ({route, navigation}: Props) => {
  const [visible, setVisible] = React.useState(false);
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  const onPressScan = () => {
    navigation.navigate('ScanQRCode');
  };

  const data = route.params?.data;
  const [QRList, setQRList] = useState<string[]>([]);
  const [isExist, setIsExist] = useState<boolean>(false);
  useEffect(() => {
    if (!data) {
      return;
    }
    console.log('data', data);
    console.log('TrueFalse', QRList.includes(data));
    if (QRList.includes(data)) {
      console.log('dataInclude', data);
      setIsExist(true);
      setVisible(true);
    } else {
      setIsExist(false);
      setVisible(true);
      setQRList([...QRList, data]);
    }
  }, [data]);

  console.log('QRList', QRList);

  return (
    <PaperProvider>
      <View style={{marginRight: 10, marginLeft: 10, paddingTop: 20}}>
        {/* <Button
          onPress={showDialog}
          title="
          Show dialog"
        /> */}
        <Portal>
          <Dialog visible={visible} onDismiss={hideDialog}>
            <Dialog.Title>Alert</Dialog.Title>
            <Dialog.Content>
              <Text variant="bodyMedium">
                {isExist ? `QR code is exist` : `QR code is added`}
              </Text>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={hideDialog} color="#841584" title="Done" />
            </Dialog.Actions>
          </Dialog>
        </Portal>
        <View style={{marginBottom: 20}}>
          <Text style={{fontSize: 28, fontWeight: 700}}>QR Code Lists</Text>
        </View>
        <View style={{marginBottom: 20}}>
          <Button
            onPress={onPressScan}
            title="Scan QR Code"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
        <ScrollView>
          <View style={{marginBottom: 20}}>
            {QRList.map((qrItem, qrIndex) => (
              <View
                key={qrItem}
                style={{
                  backgroundColor: '#e7dfdf',
                  padding: 20,
                  marginBottom: 10,
                  borderRadius: 10,
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    color: '#841584',
                    fontWeight: 500,
                    maxWidth: '80%',
                  }}>
                  {qrItem}
                </Text>
                <TouchableOpacity>
                  <Image
                    style={{width: 30, height: 30}}
                    source={require('../assets/icons/deleteIcon.png')}
                  />
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </PaperProvider>
  );
};

export default QRFieldListScreen;
