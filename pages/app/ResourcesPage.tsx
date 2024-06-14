// pages/ResourcesPage.tsx
import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { globalStyles } from '../../styles/globalStyles';
import { ResourcesPageProps } from '../../pagetypes';

const ResourcesPage: React.FC<ResourcesPageProps> = () => (
  <SafeAreaView style={globalStyles.container}>
    <Text style={globalStyles.paragraph}>Resources Page</Text>
  </SafeAreaView>
);

export default ResourcesPage;
