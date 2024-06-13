// pages/CounsellingPage.tsx
import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { globalStyles } from '../../styles';
import { CounsellingPageProps } from '../../pagetypes';
const CounsellingPage: React.FC<CounsellingPageProps> = () => (
  <SafeAreaView style={globalStyles.container}>
    <Text style={globalStyles.paragraph}>Counselling Page</Text>
  </SafeAreaView>
);

export default CounsellingPage;
