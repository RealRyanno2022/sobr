// types.ts
import { ReactNode } from "react";

// Define the parameter list for all screens
export type ParamList = {
  SplashScreen: undefined; // Define parameters if needed
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

// Define prop types for your screens

export type NavButtonProps = {
  textKey: string;
  destination: keyof ParamList;
  icon: any;
};

export type GradientBackgroundProps = {
  children: ReactNode;
}

export type MenuSignProps = {
  icon: any;
};