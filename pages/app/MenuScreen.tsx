// MenuScreen.tsx
import React from 'react';
import { View, ScrollView } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ParamList } from '../../types';
import { globalStyles } from '../../styles';
import MenuSign from '../../components/MenuSign'; 
import GradientBackground from '../../components/GradientBackground';
import MenuButtons from '../../components/MenuButtons';

interface MenuScreenProps {
  navigation: NativeStackNavigationProp<ParamList>;
}

const MenuScreen: React.FC<MenuScreenProps> = ({ navigation }) => {
  return (
    <View style={globalStyles.container}>
      <GradientBackground>
        <ScrollView>
          <MenuSign icon={require('../../assets/logo.png')} />
          <MenuButtons />
        </ScrollView>
      </GradientBackground>
    </View>
  );
};

export default MenuScreen;
