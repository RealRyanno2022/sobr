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
  menuLogo: {
    height: 150,
    width: 150,
  },
  menuSign: {
    height: 150,
    width: 150,
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
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 4,
  },
  backButton: {
    fontSize: 24,
    color: 'black',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Segoe UI',
  },
  scrollViewContent: {
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  contentContainer: {
    alignItems: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
    borderColor: 'blue',
    borderWidth: 4,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
    fontFamily: 'Segoe UI',
  },
  bodyText: {
    fontSize: 13,
    textAlign: 'center',
    marginBottom: 16,
    fontFamily: 'Segoe UI',
  },
  actionButton: {
    backgroundColor: 'blue',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 24,
    marginTop: 16,
    marginBottom: 32,
  },
  actionButtonText: {
    fontSize: 13,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Segoe UI',
  },
  disclaimerText: {
    fontSize: 13,
    textAlign: 'center',
    color: 'gray',
    fontFamily: 'Segoe UI',
    paddingHorizontal: 10,
  },
});
