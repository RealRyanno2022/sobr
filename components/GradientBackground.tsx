// GradientBackground.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { GradientBackgroundProps } from '../types';
import { globalStyles } from '../styles/globalStyles';

const GradientBackground: React.FC<GradientBackgroundProps> = ({ children }) => {
  return (
    <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']}>
      <View style={globalStyles.container}>
        {children}
      </View>
    </LinearGradient>
  );
};


export default GradientBackground;
