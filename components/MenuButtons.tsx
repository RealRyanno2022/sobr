// MenuButtons.tsx
import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import { globalStyles } from '../styles/globalStyles';

const buttons = [
  { textKey: 'myClocks', destination: 'ClockPage' as keyof RootStackParamList, icon: require('../assets/clock-solid.png') },
  { textKey: 'counselling', destination: 'CounsellingPage' as keyof RootStackParamList, icon: require('../assets/comment-solid.png') },
  { textKey: 'accountability', destination: 'SocialPage' as keyof RootStackParamList, icon: require('../assets/circle-nodes-solid.png') },
  { textKey: 'encourage', destination: 'EncouragePage' as keyof RootStackParamList, icon: require('../assets/flag-solid.png') },
  { textKey: 'journal', destination: 'JournalPage' as keyof RootStackParamList, icon: require('../assets/bookmark-solid.png') },
  { textKey: 'resources', destination: 'ResourcesPage' as keyof RootStackParamList, icon: require('../assets/book-open-solid.png') },
  { textKey: 'settings', destination: 'SettingsPage' as keyof RootStackParamList, icon: require('../assets/sliders-solid.png') },
  { textKey: 'refocus', destination: 'RefocusPage' as keyof RootStackParamList, icon: require('../assets/bullseye-solid.png') },
];

const chunkArray = (array: typeof buttons, chunkSize: number) => {
  const chunks = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
};

const MenuButtons: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const buttonRows = chunkArray(buttons, 2);

  const handlePress = (destination: keyof RootStackParamList) => {
    navigation.navigate(destination);
  };

  return (
    <View style={globalStyles.grid}>
      {buttonRows.map((row, rowIndex) => (
        <View key={rowIndex} style={globalStyles.gridRow}>
          {row.map((button) => (
            <TouchableOpacity
              key={button.textKey}
              style={globalStyles.navButton}
              onPress={() => handlePress(button.destination)}
            >
              <Image source={button.icon} style={globalStyles.icon} />
              <Text style={globalStyles.buttonText}>{button.textKey}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </View>
  );
};

export default MenuButtons;
