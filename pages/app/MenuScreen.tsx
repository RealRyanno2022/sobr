// MenuScreen.tsx
import React from 'react';
import { View, ScrollView } from 'react-native';
import { globalStyles } from '../../styles';
import MenuSign from '../../components/MenuSign'; 
import GradientBackground from '../../components/GradientBackground';
import MenuButtons from '../../components/MenuButtons';



// TODO: Fix the error that prevents page rendering



const MenuScreen: React.FC = () => {
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
