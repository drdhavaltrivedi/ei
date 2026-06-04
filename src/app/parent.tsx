import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, Platform, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter, Link } from 'expo-router';
import { useApp } from '@/context/AppContext';
import { Colors } from '@/constants/Colors';
import { Card } from '@/components/Card';
import { Button } from '@/components/Button';

export default function ParentScreen() {
  const { childName, setChildName, moodHistory, resetAllData } = useApp();
  const [nameInput, setNameInput] = useState(childName);
  const [isSaved, setIsSaved] = useState(false);
  const router = useRouter();

  const handleSaveName = () => {
    setChildName(nameInput);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000);
  };

  const handleResetData = async () => {
    const performReset = async () => {
      await resetAllData();
      setNameInput('Buddy');
    };

    if (Platform.OS === 'web') {
      if (window.confirm('Are you sure you want to reset all child progress and history?')) {
        await performReset();
      }
    } else {
      Alert.alert(
        'Reset All Data',
        'Are you sure you want to clear all progress, points, and mood logs?',
        [
          { text: 'Cancel', style: 'cancel' },
          { text: 'Reset Everything', style: 'destructive', onPress: performReset },
        ]
      );
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Parent & Teacher Hub 🏫❤️</Text>
          <Text style={styles.subtitle}>
            Monitor your child's emotional growth and read science-backed co-regulation tools.
          </Text>
        </View>

        {/* Profile Settings Card */}
        <Card color={Colors.white} style={styles.card}>
          <Text style={styles.sectionTitle}>Child Profile Settings</Text>
          <Text style={styles.label}>Child's Name:</Text>
          <TextInput
            style={styles.textInput}
            value={nameInput}
            onChangeText={setNameInput}
            placeholder="Type child's name..."
            placeholderTextColor="#94A3B8"
          />
          <Button
            title={isSaved ? "Saved! ✓" : "Save Settings"}
            onPress={handleSaveName}
            color={isSaved ? '#86EFAC' : Colors.primary}
            style={styles.saveButton}
          />
        </Card>

        {/* Emotion Log History */}
        <Card color={Colors.white} style={styles.card}>
          <Text style={styles.sectionTitle}>Mood Check-in History</Text>
          <Text style={styles.cardDescription}>
            See the emotional patterns of your child over time.
          </Text>

          {moodHistory.length === 0 ? (
            <View style={styles.emptyHistory}>
              <Text style={styles.emptyText}>No check-ins logged yet. Daily mood check-ins will show up here!</Text>
            </View>
          ) : (
            <View style={styles.historyList}>
              {moodHistory.map((log) => (
                <View key={log.id} style={[styles.historyRow, { backgroundColor: log.color }]}>
                  <Text style={styles.historyEmoji}>{log.emoji}</Text>
                  <View style={styles.historyDetails}>
                    <Text style={styles.historyMood}>{log.mood}</Text>
                    <Text style={styles.historyDate}>{log.date}</Text>
                  </View>
                </View>
              ))}
            </View>
          )}
        </Card>

        {/* Educational Resources */}
        <Card color={Colors.white} style={styles.card}>
          <Text style={styles.sectionTitle}>Co-Regulation Articles</Text>
          <Text style={styles.cardDescription}>
            Read simple strategies to help kids manage big feelings.
          </Text>

          <Link href={'/blog/co-regulation-tantrums' as any} asChild>
            <Card color="#E0F2FE" style={styles.articleCard} noShadow>
              <Text style={styles.articleTitle}>🔑 Co-Regulation is Key (Read Full Guide ➔)</Text>
              <Text style={styles.articleText}>
                Children do not yet have the brain structures to calm down by themselves. They need a calm adult to mirror. When they are hot (angry), try to keep your voice low and slow. Your nervous system will help cool down theirs.
              </Text>
            </Card>
          </Link>

          <Link href={'/blog/name-it-to-tame-it' as any} asChild>
            <Card color="#FEF3C7" style={styles.articleCard} noShadow>
              <Text style={styles.articleTitle}>🏷️ Name it to Tame it (Read Full Guide ➔)</Text>
              <Text style={styles.articleText}>
                Naming emotions takes away their power. Saying, "I see you are feeling really angry that Lucas broke the tower," helps children feel understood and less overwhelmed by the physical sensation of the emotion.
              </Text>
            </Card>
          </Link>

          <Link href={'/blog/safe-anger-outlets' as any} asChild>
            <Card color="#ECE9FC" style={styles.articleCard} noShadow>
              <Text style={styles.articleTitle}>🌋 Controlled Releases Work (Read Full Guide ➔)</Text>
              <Text style={styles.articleText}>
                Anger creates physical energy in the body. Telling a kid to "just stop it" is difficult. The anger volcano game validates that energy and channels it safely through physical screen taps, letting the steam out constructively.
              </Text>
            </Card>
          </Link>
        </Card>

        {/* Danger Zone */}
        <Card color="#FEE2E2" style={styles.card}>
          <Text style={[styles.sectionTitle, { color: '#B91C1C' }]}>Danger Zone</Text>
          <Text style={styles.cardDescription}>
            Permanently clear all data and start over. This cannot be undone.
          </Text>
          <Button
            title="Reset All App Data"
            onPress={handleResetData}
            color="#EF4444"
            style={styles.resetButton}
            textStyle={{ color: Colors.white }}
          />
        </Card>
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
    lineHeight: 20,
  },
  card: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '900',
    color: Colors.text,
    marginBottom: 8,
  },
  label: {
    fontSize: 14,
    fontWeight: '800',
    color: Colors.text,
    marginBottom: 6,
    marginTop: 8,
  },
  textInput: {
    height: 48,
    borderWidth: 3,
    borderColor: Colors.border,
    borderRadius: 12,
    paddingHorizontal: 12,
    fontSize: 16,
    fontWeight: '700',
    color: Colors.text,
    backgroundColor: '#F8FAFC',
    marginBottom: 12,
  },
  saveButton: {
    alignSelf: 'stretch',
    marginTop: 4,
  },
  cardDescription: {
    fontSize: 13,
    fontWeight: '600',
    color: Colors.textSecondary,
    marginBottom: 12,
  },
  emptyHistory: {
    paddingVertical: 20,
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 14,
    fontWeight: '700',
    color: Colors.textSecondary,
    textAlign: 'center',
  },
  historyList: {
    gap: 8,
  },
  historyRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: Colors.border,
  },
  historyEmoji: {
    fontSize: 24,
    marginRight: 12,
  },
  historyDetails: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  historyMood: {
    fontSize: 16,
    fontWeight: '900',
    color: Colors.text,
  },
  historyDate: {
    fontSize: 12,
    fontWeight: '800',
    color: Colors.textSecondary,
  },
  articleCard: {
    marginVertical: 6,
    padding: 12,
    borderWidth: 2,
  },
  articleTitle: {
    fontSize: 15,
    fontWeight: '900',
    color: Colors.text,
    marginBottom: 4,
  },
  articleText: {
    fontSize: 13,
    fontWeight: '600',
    color: Colors.text,
    lineHeight: 18,
  },
  resetButton: {
    alignSelf: 'stretch',
    marginTop: 8,
  },
});
