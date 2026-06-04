import React from 'react';
import { StyleSheet, Text, Pressable, ViewStyle, TextStyle, StyleProp, View } from 'react-native';
import { Colors } from '../constants/Colors';

interface ButtonProps {
  title?: string;
  children?: React.ReactNode;
  onPress: () => void;
  color?: string;
  borderColor?: string;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  children,
  onPress,
  color = Colors.primary,
  borderColor = Colors.border,
  style,
  textStyle,
  disabled = false,
}) => {
  return (
    <Pressable
      disabled={disabled}
      onPress={onPress}
      style={({ pressed }) => [
        styles.buttonContainer,
        {
          backgroundColor: color,
          borderColor: borderColor,
        },
        disabled && styles.disabled,
        !pressed && !disabled && styles.shadow,
        pressed && !disabled && styles.pressed,
        style,
      ]}
    >
      <View style={styles.content}>
        {title ? (
          <Text style={[styles.text, textStyle]}>{title}</Text>
        ) : (
          children
        )}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 16,
    borderWidth: 3,
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    minWidth: 120,
  },
  shadow: {
    shadowColor: Colors.shadow,
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 0,
  },
  pressed: {
    transform: [{ translateX: 3 }, { translateY: 3 }],
    shadowOffset: { width: 1, height: 1 },
  },
  disabled: {
    backgroundColor: '#E2E8F0',
    borderColor: '#94A3B8',
    opacity: 0.6,
  },
  text: {
    fontSize: 18,
    fontWeight: '800',
    color: Colors.text,
    textAlign: 'center',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
