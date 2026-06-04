import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Colors } from '../constants/Colors';
import { Card } from './Card';

interface MoodSelectorProps {
  onSelectMood: (moodId: keyof typeof Colors.moods) => void;
  selectedMoodId?: string;
}

export const MoodSelector: React.FC<MoodSelectorProps> = ({
  onSelectMood,
  selectedMoodId,
}) => {
  const moodList = Object.values(Colors.moods);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>How do you feel right now?</Text>
      
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {moodList.map((mood) => {
          const isSelected = selectedMoodId === mood.id;
          return (
            <Card
              key={mood.id}
              color={mood.color}
              onPress={() => onSelectMood(mood.id as keyof typeof Colors.moods)}
              style={[
                styles.moodCard,
                isSelected && styles.selectedCard
              ]}
            >
              <Text style={styles.emoji}>{mood.emoji}</Text>
              <Text style={styles.moodName}>{mood.name}</Text>
              <Text style={styles.moodSubtitle}>{mood.subtitle}</Text>
            </Card>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
    width: '100%',
  },
  heading: {
    fontSize: 22,
    fontWeight: '900',
    color: Colors.text,
    marginBottom: 16,
    textAlign: 'center',
  },
  scrollContent: {
    paddingHorizontal: 8,
    paddingBottom: 16,
    gap: 16,
  },
  moodCard: {
    width: 140,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 0,
    paddingVertical: 20,
  },
  selectedCard: {
    borderColor: '#000000',
    borderWidth: 4,
    transform: [{ scale: 1.05 }],
  },
  emoji: {
    fontSize: 48,
    marginBottom: 8,
    textAlign: 'center',
  },
  moodName: {
    fontSize: 18,
    fontWeight: '900',
    color: Colors.text,
    textAlign: 'center',
  },
  moodSubtitle: {
    fontSize: 12,
    fontWeight: '600',
    color: Colors.textSecondary,
    textAlign: 'center',
    marginTop: 4,
  },
});
