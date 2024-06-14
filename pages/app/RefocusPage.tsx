// pages/SettingsPage.tsx
import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { globalStyles } from '../../styles/globalStyles';
import { RefocusPageProps } from '../../pagetypes';

const SettingsPage: React.FC<RefocusPageProps> = () => (
  <SafeAreaView style={globalStyles.container}>
    <Text style={globalStyles.paragraph}>Settings Page</Text>
  </SafeAreaView>
);

export default SettingsPage;
