// NavButton.tsx
import React from 'react';
import { TouchableOpacity, Text, View, Image, StyleSheet } from 'react-native';
import { NavButtonProps } from '../types';
import { globalStyles } from '../styles';
import { translations } from '../languages/translations';

const NavButton: React.FC<NavButtonProps> = ({ navigation, destination, textKey, icon }) => {
  return (
    <TouchableOpacity
      style={globalStyles.navButton}
      onPress={() => navigation.navigate(destination)}
    >
      <Image source={icon} style={globalStyles.icon} />
      <Text style={globalStyles.buttonText}>{translations[textKey] || textKey}</Text>
    </TouchableOpacity>
  );
};

export default NavButton;
