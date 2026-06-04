import {
  Tabs,
  TabList,
  TabTrigger,
  TabSlot,
  TabTriggerSlotProps,
  TabListProps,
} from 'expo-router/ui';
import { Pressable, View, StyleSheet, Text } from 'react-native';
import { ExternalLink } from './external-link';
import { Colors } from '@/constants/Colors';
import { Spacing } from '@/constants/theme';

export default function AppTabs() {
  return (
    <Tabs>
      {/* Push the content down below the fixed header */}
      <TabSlot style={{ height: '100%', paddingTop: 80 }} />
      <TabList asChild>
        <CustomTabList>
          <TabTrigger name="home" href={"/dashboard" as any} asChild>
            <TabButton>Home</TabButton>
          </TabTrigger>
          <TabTrigger name="coping" href={"/coping" as any} asChild>
            <TabButton>Calming Corner</TabButton>
          </TabTrigger>
          <TabTrigger name="detective" href={"/detective" as any} asChild>
            <TabButton>Emotion Detective</TabButton>
          </TabTrigger>
          <TabTrigger name="parent" href={"/parent" as any} asChild>
            <TabButton>Parent Hub</TabButton>
          </TabTrigger>
        </CustomTabList>
      </TabList>
    </Tabs>
  );
}

export function TabButton({ children, isFocused, ...props }: TabTriggerSlotProps) {
  return (
    <Pressable
      {...props}
      style={({ hovered, pressed }: any) => [
        styles.tabButton,
        isFocused ? styles.tabButtonActive : styles.tabButtonInactive,
        hovered && !isFocused && styles.tabButtonHovered,
        pressed && styles.pressed,
      ]}
    >
      <Text
        style={[
          styles.tabButtonText,
          isFocused ? styles.tabButtonTextActive : styles.tabButtonTextInactive,
        ]}
      >
        {children}
      </Text>
    </Pressable>
  );
}

export function CustomTabList(props: TabListProps) {
  return (
    <View {...props} style={styles.tabListContainer}>
      <View style={styles.innerContainer}>
        <Text style={styles.brandText}>MoodBuddy 🧸</Text>

        <View style={styles.tabsWrapper}>
          {props.children}
        </View>

        <ExternalLink href="https://github.com/drdhavaltrivedi/ei" asChild>
          <Pressable
            style={({ hovered }: any) => [
              styles.githubLink,
              hovered && styles.githubLinkHovered
            ]}
          >
            <Text style={styles.githubLinkText}>GitHub ↗</Text>
          </Pressable>
        </ExternalLink>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tabListContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: '100%',
    backgroundColor: Colors.white,
    borderBottomWidth: 4,
    borderBottomColor: Colors.border,
    zIndex: 1000,
    // Add a solid shadow under the bar for depth
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 0,
  },
  innerContainer: {
    maxHeight: 70,
    paddingVertical: 14,
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: 1200,
    alignSelf: 'center',
  },
  brandText: {
    fontSize: 22,
    fontWeight: '900',
    color: Colors.text,
  },
  tabsWrapper: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  tabButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: 'transparent',
    transitionProperty: 'transform, background-color, border-color',
    transitionDuration: '0.15s',
  } as any,
  tabButtonActive: {
    backgroundColor: Colors.primary,
    borderColor: Colors.border,
    transform: [{ translateY: -1 }],
    shadowColor: Colors.shadow,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 0,
  },
  tabButtonInactive: {
    backgroundColor: 'transparent',
  },
  tabButtonHovered: {
    backgroundColor: '#F1F5F9',
    borderColor: Colors.border,
  },
  pressed: {
    transform: [{ translateY: 1 }],
    shadowOffset: { width: 0, height: 0 },
  },
  tabButtonText: {
    fontSize: 14,
    fontWeight: '800',
    textAlign: 'center',
  },
  tabButtonTextActive: {
    color: Colors.text,
  },
  tabButtonTextInactive: {
    color: Colors.textSecondary,
  },
  githubLink: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: Colors.border,
    backgroundColor: Colors.white,
    shadowColor: Colors.shadow,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 0,
  },
  githubLinkHovered: {
    transform: [{ translateX: -1 }, { translateY: -1 }],
    shadowOffset: { width: 3, height: 3 },
  },
  githubLinkText: {
    fontSize: 13,
    fontWeight: '900',
    color: Colors.text,
  },
});
