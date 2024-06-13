// MenuScreen.tsx
import React from 'react';
import { View, ScrollView } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ParamList } from '../../types';
import { globalStyles } from '../../styles';
import NavButton from '../../components/NavButton';
import MenuSign from '../../components/MenuSign'; 
import GradientBackground from '../../components/GradientBackground';

interface MenuScreenProps {
  navigation: NativeStackNavigationProp<ParamList>;
}

const MenuScreen: React.FC<MenuScreenProps> = ({ navigation }) => {
  const buttons = [
    { textKey: 'myClocks', destination: 'ClockPage' },
    { textKey: 'counselling', destination: 'CounsellingPage' },
    { textKey: 'accountability', destination: 'SocialPage' },
    { textKey: 'encourage', destination: 'EncouragePage' },
    { textKey: 'journal', destination: 'JournalPage' },
    { textKey: 'resources', destination: 'ResourcesPage' },
    { textKey: 'settings', destination: 'SettingsPage' },
    { textKey: 'refocus', destination: 'RefocusPage' },
  ];

  const testIcon = require('../../assets/logo.png');
  const testNavIcon = require('../../assets/test.png')

  return (
    <View style={globalStyles.container}>
      <GradientBackground />
      <ScrollView contentContainerStyle={globalStyles.scrollContent}>
        <MenuSign icon={testIcon} />
        <View style={globalStyles.grid}>
          {buttons.map((button, index) => {
            if (index % 2 === 0) {
              return (
                <View key={index} style={globalStyles.gridRow}>
                  <NavButton
                    navigation={navigation}
                    destination={button.destination as keyof ParamList}
                    textKey={button.textKey}
                    icon={testNavIcon}
                  />
                  {index + 1 < buttons.length && (
                    <NavButton
                      navigation={navigation}
                      destination={buttons[index + 1].destination as keyof ParamList}
                      textKey={buttons[index + 1].textKey}
                      icon={testNavIcon}
                    />
                  )}
                </View>
              );
            }
            return null;
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default MenuScreen;
