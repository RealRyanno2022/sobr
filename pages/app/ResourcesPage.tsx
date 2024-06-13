// pages/ResourcesPage.tsx
import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { globalStyles } from '../../styles';

const ResourcesPage: React.FC = () => (
  <SafeAreaView style={globalStyles.container}>
    <Text style={globalStyles.paragraph}>Resources Page</Text>
  </SafeAreaView>
);

export default ResourcesPage;
