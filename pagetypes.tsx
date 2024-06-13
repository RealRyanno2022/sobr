//pagetypes.tsx

import { ParamList } from './types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Prop types for each screen
export type SplashScreenProps = {
    navigation: NativeStackNavigationProp<ParamList, 'SplashScreen'>;
  };
  
  export type DetailsProps = {
    navigation: NativeStackNavigationProp<ParamList, 'Details'>;
  };
  
  export type ClockPageProps = {
    navigation: NativeStackNavigationProp<ParamList, 'ClockPage'>;
  };
  
  export type CounsellingPageProps = {
    navigation: NativeStackNavigationProp<ParamList, 'CounsellingPage'>;
  };
  
  export type SocialPageProps = {
    navigation: NativeStackNavigationProp<ParamList, 'SocialPage'>;
  };
  
  export type EncouragePageProps = {
    navigation: NativeStackNavigationProp<ParamList, 'EncouragePage'>;
  };
  
  export type JournalPageProps = {
    navigation: NativeStackNavigationProp<ParamList, 'JournalPage'>;
  };
  
  export type ResourcesPageProps = {
    navigation: NativeStackNavigationProp<ParamList, 'ResourcesPage'>;
  };
  
  export type SettingsPageProps = {
    navigation: NativeStackNavigationProp<ParamList, 'SettingsPage'>;
  };
  
  export type RefocusPageProps = {
    navigation: NativeStackNavigationProp<ParamList, 'RefocusPage'>;
  };
  
  export type MenuScreenProps = {
    navigation: NativeStackNavigationProp<ParamList, 'MenuScreen'>;
  };