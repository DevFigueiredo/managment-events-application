import 'react-native-gesture-handler';

import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useFonts, Inter_400Regular, Inter_700Bold, Inter_900Black } from '@expo-google-fonts/inter';
import { RoutesAuth } from './src/routes';
import theme from './src/theme';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { Settings } from 'react-native-fbsdk-next';
import { Text, View } from 'react-native';


export default function App() {


  GoogleSignin.configure({
    webClientId: '276871081616-auiei0p8e8psv6sl31lknd7vs2733q2a.apps.googleusercontent.com'
  });
  Settings.setAppID('1637971959890893')
  Settings.initializeSDK()

  const [fontsLoaded] = useFonts({
    Inter_700Bold,
    Inter_900Black,
    Inter_400Regular
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }



  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider theme={theme}>
        <StatusBar style="dark" translucent backgroundColor="transparent" />
        <RoutesAuth />
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}