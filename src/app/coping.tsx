import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '@/constants/Colors';
import { BreathingExercise } from '@/components/BreathingExercise';
import { VolcanoCooler } from '@/components/VolcanoCooler';
import { Button } from '@/components/Button';
import { Card } from '@/components/Card';

export default function CopingScreen() {
  const [activeTab, setActiveTab] = useState<'breathing' | 'volcano'>('breathing');

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>The Calming Corner 🧘‍♀️</Text>
          <Text style={styles.subtitle}>A safe place to slow down when feelings get too big.</Text>
        </View>

        {/* Tab Controls (Neo-brutalist custom layout) */}
        <Card color={Colors.white} style={styles.tabContainer} noShadow>
          <View style={styles.tabsRow}>
            <View style={styles.tabButtonWrapper}>
              <Button
                title="Balloon Breath 🎈"
                onPress={() => setActiveTab('breathing')}
                color={activeTab === 'breathing' ? Colors.moods.calm.color : '#E2E8F0'}
                borderColor={Colors.border}
                style={[
                  styles.tabButton,
                  activeTab === 'breathing' && styles.activeTabButton
                ]}
                textStyle={styles.tabButtonText}
              />
            </View>
            <View style={styles.tabButtonWrapper}>
              <Button
                title="Anger Volcano 🌋"
                onPress={() => setActiveTab('volcano')}
                color={activeTab === 'volcano' ? Colors.moods.angry.color : '#E2E8F0'}
                borderColor={Colors.border}
                style={[
                  styles.tabButton,
                  activeTab === 'volcano' && styles.activeTabButton
                ]}
                textStyle={styles.tabButtonText}
              />
            </View>
          </View>
        </Card>

        {/* Dynamic Exercise Content */}
        <View style={styles.contentArea}>
          {activeTab === 'breathing' ? (
            <BreathingExercise />
          ) : (
            <VolcanoCooler />
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scrollContent: {
    padding: 20,
    gap: 16,
    paddingBottom: Platform.OS === 'web' ? 120 : 140,
    alignSelf: 'center',
    width: '100%',
    maxWidth: 600,
  },
  header: {
    marginTop: 10,
    marginBottom: 8,
  },
  title: {
    fontSize: 26,
    fontWeight: '900',
    color: Colors.text,
  },
  subtitle: {
    fontSize: 15,
    color: Colors.textSecondary,
    fontWeight: '600',
    marginTop: 4,
  },
  tabContainer: {
    padding: 6,
    borderRadius: 20,
  },
  tabsRow: {
    flexDirection: 'row',
    gap: 8,
  },
  tabButtonWrapper: {
    flex: 1,
  },
  tabButton: {
    alignSelf: 'stretch',
    minWidth: 0,
    paddingVertical: 10,
    paddingHorizontal: 0,
    borderWidth: 2,
  },
  activeTabButton: {
    borderWidth: 3,
  },
  tabButtonText: {
    fontSize: 14,
    fontWeight: '800',
  },
  contentArea: {
    marginTop: 4,
  },
});
