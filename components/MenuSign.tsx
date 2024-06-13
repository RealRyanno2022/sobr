// components/MenuSign.tsx
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import MenuSignHover from '../animations/MenuSignHover';
import { MenuSignProps } from '../types';
import { globalStyles } from '../styles';


const MenuSign: React.FC<MenuSignProps> = ({ icon }) => {
  return (
  
      <MenuSignHover>
        <Image source={icon} style={globalStyles.menuLogo} />
      </MenuSignHover>
  );
};

const styles = StyleSheet.create({

});

export default MenuSign;
