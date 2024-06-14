import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');
const buttonWidth = (width - 40) / 2;

export const buttonStyles = StyleSheet.create({
  navButton: {
    width: buttonWidth,
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: 'transparent',
    borderRadius: 10,
    alignItems: 'center',
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
  journalFloatingButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  journalPlusIcon: { fontSize: 24, color: '#fff' },
  journalSaveButton: { backgroundColor: '#007bff', padding: 10, alignItems: 'center', borderRadius: 5 },
  journalSaveButtonText: { fontSize: 16, color: '#fff' },
});
