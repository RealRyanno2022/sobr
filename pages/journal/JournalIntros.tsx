import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { globalStyles } from '../../styles/globalStyles';
import PropTypes from 'prop-types';
import { JournalIntrosProps, JournalEntry } from '../../types';

// Define the component
const JournalIntros: React.FC<JournalIntrosProps> = ({ groupedEntries, navigation }) => {
  return (
    <>
      {Object.entries(groupedEntries).map(([month, entries]) => (
        <View key={month}>
          <View style={globalStyles.journalMonthSeparator}>
            <Text style={globalStyles.journalMonthText}>{month}</Text>
          </View>
          {entries.map((entry: JournalEntry) => (
            <TouchableOpacity
              key={entry.id}
              onPress={() => navigation.navigate('JournalEntryPage', { entry })}
            >
              <View style={globalStyles.journalEntryContainer}>
                <View style={globalStyles.journalDateContainer}>
                  <Text style={globalStyles.journalDayText}>
                    {new Date(entry.date).toLocaleDateString('en-US', { weekday: 'short' })}
                  </Text>
                  <Text style={globalStyles.journalDateText}>
                    {new Date(entry.date).getDate()}
                  </Text>
                </View>
                <View style={globalStyles.journalEntryContent}>
                  <Text style={globalStyles.journalEntryTitle}>{entry.title}</Text>
                  <Text style={globalStyles.journalEntrySnippet}>
                    {entry.content.split('\n').slice(0, 5).join('\n')}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </>
  );
};

// Optional: Add prop types for validation
JournalIntros.propTypes = {
  groupedEntries: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

export default JournalIntros;
