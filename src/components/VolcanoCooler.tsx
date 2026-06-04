import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, Animated, Pressable } from 'react-native';
import { Colors } from '../constants/Colors';
import { Button } from './Button';
import { Card } from './Card';

export const VolcanoCooler: React.FC = () => {
  const [angerLevel, setAngerLevel] = useState(100);
  const [tapsCount, setTapsCount] = useState(0);
  const shakeAnimation = useRef(new Animated.Value(0)).current;

  const handleTap = () => {
    if (angerLevel <= 0) return;

    setTapsCount((prev) => prev + 1);
    const nextLevel = Math.max(0, angerLevel - 10);
    setAngerLevel(nextLevel);

    // Trigger Shake animation
    Animated.sequence([
      Animated.timing(shakeAnimation, {
        toValue: 10,
        duration: 50,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: -10,
        duration: 50,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: 5,
        duration: 50,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: -5,
        duration: 50,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: 0,
        duration: 50,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const resetGame = () => {
    setAngerLevel(100);
    setTapsCount(0);
  };

  const getVolcanoColor = () => {
    if (angerLevel > 70) return '#EF4444'; // Red hot
    if (angerLevel > 40) return '#F97316'; // Orange cooling
    if (angerLevel > 10) return '#FBBF24'; // Yellow quiet
    return '#10B981'; // Green and calm!
  };

  const getStatusText = () => {
    if (angerLevel >= 100) return 'Press and TAP to release the steam!';
    if (angerLevel > 70) return 'Smoky and hot! Tap to cool it down!';
    if (angerLevel > 40) return 'Pressure is dropping! Keep tapping!';
    if (angerLevel > 10) return 'Almost cool! Lava is turning into solid rocks!';
    return 'Phew! The volcano is now a beautiful quiet garden! 🌸';
  };

  const getVolcanoGraphic = () => {
    if (angerLevel <= 0) {
      return (
        <View style={styles.graphicContainer}>
          <Text style={styles.graphicEmoji}>🌸🌻🌴🌾🌺</Text>
          <Text style={styles.graphicEmoji}>⛰️</Text>
        </View>
      );
    }
    return (
      <Animated.View
        style={[
          styles.volcanoShape,
          {
            backgroundColor: getVolcanoColor(),
            transform: [{ translateX: shakeAnimation }],
          },
        ]}
      >
        <Text style={styles.steamText}>{angerLevel > 50 ? '💨 💥' : '💭'}</Text>
      </Animated.View>
    );
  };

  return (
    <Card color={Colors.white} style={styles.container}>
      <Text style={styles.title}>Cool the Anger Volcano 🌋</Text>
      <Text style={styles.subtitle}>
        Feel like screaming or breaking things? Tap the volcano to safely let your hot energy out!
      </Text>

      {/* Progress Bar (Neo-brutalist style) */}
      <View style={styles.meterContainer}>
        <Text style={styles.meterLabel}>Anger Meter: {angerLevel}%</Text>
        <View style={styles.progressBarBg}>
          <View
            style={[
              styles.progressBarFill,
              { width: `${angerLevel}%`, backgroundColor: getVolcanoColor() },
            ]}
          />
        </View>
      </View>

      <View style={styles.gameArea}>
        <Pressable onPress={handleTap} style={styles.graphicPressable}>
          {getVolcanoGraphic()}
        </Pressable>
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.status}>{getStatusText()}</Text>
        <Text style={styles.tapsText}>Taps: {tapsCount}</Text>
      </View>

      {angerLevel <= 0 && (
        <Button title="Reset & Try Again" onPress={resetGame} color={Colors.moods.calm.color} />
      )}
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
  meterContainer: {
    width: '100%',
    paddingHorizontal: 16,
    marginVertical: 12,
  },
  meterLabel: {
    fontSize: 14,
    fontWeight: '800',
    color: Colors.text,
    marginBottom: 6,
  },
  progressBarBg: {
    height: 24,
    backgroundColor: '#E2E8F0',
    borderRadius: 12,
    borderWidth: 3,
    borderColor: Colors.border,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    borderRadius: 8,
  },
  gameArea: {
    height: 180,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 16,
  },
  graphicPressable: {
    width: 200,
    height: 160,
    alignItems: 'center',
    justifyContent: 'center',
  },
  volcanoShape: {
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 3,
    borderColor: Colors.border,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: Colors.shadow,
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 0,
  },
  graphicContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  graphicEmoji: {
    fontSize: 48,
    textAlign: 'center',
  },
  steamText: {
    fontSize: 32,
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: 16,
    minHeight: 60,
    justifyContent: 'center',
  },
  status: {
    fontSize: 16,
    fontWeight: '900',
    color: Colors.text,
    textAlign: 'center',
    paddingHorizontal: 16,
  },
  tapsText: {
    fontSize: 12,
    color: Colors.textSecondary,
    fontWeight: '600',
    marginTop: 4,
  },
});
