import React from 'react';
import { View, Text, TouchableOpacity, Alert, ActionSheetIOS } from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { globalStyles } from '../../styles/globalStyles';
import { deleteJournalEntry } from '../../dbconfig/dbjournalconfig';
import { RootStackParamList } from '../../types';

// Define a type for route params
type JournalEntryPageRouteProp = RouteProp<RootStackParamList, 'JournalEntryPage'>;

const JournalEntryPage: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute<JournalEntryPageRouteProp>(); // Use the specific type for route
  const { entry } = route.params;

  const handleDelete = () => {
    deleteJournalEntry(entry.id, (success) => {
      if (success) {
        // navigation.navigate('JournalPage');
      } else {
        Alert.alert('Delete Error', 'Failed to delete the journal entry.');
      }
    });
  };

  const showActionSheet = () => {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ['Cancel', 'Edit', 'Delete'],
        destructiveButtonIndex: 2,
        cancelButtonIndex: 0,
      },
      (buttonIndex) => {
        if (buttonIndex === 1) {
          // navigation.navigate('CreateJournalEntryPage', { entry });
        } else if (buttonIndex === 2) {
          Alert.alert(
            'Delete Entry',
            'Are you sure you want to delete this entry?',
            [
              { text: 'Cancel', style: 'cancel' },
              { text: 'Delete', style: 'destructive', onPress: handleDelete },
            ]
          );
        }
      }
    );
  };

  return (
    <View style={globalStyles.journalContainer}>
      <View style={globalStyles.journalTopBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={globalStyles.journalBackButton}>X</Text>
        </TouchableOpacity>
        <Text style={globalStyles.journalTitle}>Journal Entry</Text>
        <TouchableOpacity onPress={showActionSheet}>
          <Text style={globalStyles.journalMenuButton}>⋮</Text> {/* Unicode for vertical ellipsis */}
        </TouchableOpacity>
      </View>
      <Text style={globalStyles.journalDate}>{new Date(entry.date).toLocaleString()}</Text>
      <Text style={globalStyles.journalEntryTitle}>{entry.title}</Text>
      <Text style={globalStyles.journalEntryContent}>{entry.content}</Text>
    </View>
  );
};

export default JournalEntryPage;
