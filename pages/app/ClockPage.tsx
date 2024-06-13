// pages/ClockPage.tsx
import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { globalStyles } from '../../styles';

const ClockPage: React.FC = () => (
  <SafeAreaView style={globalStyles.container}>
    <Text style={globalStyles.paragraph}>Clock Page</Text>
  </SafeAreaView>
);

export default ClockPage;
