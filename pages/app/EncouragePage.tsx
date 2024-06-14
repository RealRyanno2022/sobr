// pages/EncouragePage.tsx
import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { globalStyles } from '../../styles/globalStyles';
import { EncouragePageProps } from '../../pagetypes';

const EncouragePage: React.FC<EncouragePageProps> = () => (
  <SafeAreaView style={globalStyles.container}>
    <Text style={globalStyles.paragraph}>Encourage Page</Text>
  </SafeAreaView>
);

export default EncouragePage;
