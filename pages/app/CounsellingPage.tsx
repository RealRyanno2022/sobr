import React from 'react';
import { SafeAreaView, Text, View, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { globalStyles } from '../../styles';
import { CounsellingPageProps } from '../../pagetypes';

const CounsellingPage: React.FC<CounsellingPageProps> = ({ navigation }) => (
  <SafeAreaView style={globalStyles.container}>
    {/* Top Navigation Bar */}
    <View style={styles.topBar}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.backButton}>X</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Counseling</Text>
    </View>

    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.contentContainer}>
        {/* Image Section */}
        <Image
          source={{ uri: 'https://example.com/path-to-image.jpg' }} // Replace with actual image URI or local image
          style={styles.profileImage}
        />

        {/* Introduction Text */}
        <Text style={styles.headerText}>I hope this is helpful</Text>
        <Text style={styles.bodyText}>
          Hi, I’m Parker, the creator of Nomo. I’ve used BetterHelp for online counseling to support my recovery,
          and it was incredibly helpful for me, so it might be helpful for you too. If you’re struggling, BetterHelp
          can connect you with a licensed counselor in your area who specializes in addiction recovery.
        </Text>
        <Text style={styles.bodyText}>
          You can schedule texts, calls, or video chats with your therapist—whatever and whenever works best for you.
          It’s also about 50% less expensive than in-person counseling.
        </Text>
        <Text style={styles.bodyText}>
          So, if you think this might be helpful for you, even if it’s just for a month, you should give it a try. Nomo
          users get 20% off, which is nice :) Just tap the button to get started with their quick questionnaire.
        </Text>

        {/* Action Button */}
        <TouchableOpacity style={styles.actionButton} onPress={() => navigation.navigate('BetterHelpLink')}>
          <Text style={styles.actionButtonText}>Take the next step</Text>
        </TouchableOpacity>

        {/* Disclaimer */}
        <Text style={styles.disclaimerText}>
          For the sake of transparency, as a BetterHelp partner, I receive compensation when you become a member. It's
          a win/win because you get a counselor and it helps me offset the costs of running Nomo as an independent developer. 
        </Text>
      </View>
    </ScrollView>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 4,
  },
  backButton: {
    fontSize: 24,
    color: 'black',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Segoe UI',
  },
  scrollViewContent: {
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  contentContainer: {
    alignItems: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
    borderColor: 'blue',
    borderWidth: 4,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
    fontFamily: 'Segoe UI',
  },
  bodyText: {
    fontSize: 13,
    textAlign: 'center',
    marginBottom: 16,
    fontFamily: 'Segoe UI',
  },
  actionButton: {
    backgroundColor: 'blue',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 24,
    marginTop: 16,
    marginBottom: 32,
  },
  actionButtonText: {
    fontSize: 13,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Segoe UI',
  },
  disclaimerText: {
    fontSize: 13,
    textAlign: 'center',
    color: 'gray',
    fontFamily: 'Segoe UI',
    paddingHorizontal: 10,
  },
});

export default CounsellingPage;
