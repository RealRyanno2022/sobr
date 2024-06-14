import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, ScrollView, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { globalStyles } from '../../styles/globalStyles';
import JournalIntros from './JournalIntros';
import { JournalEntry, GroupedEntries } from '../../types';
import { dummyJournalEntries } from '../../dummyJournalData'; // Import the dummy data

const JournalPage: React.FC = () => {
  const navigation = useNavigation();
  const [journalEntries, setJournalEntries] = useState<JournalEntry[]>([]);

  useEffect(() => {
    initializeDatabase();
    loadJournalEntries();
  }, []);

  const loadJournalEntries = () => {
    // For testing, use the dummy data instead of fetching from the database
    setJournalEntries(dummyJournalEntries);
  };

  const groupByMonth = (entries: JournalEntry[]): GroupedEntries => {
    return entries.reduce((acc, entry) => {
      const month = new Date(entry.date).toLocaleString('default', { month: 'long', year: 'numeric' });
      if (!acc[month]) acc[month] = [];
      acc[month].push(entry);
      return acc;
    }, {} as GroupedEntries);
  };

  const groupedEntries = groupByMonth(journalEntries);

  return (
    <View style={globalStyles.journalContainer}>
      <View style={globalStyles.journalTopBar}>
        <TouchableOpacity onPress={() => navigation.navigate('MenuScreen')}>
          <Text style={globalStyles.journalBackButton}>X</Text>
        </TouchableOpacity>
        <Text style={globalStyles.journalTitle}>Journal</Text>
      </View>
      <ScrollView>
        <JournalIntros groupedEntries={groupedEntries} navigation={navigation} />
      </ScrollView>
      <TouchableOpacity
        style={globalStyles.journalFloatingButton}
        onPress={() => navigation.navigate('CreateJournalEntryPage')}
      >
        <Text style={globalStyles.journalPlusIcon}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default JournalPage;
