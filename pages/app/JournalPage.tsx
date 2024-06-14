import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, ScrollView, Text } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { globalStyles } from '../../styles/globalStyles';
import JournalIntros from '../../components/JournalIntros';
import { JournalEntry, GroupedEntries, RootStackParamList } from '../../types';
import { fetchJournalEntries, initializeDatabase } from '../../dbconfig/dbjournalconfig';
// import { dummyJournalEntries } from '../../debug/dummyjournalentries'; // Uncomment for testing

const JournalPage: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [journalEntries, setJournalEntries] = useState<JournalEntry[]>([]);

  useEffect(() => {
    initializeDatabase();
    loadJournalEntries();
  }, []);

  const loadJournalEntries = () => {
    fetchJournalEntries((entries: JournalEntry[]) => {
      if (entries && entries.length > 0) {
        setJournalEntries(entries);
      } else {
        console.warn('No journal entries found or empty entries.');
        setJournalEntries([]); // Ensure it's set to an empty array
      }
    });

    // For testing, use the dummy data instead of fetching from the database
    // setJournalEntries(dummyJournalEntries);
  };

  const groupByMonth = (entries: JournalEntry[]): GroupedEntries => {
    return entries.reduce((acc, entry) => {
      if (entry.date) { // Ensure date exists
        const date = new Date(entry.date);
        const month = date.toLocaleString('default', { month: 'long', year: 'numeric' });
        if (!acc[month]) acc[month] = [];
        acc[month].push(entry);
      }
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
      {journalEntries.length === 0 ? (
        <View style={globalStyles.emptyMessageContainer}>
          <Text style={globalStyles.emptyMessageText}>No journal entries available. Start by creating one!</Text>
        </View>
      ) : (
        <ScrollView>
          <JournalIntros groupedEntries={groupedEntries} navigation={navigation} />
        </ScrollView>
      )}
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
