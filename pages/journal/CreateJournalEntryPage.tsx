// CreateJournalEntryPage.tsx
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { globalStyles } from '../../styles/globalStyles';
import { insertJournalEntry, updateJournalEntry } from '../../dbconfig/dbjournalconfig';
import { RootStackParamList, JournalEntry } from '../../types';

type CreateJournalEntryPageRouteProp = RouteProp<RootStackParamList, 'CreateJournalEntryPage'>;

const CreateJournalEntryPage: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute<CreateJournalEntryPageRouteProp>();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [entryId, setEntryId] = useState<number | null>(null);

  useEffect(() => {
    if (route.params?.entry) {
      const { entry } = route.params;
      setTitle(entry.title);
      setContent(entry.content);
      setIsEditing(true);
      setEntryId(entry.id);
    }
  }, [route.params]);

  const saveEntry = () => {
    const date = new Date().toISOString();
    if (isEditing && entryId !== null) {
      updateJournalEntry(entryId, title, content, date, () => navigation.navigate('JournalPage' as never));
    } else {
      insertJournalEntry(title, content, date, () => navigation.navigate('JournalPage' as never));
    }
  };

  return (
    <View style={globalStyles.journalContainer}>
      <View style={globalStyles.journalTopBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={globalStyles.journalBackButton}>X</Text>
        </TouchableOpacity>
        <Text style={globalStyles.journalTitle}>{isEditing ? 'Edit Entry' : 'New Journal Entry'}</Text>
      </View>
      <Text style={globalStyles.journalDate}>{new Date().toLocaleString()}</Text>
      <TextInput
        style={globalStyles.journalTitleInput}
        value={title}
        onChangeText={setTitle}
        placeholder="Title"
        maxLength={40}
      />
      <TextInput
        style={globalStyles.journalContentInput}
        value={content}
        onChangeText={setContent}
        placeholder="Your thoughts..."
        maxLength={2000}
        multiline
      />
      <TouchableOpacity style={globalStyles.journalSaveButton} onPress={saveEntry}>
        <Text style={globalStyles.journalSaveButtonText}>{isEditing ? 'Update' : 'Save'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreateJournalEntryPage;
