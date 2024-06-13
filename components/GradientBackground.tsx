
import { LinearGradient } from 'react-native-linear-gradient';
import { globalStyles } from '../styles';
export const GradientBackground: React.FC = () => (
  <LinearGradient
    colors={['#29D3E1', '#1B8EDA', '#7753DE']}
    start={{ x: 0, y: 0 }}
    end={{ x: 0, y: 1 }}
    style={globalStyles.gradient}
  >
  </LinearGradient>
);


export default GradientBackground;