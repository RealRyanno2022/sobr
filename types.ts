import { ReactNode } from 'react';
import { NavigationProp, RouteProp } from '@react-navigation/native';

// Define navigation parameters for each screen
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
  CreateJournalEntryPage: { entry?: JournalEntry };
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
  navigation: NavigationProp<RootStackParamList>;
}

// JournalEntry type
export interface JournalEntry {
  id: number;
  title: string;
  content: string;
  date: string;
}

// GroupedEntries type, grouping journal entries by month
export interface GroupedEntries {
  [month: string]: JournalEntry[];
}

// Props for the JournalPage component
export type JournalPageProps = {
  navigation: NavigationProp<RootStackParamList>;
}

// Navigation prop for a screen
export type NavigationProps<T extends keyof RootStackParamList> = {
  route: RouteProp<RootStackParamList, T>;
  navigation: NavigationProp<RootStackParamList>;
};
