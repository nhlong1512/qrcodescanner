/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Dialog, Portal} from 'react-native-paper';

interface Props {
  qrItem: string;
  QRList: string[];
  setQRList: React.Dispatch<React.SetStateAction<string[]>>;
}

const QRField = ({qrItem, QRList, setQRList}: Props) => {
  const [visible, setVisible] = React.useState(false);
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  const onDeleteQRField = () => {
    showDialog();
  };

  const handleDeleteQRField = () => {
    setQRList(QRList.filter(item => item !== qrItem));
  };
  return (
    <View>
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>Delete QR Code</Dialog.Title>
          <Dialog.Content>
            <Text>Are you sure you want to delete this QR Code?</Text>
          </Dialog.Content>

          <Dialog.Actions style={{gap: 20}}>
            <Button onPress={hideDialog} color="#841584" title="Cancel" />
            <Button onPress={handleDeleteQRField} color="#841584" title="Yes" />
          </Dialog.Actions>
        </Dialog>
      </Portal>
      <View
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
          } as any}>
          {qrItem}
        </Text>
        <TouchableOpacity onPress={onDeleteQRField}>
          <Image
            style={{width: 30, height: 30}}
            source={require('../assets/icons/deleteIcon.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default QRField;

const styles = StyleSheet.create({});
