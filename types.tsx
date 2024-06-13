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
