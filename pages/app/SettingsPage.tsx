// pages/SettingsPage.tsx
import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { globalStyles } from '../../styles/globalStyles';
import { SettingsPageProps } from '../../pagetypes';

const SettingsPage: React.FC<SettingsPageProps> = () => (
  <SafeAreaView style={globalStyles.container}>
    <Text style={globalStyles.paragraph}>Settings Page</Text>
  </SafeAreaView>
);

export default SettingsPage;
