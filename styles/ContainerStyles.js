import { StyleSheet } from 'react-native';

export const containerStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    paddingHorizontal: 16,
  },
  scrollViewContent: {
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  contentContainer: {
    alignItems: 'center',
  },
  emptyMessageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyMessageText: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'center',
  },
});
