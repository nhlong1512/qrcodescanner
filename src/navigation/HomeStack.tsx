/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator, StackScreenProps} from '@react-navigation/stack';
import QRFieldListScreen from '../screens/QRFieldListScreen';
import ScanQRCodeScreen from '../screens/ScanQRCodeScreen';

const HomeStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen component={QRFieldListScreen} name="QRFieldList"  />
      <Stack.Screen component={ScanQRCodeScreen} name="ScanQRCode" />
    </Stack.Navigator>
  );
};

export default HomeStack;

const styles = StyleSheet.create({});
