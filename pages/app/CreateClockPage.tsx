// pages/CreateClockPage.tsx
import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { globalStyles } from '../../styles/globalStyles';

interface CreateClockPageProps {
  // Define any props if needed, otherwise leave it empty
}

const CreateClockPage: React.FC<CreateClockPageProps> = () => (
  <SafeAreaView style={globalStyles.container}>
    <Text style={globalStyles.paragraph}>Create Clock Page</Text>
  </SafeAreaView>
);

export default CreateClockPage;
