// pages/SocialPage.tsx
import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { globalStyles } from '../../styles';
import { SocialPageProps } from '../../pagetypes';

const SocialPage: React.FC<SocialPageProps> = () => (
  <SafeAreaView style={globalStyles.container}>
    <Text style={globalStyles.paragraph}>Social Page</Text>
  </SafeAreaView>
);

export default SocialPage;
