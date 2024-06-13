import React from 'react';
import { View, Image } from 'react-native';
import { MenuSignProps } from '../types';
import { globalStyles } from '../styles';
import MenuSignHover from '../animations/MenuSignHover'; // Import the hover component

const MenuSign: React.FC<MenuSignProps> = ({ icon }) => {
  return (
    <MenuSignHover> 
      <View style={globalStyles.menuSign}>
        <Image source={icon} style={globalStyles.menuLogo} />
      </View>
    </MenuSignHover>
  );
};

export default MenuSign;
