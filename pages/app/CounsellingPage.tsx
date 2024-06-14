import React from 'react';
import { SafeAreaView, Text, View, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { globalStyles } from '../../styles';
import { CounsellingPageProps } from '../../pagetypes';
import CounsellingText from '../../components/CounsellingText'

const CounsellingPage: React.FC<CounsellingPageProps> = ({ navigation }) => (
  <SafeAreaView style={globalStyles.container}>
    <ScrollView>
    {/* Top Navigation Bar */}
      <CounsellingText navigation={navigation} />
    </ScrollView>
  </SafeAreaView>
);


export default CounsellingPage;
