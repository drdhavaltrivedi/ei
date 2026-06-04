import React from 'react';
import { StyleSheet, View, Pressable, ViewStyle, StyleProp } from 'react-native';
import { Colors } from '../constants/Colors';

interface CardProps {
  children: React.ReactNode;
  color?: string;
  borderColor?: string;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
  noShadow?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  color = Colors.white,
  borderColor = Colors.border,
  style,
  onPress,
  noShadow = false,
}) => {
  const cardStyle = [
    styles.card,
    { backgroundColor: color, borderColor: borderColor },
    !noShadow && styles.shadow,
    style,
  ];

  if (onPress) {
    return (
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          cardStyle,
          pressed && {
            transform: [{ translateX: noShadow ? 0 : 2 }, { translateY: noShadow ? 0 : 2 }],
          },
          pressed && !noShadow && {
            shadowOffset: { width: 2, height: 2 },
          },
        ]}
      >
        <View style={styles.content}>{children}</View>
      </Pressable>
    );
  }

  return <View style={cardStyle}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
    borderWidth: 3,
    padding: 16,
    marginVertical: 8,
    width: '100%',
  },
  shadow: {
    shadowColor: Colors.shadow,
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 1,
    shadowRadius: 0,
    // For Android elevation mimicking flat shadow (mostly we rely on flat shadows or borders)
    elevation: 0, 
  },
  content: {
    width: '100%',
  },
});
