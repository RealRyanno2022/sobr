// App.tsx (or Screens.tsx)
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../pages/auth/SplashScreen';
import ClockPage from '../pages/app/ClockPage';
import CounsellingPage from '../pages/app/CounsellingPage';
import SocialPage from '../pages/app/SocialPage';
import EncouragePage from '../pages/app/EncouragePage';
import JournalPage from '../pages/app/JournalPage';
import ResourcesPage from '../pages/app/ResourcesPage';
import SettingsPage from '../pages/app/SettingsPage';
import RefocusPage from '../pages/app/RefocusPage';
import MenuScreen from '../pages/app/MenuScreen';
import { ParamList } from '../types';
import CreateJournalEntryPage from '../pages/journal/CreateJournalEntryPage';
import JournalEntryPage from '../pages/journal/JournalEntryPage';

const Stack = createNativeStackNavigator<ParamList>();

const Screens: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="JournalPage">
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="MenuScreen" component={MenuScreen} />
        <Stack.Screen name="ClockPage" component={ClockPage} />
        <Stack.Screen name="CounsellingPage" component={CounsellingPage} />
        <Stack.Screen name="SocialPage" component={SocialPage} />
        <Stack.Screen name="EncouragePage" component={EncouragePage} />
        <Stack.Screen name="JournalPage" component={JournalPage} />
        <Stack.Screen name="ResourcesPage" component={ResourcesPage} />
        <Stack.Screen name="SettingsPage" component={SettingsPage} />
        <Stack.Screen name="RefocusPage" component={RefocusPage} />


        <Stack.Screen name="CreateJournalEntryPage" component={CreateJournalEntryPage} />
        <Stack.Screen name="JournalEntryPage" component={JournalEntryPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Screens;
