// types.ts
import { ReactNode } from 'react';

export type ParamList = {
  SplashScreen: undefined;
  Details: undefined;
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

export type GradientBackgroundProps = {
  children: ReactNode;
};

export type MenuSignProps = {
  icon: any;
};

export type MenuButtonProps = {
  textKey: string;
  destination: keyof ParamList;
  icon: any;
};


// Define the types for props
export interface JournalEntry {
  id: number;
  title: string;
  content: string;
  date: string;
}

export interface JournalIntrosProps {
  groupedEntries: Record<string, JournalEntry[]>;
  navigation: any; // Adjust this if you have specific navigation types
}

export type JournalIntrosProps {
  groupedEntries: GroupedEntries;
  navigation: any; // Use `any` if using React Navigation's navigate function, otherwise replace with the proper type
}
