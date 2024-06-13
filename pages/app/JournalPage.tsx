// pages/JournalPage.tsx
import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { globalStyles } from '../../styles';

const JournalPage: React.FC = () => (
  <SafeAreaView style={globalStyles.container}>
    <Text style={globalStyles.paragraph}>Journal Page</Text>
  </SafeAreaView>
);

export default JournalPage;
