import React from 'react';
import { View, TouchableOpacity, Text, ScrollView, Image } from 'react-native';
import { globalStyles } from '../styles';

const CounselingComponent = ({ navigation:any }) => {
  return (
    <View>
    <View style={globalStyles.topBar}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={globalStyles.backButton}>X</Text>
      </TouchableOpacity>
      <Text style={globalStyles.title}>Counseling</Text>
    </View>
    <ScrollView contentContainerStyle={globalStyles.scrollViewContent}>
      <View style={globalStyles.contentContainer}>
        {/* Image Section */}
        <Image
          source={{ uri: 'https://example.com/path-to-image.jpg' }} // Replace with actual image URI or local image
          style={globalStyles.profileImage}
        />

        {/* Introduction Text */}
        <Text style={globalStyles.headerText}>I hope this is helpful</Text>
        <Text style={globalStyles.bodyText}>
          Hi, I’m Parker, the creator of Nomo. I’ve used BetterHelp for online counseling to support my recovery,
          and it was incredibly helpful for me, so it might be helpful for you too. If you’re struggling, BetterHelp
          can connect you with a licensed counselor in your area who specializes in addiction recovery.
        </Text>
        <Text style={globalStyles.bodyText}>
          You can schedule texts, calls, or video chats with your therapist—whatever and whenever works best for you.
          It’s also about 50% less expensive than in-person counseling.
        </Text>
        <Text style={globalStyles.bodyText}>
          So, if you think this might be helpful for you, even if it’s just for a month, you should give it a try. Nomo
          users get 20% off, which is nice :) Just tap the button to get started with their quick questionnaire.
        </Text>

        {/* Action Button */}
        <TouchableOpacity style={globalStyles.actionButton} onPress={() => navigation.navigate('BetterHelpLink')}>
          <Text style={globalStyles.actionButtonText}>Take the next step</Text>
        </TouchableOpacity>

        {/* Disclaimer */}
        <Text style={globalStyles.disclaimerText}>
          For the sake of transparency, as a BetterHelp partner, I receive compensation when you become a member. It's
          a win/win because you get a counselor and it helps me offset the costs of running Nomo as an independent developer. 
        </Text>
      </View>
    </ScrollView>
    </View>
  );
};

export default CounselingComponent;
