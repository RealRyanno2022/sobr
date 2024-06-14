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
  CreateJournalPage: undefined;
  JournalEntryPage: undefined;
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
  navigation: {
    navigate: (screen: string, params?: object) => void;
  };
}
