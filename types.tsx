// types.ts
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type ParamList = {
  SplashScreen: undefined; // Correct usage without quotes
  Details: undefined; // Replace with actual params if needed
  ClockPage: undefined;
  CounsellingPage: undefined;
  SocialPage: undefined;
  EncouragePage: undefined;
  JournalPage: undefined;
  ResourcesPage: undefined;
  SettingsPage: undefined;
  RefocusPage: undefined;
  MenuScreen: undefined;
};

export type MenuScreenProps = {
  icon: any;
  navigation: NativeStackNavigationProp<ParamList, 'MenuScreen'>;
}

// Define prop types for your screens
export type SplashScreenProps = {
  navigation: NativeStackNavigationProp<ParamList, 'SplashScreen'>;
};

export type NavButtonProps = {
  navigation: NativeStackNavigationProp<ParamList>;
  textKey: string;
  destination: keyof ParamList;
  icon: any;
};

export type MenuSignProps = {
  icon: any;
}
