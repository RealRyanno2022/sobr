import { StyleSheet } from 'react-native';

export const journalStyles = StyleSheet.create({
  journalContainer: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 10,
  },
  journalTopBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    elevation: 2,
  },
  journalBackButton: {
    fontSize: 24,
    color: '#000',
  },
  journalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  emptyMessageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyMessageText: {
    fontSize: 16,
    color: '#777',
    textAlign: 'center',
  },
  journalFloatingButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: buttonSize,
    height: buttonSize,
    borderRadius: buttonSize / 2,
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  journalPlusIcon: {
    fontSize: 30,
    color: '#fff',
  },
  scrollViewContent: {
    paddingVertical: 20,
  },
  journalMonthSeparator: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 4,
    marginVertical: 5,
  },
  journalMonthText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  journalEntryContainer: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 4,
    marginVertical: 5,
    elevation: 1,
  },
  journalDateContainer: {
    marginRight: 10,
    alignItems: 'center',
  },
  journalDayText: {
    fontSize: 14,
    color: '#555',
  },
  journalDateText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  journalEntryContent: {
    flex: 1,
  },
  journalEntryTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  journalEntrySnippet: {
    fontSize: 14,
    color: '#666',
  },
});
