import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/globalStyles.js';
import PropTypes from 'prop-types';
import { JournalIntrosProps, JournalEntry } from '../types';

const JournalIntros: React.FC<JournalIntrosProps> = ({ groupedEntries, navigation }) => {
  if (!groupedEntries || Object.keys(groupedEntries).length === 0) {
    return (
      <View style={globalStyles.emptyMessageContainer}>
        <Text style={globalStyles.emptyMessageText}>No journal entries to display.</Text>
      </View>
    );
  }

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


export default JournalIntros;
