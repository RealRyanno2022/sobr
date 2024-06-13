// GradientBackground.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { GradientBackgroundProps } from '../types';
import { globalStyles } from '../styles';

const GradientBackground: React.FC<GradientBackgroundProps> = ({ children }) => {
  return (
    <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={globalStyles.gradient}>
      <View style={globalStyles.container}>
        {children}
      </View>
    </LinearGradient>
  );
};


export default GradientBackground;
