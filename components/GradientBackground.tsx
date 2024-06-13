import React, { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface GradientBackgroundProps {
  children: ReactNode;
}

const GradientBackground: React.FC<GradientBackgroundProps> = ({ children }) => (
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
