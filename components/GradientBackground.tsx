// GradientBackground.tsx
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export const GradientBackground: React.FC = ({ children }) => (
  <View style={StyleSheet.absoluteFillObject}>
    <LinearGradient
      colors={['#ffffff', '#C0C0C0', '#C0C0C0']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={StyleSheet.absoluteFillObject}
    >
      {children}
    </LinearGradient>
  </View>
);

export default GradientBackground;
