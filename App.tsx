/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import QRFieldListScreen from './src/screens/QRFieldListScreen';
import ScanQRCodeScreen from './src/screens/ScanQRCodeScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="QRFieldList" component={QRFieldListScreen} />
        <Stack.Screen name="ScanQRCode" component={ScanQRCodeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
