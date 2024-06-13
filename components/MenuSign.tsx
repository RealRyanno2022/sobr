// components/MenuSign.tsx
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { globalStyles } from '../styles';
import { translations } from '../languages/translations';

interface MenuSignProps {
  textKey: string;
}

const MenuSign: React.FC<MenuSignProps> = ({ textKey }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{translations[textKey] || textKey}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20, // Adjust as needed
    alignItems: 'center',
    marginBottom: 20, // Add spacing below the sign
  },
  text: {
    fontSize: 36, // Large font size
    fontWeight: 'bold',
    color: '#3498db', // Color matching your theme
  },
});

export default MenuSign;
