// components/MenuSign.tsx
import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { globalStyles } from '../styles';
import { MenuSignProps } from '../types';



const MenuSign: React.FC<MenuSignProps> = ({ icon }) => {
  return (
    <View style={styles.container}>
     <Image source={icon} style={globalStyles.icon} />
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
