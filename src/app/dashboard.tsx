import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Platform, useWindowDimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { useApp } from '@/context/AppContext';
import { Colors } from '@/constants/Colors';
import { Card } from '@/components/Card';
import { Button } from '@/components/Button';
import { MoodSelector } from '@/components/MoodSelector';

export default function DashboardScreen() {
  const { childName, addMoodLog, detectivePoints, completedScenarios } = useApp();
  const [selectedMoodId, setSelectedMoodId] = useState<string | undefined>(undefined);
  const router = useRouter();
  const { width } = useWindowDimensions();

  // Responsive Grid Logic: splits columns on desktop view (screens > 768px wide)
  const isDesktop = Platform.OS === 'web' && width > 768;

  const handleSelectMood = (moodId: string) => {
    setSelectedMoodId(moodId);
    addMoodLog(moodId as any);
  };

  const getEncouragementText = () => {
    if (!selectedMoodId) return '';
    const mood = Colors.moods[selectedMoodId as keyof typeof Colors.moods];
    if (selectedMoodId === 'angry') {
      return `It is totally okay to feel angry, ${childName}. Let's head over to the Calming Corner to cool down the volcano together!`;
    }
    if (selectedMoodId === 'sad') {
      return `Feeling sad is okay, ${childName}. Crying or taking slow breaths helps. Let's do some balloon breathing.`;
    }
    if (selectedMoodId === 'scared') {
      return `It's okay to feel scared, ${childName}. You are safe. Let's take some deep breaths to help your heart slow down.`;
    }
    return `Awesome! You are feeling ${mood.name} today. Share your joy with someone or solve a new detective story!`;
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={isDesktop ? styles.desktopScrollContent : styles.mobileScrollContent} showsVerticalScrollIndicator={false}>
        {/* Welcome Section */}
        <View style={styles.header}>
          <Text style={styles.welcomeText}>Hey, {childName}! 👋</Text>
          <Text style={styles.subWelcomeText}>Welcome to your Mood Buddy dashboard!</Text>
        </View>

        {isDesktop ? (
          /* Desktop Split-Column Layout (Premium Web UX) */
          <View style={styles.desktopGrid}>
            {/* Left Column: Interactive Check-in */}
            <View style={styles.desktopColLeft}>
              <Card color={Colors.white} style={styles.checkInCard}>
                <MoodSelector onSelectMood={handleSelectMood} selectedMoodId={selectedMoodId} />
                
                {selectedMoodId && (
                  <Card color={Colors.moods[selectedMoodId as keyof typeof Colors.moods].color} style={styles.feedbackCard}>
                    <Text style={styles.feedbackText}>{getEncouragementText()}</Text>
                    <View style={styles.feedbackActions}>
                      {['angry', 'sad', 'scared'].includes(selectedMoodId) ? (
                        <Button 
                          title="Go to Calming Corner ➔" 
                          onPress={() => router.push('/coping')} 
                          color={Colors.white} 
                        />
                      ) : (
                        <Button 
                          title="Play Story Game ➔" 
                          onPress={() => router.push('/detective')} 
                          color={Colors.white} 
                        />
                      )}
                    </View>
                  </Card>
                )}
              </Card>
            </View>

            {/* Right Column: Achievements & Tips */}
            <View style={styles.desktopColRight}>
              {/* Stats Section */}
              <View style={styles.statsRow}>
                <Card color={Colors.moods.happy.color} style={styles.statCard}>
                  <Text style={styles.statEmoji}>★</Text>
                  <Text style={styles.statValue}>{detectivePoints} pts</Text>
                  <Text style={styles.statLabel}>Detective Score</Text>
                </Card>
                
                <Card color={Colors.moods.calm.color} style={styles.statCard}>
                  <Text style={styles.statEmoji}>🧩</Text>
                  <Text style={styles.statValue}>{completedScenarios.length} / 6</Text>
                  <Text style={styles.statLabel}>Cases Solved</Text>
                </Card>
              </View>

              {/* Tip Board */}
              <Card color={Colors.primary} style={styles.tipCard}>
                <Text style={styles.tipTitle}>💡 Mood Tip of the Day</Text>
                <Text style={styles.tipText}>
                  When a feeling gets too big, it is like a cloud. It will pass! Try taking 3 balloon breaths to let it float away.
                </Text>
              </Card>
            </View>
          </View>
        ) : (
          /* Mobile Stack Layout */
          <View style={styles.mobileStack}>
            {/* Emotion Check-in */}
            <Card color={Colors.white} style={styles.checkInCard}>
              <MoodSelector onSelectMood={handleSelectMood} selectedMoodId={selectedMoodId} />
              
              {selectedMoodId && (
                <Card color={Colors.moods[selectedMoodId as keyof typeof Colors.moods].color} style={styles.feedbackCard}>
                  <Text style={styles.feedbackText}>{getEncouragementText()}</Text>
                  <View style={styles.feedbackActions}>
                    {['angry', 'sad', 'scared'].includes(selectedMoodId) ? (
                      <Button 
                        title="Go to Calming Corner ➔" 
                        onPress={() => router.push('/coping')} 
                        color={Colors.white} 
                      />
                    ) : (
                      <Button 
                        title="Play Story Game ➔" 
                        onPress={() => router.push('/detective')} 
                        color={Colors.white} 
                      />
                    )}
                  </View>
                </Card>
              )}
            </Card>

            {/* Badges and Points Summary */}
            <View style={styles.statsRow}>
              <Card color={Colors.moods.happy.color} style={styles.statCard}>
                <Text style={styles.statEmoji}>★</Text>
                <Text style={styles.statValue}>{detectivePoints} pts</Text>
                <Text style={styles.statLabel}>Detective Score</Text>
              </Card>
              
              <Card color={Colors.moods.calm.color} style={styles.statCard}>
                <Text style={styles.statEmoji}>🧩</Text>
                <Text style={styles.statValue}>{completedScenarios.length} / 6</Text>
                <Text style={styles.statLabel}>Cases Solved</Text>
              </Card>
            </View>

            {/* Daily Tip */}
            <Card color={Colors.primary} style={styles.tipCard}>
              <Text style={styles.tipTitle}>💡 Mood Tip of the Day</Text>
              <Text style={styles.tipText}>
                When a feeling gets too big, it is like a cloud. It will pass! Try taking 3 balloon breaths to let it float away.
              </Text>
            </Card>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  mobileScrollContent: {
    padding: 20,
    gap: 16,
    paddingBottom: 140,
    alignSelf: 'center',
    width: '100%',
    maxWidth: 600,
  },
  desktopScrollContent: {
    padding: 30,
    gap: 20,
    paddingBottom: 120,
    alignSelf: 'center',
    width: '100%',
    maxWidth: 1000,
  },
  header: {
    marginTop: 10,
    marginBottom: 8,
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: '900',
    color: Colors.text,
  },
  subWelcomeText: {
    fontSize: 16,
    color: Colors.textSecondary,
    fontWeight: '600',
    marginTop: 4,
  },
  desktopGrid: {
    flexDirection: 'row',
    gap: 24,
    width: '100%',
    alignItems: 'flex-start',
  },
  desktopColLeft: {
    flex: 1.3,
  },
  desktopColRight: {
    flex: 1,
    gap: 16,
  },
  mobileStack: {
    gap: 16,
  },
  checkInCard: {
    padding: 20,
  },
  feedbackCard: {
    marginTop: 16,
    padding: 16,
    borderStyle: 'dashed',
  },
  feedbackText: {
    fontSize: 16,
    fontWeight: '800',
    color: Colors.text,
    lineHeight: 22,
    marginBottom: 12,
  },
  feedbackActions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  statsRow: {
    flexDirection: 'row',
    gap: 16,
    justifyContent: 'space-between',
  },
  statCard: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 20,
    marginVertical: 0,
  },
  statEmoji: {
    fontSize: 36,
    marginBottom: 4,
  },
  statValue: {
    fontSize: 22,
    fontWeight: '900',
    color: Colors.text,
  },
  statLabel: {
    fontSize: 12,
    color: Colors.textSecondary,
    fontWeight: '700',
    marginTop: 2,
  },
  tipCard: {
    padding: 20,
  },
  tipTitle: {
    fontSize: 18,
    fontWeight: '900',
    color: Colors.text,
    marginBottom: 6,
  },
  tipText: {
    fontSize: 14,
    color: Colors.text,
    fontWeight: '700',
    lineHeight: 20,
  },
});
