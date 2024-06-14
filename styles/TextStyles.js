import { StyleSheet } from 'react-native';

export const textStyles = StyleSheet.create({
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonText: {
    color: '#000',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  bodyText: {
    fontSize: 13,
    textAlign: 'center',
    marginBottom: 16,
    fontFamily: 'Segoe UI',
  },
  disclaimerText: {
    fontSize: 13,
    textAlign: 'center',
    color: 'gray',
    fontFamily: 'Segoe UI',
    paddingHorizontal: 10,
  },
  journalDayText: { fontSize: 16 },
  journalDateText: { fontSize: 24 },
  journalEntryTitle: { fontSize: 16, fontWeight: 'bold' },
  journalEntrySnippet: { fontSize: 14, color: '#555' },
  journalMonthText: { fontSize: 16, fontWeight: 'bold' },
  journalTitle: { flex: 1, textAlign: 'center', fontSize: 18, fontWeight: 'bold' },
  journalDate: { textAlign: 'center', fontSize: 14, color: '#555', marginVertical: 10 },
  journalEntryTitle: { fontSize: 22, fontWeight: 'bold', marginVertical: 10 },
  journalEntryContent: { fontSize: 16, marginVertical: 10 },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
    fontFamily: 'Segoe UI',
  },
});
