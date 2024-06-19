//pagetypes.tsx

import { RootStackParamList } from './types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Prop types for each screen
export type SplashScreenProps = {
    navigation: NativeStackNavigationProp<RootStackParamList, 'SplashScreen'>;
  };
  
  export type ClockPageProps = {
    navigation: NativeStackNavigationProp<RootStackParamList, 'ClockPage'>;
  };
  
  export type CounsellingPageProps = {
    navigation: NativeStackNavigationProp<RootStackParamList, 'CounsellingPage'>;
  };
  
  export type SocialPageProps = {
    navigation: NativeStackNavigationProp<RootStackParamList, 'SocialPage'>;
  };
  
  export type EncouragePageProps = {
    navigation: NativeStackNavigationProp<RootStackParamList, 'EncouragePage'>;
  };
  
  export type JournalPageProps = {
    navigation: NativeStackNavigationProp<RootStackParamList, 'JournalPage'>;
  };
  
  export type ResourcesPageProps = {
    navigation: NativeStackNavigationProp<RootStackParamList, 'ResourcesPage'>;
  };
  
  export type SettingsPageProps = {
    navigation: NativeStackNavigationProp<RootStackParamList, 'SettingsPage'>;
  };
  
  export type RefocusPageProps = {
    navigation: NativeStackNavigationProp<RootStackParamList, 'RefocusPage'>;
  };
  
  export type MenuScreenProps = {
    navigation: NativeStackNavigationProp<RootStackParamList, 'MenuScreen'>;
  };