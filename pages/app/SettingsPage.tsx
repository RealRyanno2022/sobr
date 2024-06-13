// pages/SettingsPage.tsx
import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { globalStyles } from '../../styles';

const SettingsPage: React.FC = () => (
  <SafeAreaView style={globalStyles.container}>
    <Text style={globalStyles.paragraph}>Settings Page</Text>
  </SafeAreaView>
);

export default SettingsPage;
