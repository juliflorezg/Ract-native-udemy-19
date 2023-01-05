import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Navigator} from './src/navigation/Navigator';
import {AuthContextProvider} from './src/context/AuthContext';
const App = () => {
  return (
    <NavigationContainer>
      <AuthContextProvider>
        <Navigator />
      </AuthContextProvider>
    </NavigationContainer>
  );
};

export default App;
