import React from 'react';
import { StyleSheet, Text, View, ScrollView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import Head from 'expo-router/head';
import { Colors } from '@/constants/Colors';
import { Card } from '@/components/Card';
import { Button } from '@/components/Button';

export default function Blog1Screen() {
  const router = useRouter();

  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "How to Calm a Child's Temper Tantrum: A Parent's Guide to Co-Regulation",
    "description": "Discover the scientific principles behind co-regulation neural mirroring to settle child temper tantrums effectively.",
    "datePublished": "2026-06-04",
    "author": {
      "@type": "Person",
      "name": "MoodBuddy Child Care Experts"
    },
    "publisher": {
      "@type": "Organization",
      "name": "MoodBuddy"
    },
    "url": "https://moodbuddy.brilworks.com/blog/co-regulation-tantrums"
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {Platform.OS === 'web' && (
        <Head>
          <title>How to Calm a Child's Temper Tantrum: Guide to Co-Regulation | MoodBuddy</title>
          <meta name="description" content="Tantrums are natural emotional storms. Read how to co-regulate with your child using neuroscientific mirror methods to restore calmness." />
          <meta name="keywords" content="calm child tantrum, co-regulation parenting, mirror neurons kids, toddler outbursts" />
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

        <Text style={styles.h1}>How to Calm a Child's Temper Tantrum: A Parent's Guide to Co-Regulation</Text>
        
        <View style={styles.metaRow}>
          <Text style={styles.metaText}>Published: June 4, 2026</Text>
          <Text style={styles.metaText}>•</Text>
          <Text style={styles.metaText}>Written by MoodBuddy Specialists</Text>
        </View>

        <Card color={Colors.white} style={styles.contentCard}>
          <Text style={styles.paragraph}>
            It is a scene every parent knows: your child throws themselves onto the floor, screaming, face red, muscles rigid. In the midst of a temper tantrum, it feels like nothing you say or do can break through.
          </Text>
          <Text style={styles.paragraph}>
            Often, our default reaction as adults is to match their volume, demand they "stop immediately," or place them in isolation to "calm down." However, neuroscience shows that young children simply do not have the brain structures required to regulate their nervous systems on their own. Instead, they need a calm adult to partner with them. This process is called <Text style={styles.bold}>co-regulation</Text>.
          </Text>

          <Text style={styles.h2}>🧠 The Science of Co-Regulation: Mirror Neurons</Text>
          <Text style={styles.paragraph}>
            In the human brain, networks of cells called <Text style={styles.italic}>mirror neurons</Text> fire both when we perform an action and when we observe someone else performing it. When a child is in the middle of a tantrum, their emotional brain (the amygdala) is in a state of high alarm. They are experiencing a fight-or-flight response.
          </Text>
          <Text style={styles.paragraph}>
            If you respond with anger, their brain mirrors your threat state, escalating the tantrum. Conversely, if you remain calm, speak in a slow, deep voice, and breathe deeply, their mirror neurons pick up on your calm nervous system. Over several minutes, their amygdala dials down, and their logical prefrontal cortex goes back online.
          </Text>

          <Card color="#E0F2FE" style={styles.calloutCard} noShadow>
            <Text style={styles.calloutTitle}>🔑 Core Principle</Text>
            <Text style={styles.calloutText}>
              A child cannot lend you a calm state they do not possess. You must lend them yours.
            </Text>
          </Card>

          <Text style={styles.h2}>📝 3 Steps to Practice Co-Regulation During a Tantrum</Text>
          
          <Text style={styles.h3}>1. Check Your Own Alarm System First</Text>
          <Text style={styles.paragraph}>
            Before approaching your screaming child, take three slow "balloon breaths" yourself. Notice if your shoulders are tense or your jaw is locked. Relax your muscles. Your calm presence is your primary tool.
          </Text>

          <Text style={styles.h3}>2. Get Down on Their Eye Level</Text>
          <Text style={styles.paragraph}>
            Towering over an angry child feels threatening. Sit on the floor, open your posture, and keep your hands relaxed. Avoid demanding eye contact, which can feel aggressive to a reactive nervous system.
          </Text>

          <Text style={styles.h3}>3. Validate the Feeling with Few Words</Text>
          <Text style={styles.paragraph}>
            A brain in alarm cannot process complex lectures. Use simple sentences: "I see you are really upset," or "It is okay to feel angry. I am right here with you." Let them release the physical energy of the emotion safely.
          </Text>

          <Text style={styles.h2}>🧸 How MoodBuddy Supports Co-Regulation</Text>
          <Text style={styles.paragraph}>
            The MoodBuddy app was designed specifically to support this parent-child mirror loop. When a child selects the "Angry" character, our dashboard suggests opening the "Calming Balloon" or "Volcano Cooler." Together, parent and child can watch the expanding balloon to synchronize their breathing, or tap the volcano to release the physical pressure of the outburst.
          </Text>

          <Button
            title="Try MoodBuddy Web App ➔"
            onPress={() => router.push('/dashboard' as any)}
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
  italic: {
    fontStyle: 'italic',
  },
  calloutCard: {
    marginVertical: 14,
    padding: 14,
    borderWidth: 2,
  },
  calloutTitle: {
    fontSize: 14,
    fontWeight: '900',
    color: '#0284C7',
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
