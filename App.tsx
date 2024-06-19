// App.tsx
import React from 'react';
import Screens from './screens/Screens';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App: React.FC = () => {
  return (
    <SafeAreaProvider>
  <NavigationContainer>
      <Screens />;
  </NavigationContainer>
  </SafeAreaProvider>
  );

};

export default App;
