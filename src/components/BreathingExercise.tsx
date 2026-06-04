import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Animated, Easing } from 'react-native';
import { Colors } from '../constants/Colors';
import { Button } from './Button';
import { Card } from './Card';

export const BreathingExercise: React.FC = () => {
  const [phase, setPhase] = useState<'idle' | 'in' | 'hold' | 'out'>('idle');
  const [secondsLeft, setSecondsLeft] = useState(4);
  const [cyclesCompleted, setCyclesCompleted] = useState(0);
  const scaleValue = useRef(new Animated.Value(1)).current;
  const timerRef = useRef<any>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const startBreathing = () => {
    setPhase('in');
    setSecondsLeft(4);
    runAnimation('in');
  };

  const runAnimation = (currentPhase: 'in' | 'hold' | 'out') => {
    let toValue = 1;
    let duration = 4000;

    if (currentPhase === 'in') {
      toValue = 2.0;
    } else if (currentPhase === 'hold') {
      toValue = 2.0;
    } else if (currentPhase === 'out') {
      toValue = 1.0;
    }

    Animated.timing(scaleValue, {
      toValue,
      duration,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();

    // Start timer countdown for 4s
    setSecondsLeft(4);
    let count = 4;
    
    if (timerRef.current) clearInterval(timerRef.current);
    
    timerRef.current = setInterval(() => {
      count -= 1;
      setSecondsLeft(count);
      
      if (count === 0) {
        clearInterval(timerRef.current!);
        
        // Transition to next phase
        if (currentPhase === 'in') {
          setPhase('hold');
          runAnimation('hold');
        } else if (currentPhase === 'hold') {
          setPhase('out');
          runAnimation('out');
        } else if (currentPhase === 'out') {
          setCyclesCompleted((prev) => prev + 1);
          setPhase('in');
          runAnimation('in');
        }
      }
    }, 1000);
  };

  const stopBreathing = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    Animated.timing(scaleValue, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
    setPhase('idle');
    setSecondsLeft(4);
  };

  const getInstructionText = () => {
    switch (phase) {
      case 'in':
        return 'Breathe In... 🌬️';
      case 'hold':
        return 'Hold it... 🎈';
      case 'out':
        return 'Breathe Out... 🍃';
      case 'idle':
      default:
        return 'Ready to breathe together?';
    }
  };

  const getPhaseColor = () => {
    switch (phase) {
      case 'in':
        return '#86EFAC'; // Light green
      case 'hold':
        return '#FDE047'; // Light yellow
      case 'out':
        return '#93C5FD'; // Light blue
      case 'idle':
      default:
        return Colors.moods.calm.color;
    }
  };

  return (
    <Card color={Colors.white} style={styles.container}>
      <Text style={styles.title}>The Calming Balloon 🎈</Text>
      <Text style={styles.subtitle}>
        Breathe slowly with the balloon to calm your body down.
      </Text>

      <View style={styles.balloonArea}>
        <Animated.View
          style={[
            styles.balloon,
            {
              backgroundColor: getPhaseColor(),
              transform: [{ scale: scaleValue }],
            },
          ]}
        />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.instruction}>{getInstructionText()}</Text>
        {phase !== 'idle' && (
          <Text style={styles.timerText}>{secondsLeft}s</Text>
        )}
      </View>

      <View style={styles.statsContainer}>
        <Text style={styles.statsText}>
          Breathes Completed: <Text style={styles.boldText}>{cyclesCompleted}</Text>
        </Text>
      </View>

      <View style={styles.controls}>
        {phase === 'idle' ? (
          <Button title="Start Breathing" onPress={startBreathing} color={Colors.moods.calm.color} />
        ) : (
          <Button title="Stop / Pause" onPress={stopBreathing} color={Colors.moods.angry.color} />
        )}
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: '900',
    color: Colors.text,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: Colors.textSecondary,
    textAlign: 'center',
    marginVertical: 8,
    paddingHorizontal: 16,
  },
  balloonArea: {
    height: 200,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  balloon: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 3,
    borderColor: Colors.border,
  },
  textContainer: {
    minHeight: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  instruction: {
    fontSize: 24,
    fontWeight: '900',
    color: Colors.text,
    textAlign: 'center',
  },
  timerText: {
    fontSize: 20,
    fontWeight: '800',
    color: Colors.textSecondary,
    marginTop: 4,
  },
  statsContainer: {
    backgroundColor: '#F1F5F9',
    borderRadius: 12,
    borderWidth: 2,
    borderColor: Colors.border,
    paddingVertical: 6,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  statsText: {
    fontSize: 14,
    fontWeight: '700',
    color: Colors.text,
  },
  boldText: {
    fontWeight: '900',
    color: Colors.primary,
  },
  controls: {
    marginTop: 8,
  },
});
