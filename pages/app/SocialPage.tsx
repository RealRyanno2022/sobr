// pages/SocialPage.tsx
import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { globalStyles } from '../../styles';

const SocialPage: React.FC = () => (
  <SafeAreaView style={globalStyles.container}>
    <Text style={globalStyles.paragraph}>Social Page</Text>
  </SafeAreaView>
);

export default SocialPage;
