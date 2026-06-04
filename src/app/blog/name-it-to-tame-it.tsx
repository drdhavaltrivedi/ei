import React from 'react';
import { StyleSheet, Text, View, ScrollView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import Head from 'expo-router/head';
import { Colors } from '@/constants/Colors';
import { Card } from '@/components/Card';
import { Button } from '@/components/Button';

export default function Blog2Screen() {
  const router = useRouter();

  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Why Naming Emotions Helps Kids Calm Down (Name It to Tame It)",
    "description": "Learn how vocalizing big feelings triggers brain-level emotional regulation in children according to neuroscience.",
    "datePublished": "2026-05-28",
    "author": {
      "@type": "Person",
      "name": "MoodBuddy Care Specialists"
    },
    "publisher": {
      "@type": "Organization",
      "name": "MoodBuddy"
    },
    "url": "https://moodbuddy.brilworks.com/blog/name-it-to-tame-it"
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {Platform.OS === 'web' && (
        <Head>
          <title>Why Naming Emotions Helps Kids Calm Down (Name It to Tame It) | MoodBuddy</title>
          <meta name="description" content="Discover the neuroscience of naming feelings. Help children learn to express anger, sadness, and fear with words to soothe prefrontal cortex reactivity." />
          <meta name="keywords" content="name it to tame it, emotional vocabulary children, kids naming feelings, child neurodevelopment" />
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

        <Text style={styles.h1}>Why Naming Emotions Helps Kids Calm Down (Name It to Tame It)</Text>
        
        <View style={styles.metaRow}>
          <Text style={styles.metaText}>Published: May 28, 2026</Text>
          <Text style={styles.metaText}>•</Text>
          <Text style={styles.metaText}>Written by MoodBuddy Specialists</Text>
        </View>

        <Card color={Colors.white} style={styles.contentCard}>
          <Text style={styles.paragraph}>
            When a young child is overwhelmed by an emotion, they often react physically: they hit, kick, throw, or scream. To adults, this looks like bad behavior. But to a child psychologist, this is a sign that the child is literally overwhelmed by physiological sensations.
          </Text>
          <Text style={styles.paragraph}>
            One of the most powerful tools in emotional education is a simple concept coined by Dr. Dan Siegel: <Text style={styles.bold}>"Name it to tame it."</Text> Simply identifying and saying the name of a feeling out loud transforms the physical experience of that feeling in the brain.
          </Text>

          <Text style={styles.h2}>🧠 What Happens in the Brain When We Name a Feeling?</Text>
          <Text style={styles.paragraph}>
            When a child feels intense anger or fear, their amygdala (the brain's emotional fire alarm) is highly active, producing physical stress responses. Because the child's prefrontal cortex (the logical, thinking part of the brain) is still developing, they lack the ability to explain what is happening.
          </Text>
          <Text style={styles.paragraph}>
            When we prompt them to name the emotion, or when we name it for them, we trigger activity in the left prefrontal cortex. This verbal identification acts like a cooling valve. It sends chemical signals to soothe the amygdala, reducing the intensity of the physical emotional reaction immediately.
          </Text>

          <Card color="#FEF3C7" style={styles.calloutCard} noShadow>
            <Text style={styles.calloutTitle}>💡 The Brain Shift</Text>
            <Text style={styles.calloutText}>
              Vocalizing "I feel angry" shifts brain activity from reactive survival mode (amygdala) to conscious awareness (prefrontal cortex).
            </Text>
          </Card>

          <Text style={styles.h2}>🌱 How to Teach Kids to Name Their Feelings</Text>
          
          <Text style={styles.h3}>1. Expand Their Emotional Vocabulary</Text>
          <Text style={styles.paragraph}>
            Children default to broad terms: "mad" or "bad." Teach them specific nuance. Use colors, weather symbols, or descriptive cards to differentiate:
          </Text>
          <Text style={styles.bullet}>• <Text style={styles.bold}>Happy</Text>: Sunny, energetic, light.</Text>
          <Text style={styles.bullet}>• <Text style={styles.bold}>Sad</Text>: Heavy, rainy cloud, slow.</Text>
          <Text style={styles.bullet}>• <Text style={styles.bold}>Angry</Text>: Hot lava, tight squeeze, volcano.</Text>
          <Text style={styles.bullet}>• <Text style={styles.bold}>Scared</Text>: Jittery, fast heart beats, cold.</Text>

          <Text style={styles.h3}>2. Model Naming in Your Daily Life</Text>
          <Text style={styles.paragraph}>
            Let children hear you name your own emotions. Say: "I am feeling a little frustrated that we are stuck in traffic, so I am going to take a deep breath." This shows them that having feelings is normal and manageable.
          </Text>

          <Text style={styles.h3}>3. Play Scenario Games</Text>
          <Text style={styles.paragraph}>
            Talking about emotions in the heat of a tantrum is difficult. The best time to build these connections is during play. Introduce stories where characters experience challenges, and ask the child how that character might feel.
          </Text>

          <Text style={styles.h2}>🕵️‍♂️ Resolving "Cases" in MoodBuddy</Text>
          <Text style={styles.paragraph}>
            Our "Emotion Detective" mini-game is structured around "Name it to tame it." Children read scenario cases (like Liam's block tower falling) and analyze how the character is feeling. By matching the feeling with a healthy verbal response, children practice the neural circuits they will need to handle their own real-life frustrations.
          </Text>

          <Button
            title="Practice in the Web App ➔"
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
  bullet: {
    fontSize: 14,
    fontWeight: '700',
    color: Colors.text,
    marginLeft: 12,
    marginVertical: 3,
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
    color: '#D97706',
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
