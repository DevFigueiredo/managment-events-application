import React, { useEffect, useState } from "react";
import { NavigationContainer } from '@react-navigation/native';

import { AuthRoutes } from './auth.routes';
import { ScreensRoutes } from "./screens.routes";
import auth from '@react-native-firebase/auth';

function RoutesAuth() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user: any) {
    setUser(user);
    if (initializing) setInitializing(false);
  }
  useEffect(() => {
    auth().onAuthStateChanged(onAuthStateChanged);
  }, []);

  return (
    <NavigationContainer>
      {!user ? (<AuthRoutes />) : <ScreensRoutes />}
    </NavigationContainer>
  );

}

export { RoutesAuth }