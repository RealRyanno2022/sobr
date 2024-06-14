import { ReactNode } from 'react';
import { RouteProp } from '@react-navigation/native';
import { NavigationProp } from '@react-navigation/native';

// Define navigation parameters
export type RootStackParamList = {
  SplashScreen: undefined;
  ClockPage: undefined;
  CounsellingPage: undefined;
  SocialPage: undefined;
  EncouragePage: undefined;
  JournalPage: undefined;
  ResourcesPage: undefined;
  SettingsPage: undefined;
  RefocusPage: undefined;
  MenuScreen: undefined;
  CreateJournalEntryPage: { entry?: JournalEntry }; // Update here
  JournalEntryPage: { entry: JournalEntry };
};
// GradientBackgroundProps for component props
export type GradientBackgroundProps = {
  children: ReactNode;
};

// MenuSignProps for component props
export type MenuSignProps = {
  icon: any;
};

// MenuButtonProps for component props
export type MenuButtonProps = {
  textKey: string;
  destination: keyof RootStackParamList;
  icon: any;
};

// JournalIntrosProps for component props
export interface JournalIntrosProps {
  groupedEntries: GroupedEntries;
  navigation: {
    navigate: <T extends keyof RootStackParamList>(screen: T, params?: RootStackParamList[T]) => void;
  };
}

export interface JournalEntry {
  id: number;
  title: string;
  content: string;
  date: string;
}

export interface GroupedEntries {
  [month: string]: JournalEntry[];
}

export interface JournalIntrosProps {
  groupedEntries: GroupedEntries;
  navigation: NavigationProp<RootStackParamList>;
}


// Navigation prop for a screen
export type NavigationProps<T extends keyof RootStackParamList> = {
  route: RouteProp<RootStackParamList, T>;
  navigation: {
    navigate: <K extends keyof RootStackParamList>(screen: K, params?: RootStackParamList[K]) => void;
    goBack: () => void;
  };
};
