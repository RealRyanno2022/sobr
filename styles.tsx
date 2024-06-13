// styles.ts
import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');
const buttonWidth = (width - 40) / 2; // Adjust width to fit two buttons per row with margins


export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    paddingHorizontal: 16,
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  gridRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 10,
  },
  navButton: {
    width: buttonWidth,
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: 'transparent',
    borderRadius: 10,
    alignItems: 'center',
  },
  icon: {
    width: 40, // Adjust size as needed
    height: 40,
    marginBottom: 10,
  },

  buttonText: {
    color: '#000', // Changed to match the sample image
    fontSize: 14, // Adjust to smaller size
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
