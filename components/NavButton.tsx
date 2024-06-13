// NavButton.tsx
import React from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ParamList } from '../types';
import { globalStyles } from '../styles';

interface NavButtonProps {
  destination: keyof ParamList;
  textKey: string;
  icon: any;
}

const NavButton: React.FC<NavButtonProps> = ({ destination, textKey, icon }) => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamList>>();

  return (
    <TouchableOpacity
      style={globalStyles.navButton}
      onPress={() => navigation.navigate(destination)}
    >
      <Image source={icon} style={globalStyles.icon} />
      <Text style={globalStyles.buttonText}>{textKey}</Text>
    </TouchableOpacity>
  );
};

export default NavButton;
