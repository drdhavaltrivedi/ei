import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Scenarios, Scenario, Choice } from '../constants/Scenarios';
import { Colors } from '../constants/Colors';
import { Card } from './Card';
import { Button } from './Button';
import { useApp } from '../context/AppContext';

export const ScenarioGame: React.FC = () => {
  const { addPoints, completeScenario, completedScenarios, detectivePoints } = useApp();
  const [activeScenarioIndex, setActiveScenarioIndex] = useState(0);
  const [selectedChoiceId, setSelectedChoiceId] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [isAnsweredCorrectly, setIsAnsweredCorrectly] = useState<boolean | null>(null);

  const activeScenario: Scenario = Scenarios[activeScenarioIndex];

  const handleSelectChoice = (choice: Choice) => {
    setSelectedChoiceId(choice.id);
    setFeedback(choice.outcome);
    setIsAnsweredCorrectly(choice.isHealthy);

    if (choice.isHealthy) {
      addPoints(choice.points);
      completeScenario(activeScenario.id);
    }
  };

  const handleNext = () => {
    setSelectedChoiceId(null);
    setFeedback(null);
    setIsAnsweredCorrectly(null);
    setActiveScenarioIndex((prev) => (prev + 1) % Scenarios.length);
  };

  const isCompleted = completedScenarios.includes(activeScenario.id);

  return (
    <Card color={Colors.white} style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.scoreText}>
          Score: <Text style={styles.scoreHighlight}>★ {detectivePoints} pts</Text>
        </Text>
        <Text style={styles.badgeText}>
          {isCompleted ? '✅ Solved' : '⏳ Unsolved'}
        </Text>
      </View>

      <Text style={styles.title}>Case #{activeScenario.id}: {activeScenario.title}</Text>
      
      {/* Story Board */}
      <Card color={Colors.moods.happy.color} style={styles.storyCard}>
        <Text style={styles.storyCharacter}>
          Character: {activeScenario.character} ({activeScenario.emotion})
        </Text>
        <Text style={styles.storyDescription}>{activeScenario.description}</Text>
      </Card>

      <Text style={styles.sectionTitle}>What should {activeScenario.character} do?</Text>

      {/* Choices List */}
      <View style={styles.choicesContainer}>
        {activeScenario.choices.map((choice) => {
          const isSelected = selectedChoiceId === choice.id;
          let btnColor: string = Colors.white;
          if (isSelected) {
            btnColor = choice.isHealthy ? '#86EFAC' : '#FECACA';
          }

          return (
            <Card
              key={choice.id}
              color={btnColor}
              onPress={() => !isAnsweredCorrectly && handleSelectChoice(choice)}
              style={[
                styles.choiceCard,
                isSelected && styles.selectedChoice
              ]}
            >
              <Text style={styles.choiceText}>{choice.text}</Text>
            </Card>
          );
        })}
      </View>

      {/* Feedback Overlay/Box */}
      {feedback && (
        <Card
          color={isAnsweredCorrectly ? '#DCFCE7' : '#FEE2E2'}
          style={styles.feedbackCard}
        >
          <Text style={styles.feedbackEmoji}>
            {isAnsweredCorrectly ? '🌟 Excellent!' : '🧐 Try again!'}
          </Text>
          <Text style={styles.feedbackText}>{feedback}</Text>
        </Card>
      )}

      {/* Next Scenario Button */}
      {isAnsweredCorrectly && (
        <Button
          title="Next Case ➔"
          onPress={handleNext}
          color={Colors.primary}
          style={styles.nextButton}
        />
      )}
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  scoreText: {
    fontSize: 16,
    fontWeight: '900',
    color: Colors.text,
  },
  scoreHighlight: {
    color: '#D97706',
  },
  badgeText: {
    fontSize: 14,
    fontWeight: '800',
    color: Colors.textSecondary,
    backgroundColor: '#F1F5F9',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: Colors.border,
  },
  title: {
    fontSize: 20,
    fontWeight: '900',
    color: Colors.text,
    marginBottom: 12,
  },
  storyCard: {
    marginVertical: 4,
  },
  storyCharacter: {
    fontSize: 14,
    fontWeight: '900',
    color: Colors.text,
    marginBottom: 4,
  },
  storyDescription: {
    fontSize: 16,
    color: Colors.text,
    fontWeight: '600',
    lineHeight: 22,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '900',
    color: Colors.text,
    marginTop: 18,
    marginBottom: 8,
  },
  choicesContainer: {
    gap: 12,
  },
  choiceCard: {
    marginVertical: 0,
    padding: 14,
  },
  selectedChoice: {
    borderColor: Colors.border,
    borderWidth: 4,
  },
  choiceText: {
    fontSize: 15,
    fontWeight: '800',
    color: Colors.text,
  },
  feedbackCard: {
    marginTop: 16,
    padding: 14,
    borderStyle: 'dashed',
  },
  feedbackEmoji: {
    fontSize: 18,
    fontWeight: '900',
    color: Colors.text,
    marginBottom: 4,
  },
  feedbackText: {
    fontSize: 14,
    fontWeight: '700',
    color: Colors.text,
    lineHeight: 18,
  },
  nextButton: {
    marginTop: 16,
    alignSelf: 'stretch',
  },
});
