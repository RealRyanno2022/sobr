import React, { useState } from 'react';
import { SafeAreaView, Text, View, StyleSheet, ScrollView, RefreshControl, TextInput, TouchableOpacity } from 'react-native';
import { globalStyles } from '../../styles/globalStyles';
import { ClockPageProps } from '../../pagetypes';
import { FontAwesome5 } from '@expo/vector-icons';

const ClockPage: React.FC<ClockPageProps> = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState<'MyClocks' | 'Following'>('MyClocks');
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    // Simulate a network request
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  return (
    <SafeAreaView style={globalStyles.container}>
      {/* Top Navigation Bar */}
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.navigate('MenuScreen')}>
          <Text style={styles.backButton}>X</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Clocks</Text>
      </View>

      {/* Sub-bar for tabs */}
      <View style={styles.subBar}>
        <TouchableOpacity onPress={() => setActiveTab('MyClocks')} style={styles.tab}>
          <Text style={[styles.tabText, activeTab === 'MyClocks' && styles.activeTabText]}>My Clocks</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('Following')} style={styles.tab}>
          <Text style={[styles.tabText, activeTab === 'Following' && styles.activeTabText]}>Following</Text>
        </TouchableOpacity>
      </View>

      {/* Content Area */}
      {activeTab === 'MyClocks' ? (
        <ScrollView
          contentContainerStyle={styles.scrollViewContent}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          <View style={styles.grid}>
            {Array.from({ length: 32 }).map((_, index) => (
              <View key={index} style={styles.clockContainer}>
                <View style={styles.clockRing}>
                  <Text style={styles.clockNumber}>10</Text>
                  <Text style={styles.clockDays}>days</Text>
                </View>
                <TextInput
                  style={styles.clockName}
                  placeholder="Clock Name"
                  maxLength={40}
                />
              </View>
            ))}
          </View>
        </ScrollView>
      ) : (
        <View style={styles.followingTab}>
          <Text style={styles.followingText}>You aren't following anyone's clocks yet. WIP.</Text>
        </View>
      )}

      {/* Floating Action Button */}
      <TouchableOpacity
        style={styles.fab}
        onPress={() => navigation.navigate('CreateClockPage')}
      >
        <FontAwesome5 name="plus" size={24} color="white" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 4,
  },
  backButton: {
    fontSize: 24,
    color: 'black',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 8,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 4,
  },
  tab: {
    marginHorizontal: 16,
  },
  tabText: {
    fontSize: 16,
    color: 'gray',
  },
  activeTabText: {
    fontWeight: 'bold',
    color: 'black',
  },
  scrollViewContent: {
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  clockContainer: {
    width: '45%',
    aspectRatio: 1,
    marginVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 4,
    padding: 16,
  },
  clockRing: {
    width: '80%',
    height: '80%',
    borderRadius: 100,
    borderWidth: 4,
    borderColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  clockNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  clockDays: {
    fontSize: 12,
    color: 'gray',
  },
  clockName: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 8,
    paddingVertical: 4,
    textAlign: 'center',
    width: '100%',
  },
  fab: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
  },
  followingTab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  followingText: {
    fontSize: 16,
    color: 'gray',
  },
});

export default ClockPage;
