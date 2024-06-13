// MenuButtons.tsx
import React from 'react';
import { View } from 'react-native';
import NavButton from './NavButton';
import { ParamList } from '../types';
import { globalStyles } from '../styles';

const buttons = [
  { textKey: 'myClocks', destination: 'ClockPage' as keyof ParamList, icon: require('../assets/clock-solid.png') },
  { textKey: 'counselling', destination: 'CounsellingPage' as keyof ParamList, icon: require('../assets/comment-solid.png') },
  { textKey: 'accountability', destination: 'SocialPage' as keyof ParamList, icon: require('../assets/circle-nodes-solid.png') },
  { textKey: 'encourage', destination: 'EncouragePage' as keyof ParamList, icon: require('../assets/flag-solid.png') },
  { textKey: 'journal', destination: 'JournalPage' as keyof ParamList, icon: require('../assets/bookmark-solid.png') },
  { textKey: 'resources', destination: 'ResourcesPage' as keyof ParamList, icon: require('../assets/book-open-solid.png') },
  { textKey: 'settings', destination: 'SettingsPage' as keyof ParamList, icon: require('../assets/sliders-solid.png') },
  { textKey: 'refocus', destination: 'RefocusPage' as keyof ParamList, icon: require('../assets/bullseye-solid.png') },
];

const chunkArray = (array: typeof buttons, chunkSize: number) => {
  const chunks = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
};

const MenuButtons: React.FC = () => {
  const buttonRows = chunkArray(buttons, 2);

  return (
    <View style={globalStyles.grid}>
      {buttonRows.map((row, rowIndex) => (
        <View key={rowIndex} style={globalStyles.gridRow}>
          {row.map((button) => (
            <NavButton
              key={button.textKey}
              destination={button.destination}
              textKey={button.textKey}
              icon={button.icon}
            />
          ))}
        </View>
      ))}
    </View>
  );
};

export default MenuButtons;
