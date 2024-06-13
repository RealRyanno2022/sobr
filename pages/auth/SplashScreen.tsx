





import { SafeAreaView, Text } from 'react-native';
import { globalStyles } from '../../styles';
import  NavButton  from '../../components/NavButton';
import { SplashScreenProps } from '../../types';

const SplashScreen: React.FC<SplashScreenProps> = ({ navigation }) => (
  <SafeAreaView style={globalStyles.container}>
    <Text style={globalStyles.paragraph}>Splash Screen</Text>
    <NavButton navigation={navigation} destination="SplashScreen" textKey='UNASSIGNED' />
  </SafeAreaView>
);

export default SplashScreen;

