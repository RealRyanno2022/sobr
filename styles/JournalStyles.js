import { StyleSheet } from 'react-native';

export const journalStyles = StyleSheet.create({
  journalContainer: { flex: 1, padding: 10 },
  journalTopBar: { flexDirection: 'row', alignItems: 'center', padding: 10, backgroundColor: '#fff' },
  journalBackButton: { fontSize: 24 },
  journalMonthSeparator: { padding: 10, backgroundColor: '#f0f0f0' },
  journalEntryContainer: { flexDirection: 'row', padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' },
  journalDateContainer: { marginRight: 10, alignItems: 'center' },
});
