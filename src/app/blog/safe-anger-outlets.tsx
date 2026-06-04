import React from 'react';
import { StyleSheet, Text, View, ScrollView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import Head from 'expo-router/head';
import { Colors } from '@/constants/Colors';
import { Card } from '@/components/Card';
import { Button } from '@/components/Button';

export default function Blog3Screen() {
  const router = useRouter();

  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Safe Outlets for Kids' Anger: Why Venting Games Work",
    "description": "Learn the psychological reasoning behind physical energy discharge for children experiencing intense anger.",
    "datePublished": "2026-05-20",
    "author": {
      "@type": "Person",
      "name": "MoodBuddy Care Specialists"
    },
    "publisher": {
      "@type": "Organization",
      "name": "MoodBuddy"
    },
    "url": "https://moodbuddy.brilworks.com/blog/safe-anger-outlets"
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {Platform.OS === 'web' && (
        <Head>
          <title>Safe Outlets for Kids' Anger: Why Venting Games Work | MoodBuddy</title>
          <meta name="description" content="Anger causes physiological energy build-up. Learn why suppressing anger fails and how safe, interactive outlets redirect kids' behavior constructively." />
          <meta name="keywords" content="kids anger release, physical outlets anger, anger volcano game, toddler frustration outlets" />
          <script type="application/ld+json">
            {JSON.stringify(jsonLdSchema)}
          </script>
        </Head>
      )}

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Navigation back */}
        <Text style={styles.backLink} onPress={() => router.push('/blog' as any)}>
          ⇠ Back to Blog list
        </Text>

        <Text style={styles.h1}>Safe Outlets for Kids' Anger: Why Venting Games Work</Text>
        
        <View style={styles.metaRow}>
          <Text style={styles.metaText}>Published: May 20, 2026</Text>
          <Text style={styles.metaText}>•</Text>
          <Text style={styles.metaText}>Written by MoodBuddy Specialists</Text>
        </View>

        <Card color={Colors.white} style={styles.contentCard}>
          <Text style={styles.paragraph}>
            "Don't shout! Stop crying! Go to your room!" These are common demands made by overwhelmed parents when a child experiences intense anger. It is natural to want to suppress the screaming or physical outbursts.
          </Text>
          <Text style={styles.paragraph}>
            However, child development research reveals that anger is a high-energy physiological response. Telling a child to simply "stop feeling that way" is like putting a tight lid on a boiling pot of water. The pressure will eventually build up and result in an even larger explosion.
          </Text>

          <Text style={styles.h2}>⚡ The Physical Energy of Anger</Text>
          <Text style={styles.paragraph}>
            Anger is a survival emotion. When triggered, the body releases adrenaline and cortisol. Heart rate increases, blood flow goes to the muscles, and breathing becomes shallow. The child literally has physical energy surging through their arms and legs.
          </Text>
          <Text style={styles.paragraph}>
            If we demand they sit perfectly still in a time-out, we force them to bottle up that physical energy. This can lead to chronic emotional dysregulation, anxiety, or aggression. Instead, we must teach them how to redirect that physical energy into <Text style={styles.bold}>safe, non-destructive outlets</Text>.
          </Text>

          <Card color="#ECE9FC" style={styles.calloutCard} noShadow>
            <Text style={styles.calloutTitle}>🌋 The Volcano Concept</Text>
            <Text style={styles.calloutText}>
              Anger energy needs to go somewhere. The goal is to channel it safely, not extinguish it immediately.
            </Text>
          </Card>

          <Text style={styles.h2}>🎯 Why Interactive Venting Games Work</Text>
          <Text style={styles.paragraph}>
            This is where interactive play comes in. A venting game takes the child's physical energy and directs it into a safe, digital canvas:
          </Text>
          
          <Text style={styles.h3}>1. Safe Release of Physical Energy</Text>
          <Text style={styles.paragraph}>
            Tapping, shaking, or moving elements on a screen lets the child discharge physical tension in a structured way that does not hurt themselves, others, or destroy property.
          </Text>

          <Text style={styles.h3}>2. Visualizing Emotional Transformation</Text>
          <Text style={styles.paragraph}>
            Young children think in concrete terms. Telling them "calm down" is abstract. But showing them a hot red volcano that slowly cools down to green with flowers as they tap represents their own inner emotional state cooling down, giving them a visible path to calm.
          </Text>

          <Text style={styles.h3}>3. Non-judgmental Validation</Text>
          <Text style={styles.paragraph}>
            Unlike a parent who may react with frustration, the game is neutral. It validates the child's anger: "It is okay to let the steam out!" This validation reduces the child's sense of shame and distress.
          </Text>

          <Text style={styles.h2}>🌋 The Volcano Cooler Game in MoodBuddy</Text>
          <Text style={styles.paragraph}>
            The "Volcano Cooler" in our Calming Corner tab was built specifically on these principles. Children who feel angry can tap the erupting volcano. Each tap shakes the screen (validating their energetic outburst) and reduces the "Anger Meter." As they continue, they watch the red smoke clear, the lava harden, and flowers grow. Once the volcano is cool, they are prompted to take slow balloon breaths to transition back to a quiet, relaxed state.
          </Text>

          <Button
            title="Cool the Volcano Web Demo ➔"
            onPress={() => router.push('/coping' as any)}
            color={Colors.primary}
            style={styles.actionBtn}
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
    gap: 12,
    paddingBottom: Platform.OS === 'web' ? 120 : 140,
    alignSelf: 'center',
    width: '100%',
    maxWidth: 650,
  },
  backLink: {
    fontSize: 14,
    fontWeight: '900',
    color: Colors.primary,
    marginBottom: 8,
  },
  h1: {
    fontSize: 26,
    fontWeight: '900',
    color: Colors.text,
    lineHeight: 34,
  },
  h2: {
    fontSize: 18,
    fontWeight: '900',
    color: Colors.text,
    marginTop: 20,
    marginBottom: 8,
    lineHeight: 24,
  },
  h3: {
    fontSize: 15,
    fontWeight: '900',
    color: Colors.text,
    marginTop: 12,
    marginBottom: 4,
  },
  metaRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 12,
  },
  metaText: {
    fontSize: 12,
    fontWeight: '800',
    color: Colors.textSecondary,
  },
  contentCard: {
    padding: 20,
  },
  paragraph: {
    fontSize: 15,
    fontWeight: '600',
    color: Colors.text,
    lineHeight: 24,
    marginBottom: 12,
  },
  bold: {
    fontWeight: '900',
  },
  calloutCard: {
    marginVertical: 14,
    padding: 14,
    borderWidth: 2,
  },
  calloutTitle: {
    fontSize: 14,
    fontWeight: '900',
    color: '#6366F1',
    marginBottom: 4,
  },
  calloutText: {
    fontSize: 14,
    fontWeight: '800',
    color: Colors.text,
    lineHeight: 18,
  },
  actionBtn: {
    marginTop: 18,
    alignSelf: 'stretch',
  },
});
