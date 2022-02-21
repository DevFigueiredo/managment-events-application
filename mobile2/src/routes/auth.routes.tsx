import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Auth } from "@screens/Auth";
import { Home } from "@screens/Home";

const { Navigator, Screen } = createNativeStackNavigator();

export function AuthRoutes() {

  return (
    <Navigator
      initialRouteName="Auth"
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen
        name="Auth"
        component={Auth}
        options={{
          headerShown: false
        }}
      />
      {/* <Screen
        name="Home"
        component={Home}
        options={{
          title: "Nossos Eventos",
          headerBackVisible: false,
          headerShown: true,
          headerStyle: {
            backgroundColor: '#2B2F3A',
          },
          headerTintColor: '#E4EDF6',
          headerTitleStyle: {
            fontFamily: 'Inter_700Bold'
          },
          headerTitleAlign: 'center'


        }}

      /> */}

    </Navigator>
  );
}