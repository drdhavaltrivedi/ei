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
        // Incorporating 'hovered' state for physical web micro-animations (GTM premium feel)
        style={({ hovered, pressed }: any) => [
          cardStyle,
          hovered && !pressed && !noShadow && styles.hovered,
          pressed && !noShadow && styles.pressed,
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
    transitionProperty: 'transform, shadow-offset',
    transitionDuration: '0.15s',
  } as any, // Cast as any because transitionProperty is web-only React Native style
  shadow: {
    shadowColor: Colors.shadow,
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 0, 
  },
  hovered: {
    transform: [{ translateX: -2 }, { translateY: -2 }],
    shadowOffset: { width: 7, height: 7 },
  },
  pressed: {
    transform: [{ translateX: 3 }, { translateY: 3 }],
    shadowOffset: { width: 2, height: 2 },
  },
  content: {
    width: '100%',
  },
});
