// pages/ClockPage.tsx
import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { globalStyles } from '../../styles';
import { ClockPageProps } from '../../pagetypes';

const ClockPage: React.FC<ClockPageProps> = () => (
  <SafeAreaView style={globalStyles.container}>
    <Text style={globalStyles.paragraph}>Clock Page</Text>
  </SafeAreaView>
);

export default ClockPage;
