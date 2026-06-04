import React from 'react';
import { StyleSheet, Text, View, ScrollView, Platform, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import Head from 'expo-router/head';
import { Colors } from '@/constants/Colors';
import { Card } from '@/components/Card';
import { Button } from '@/components/Button';

export default function BlogListScreen() {
  const router = useRouter();

  const blogs = [
    {
      id: 'co-regulation-tantrums',
      title: "How to Calm a Child's Temper Tantrum: A Parent's Guide to Co-Regulation",
      excerpt: "Children don't have the brain structures to calm down alone. Learn how co-regulation helps settle tantrums using parent-child neural mirrors.",
      date: "June 4, 2026",
      readTime: "5 min read",
      color: '#E0F2FE',
    },
    {
      id: 'name-it-to-tame-it',
      title: "Why Naming Emotions Helps Kids Calm Down (Name It to Tame It)",
      excerpt: "Vocalizing big feelings shifts child brain activity from the reactive amygdala to the logical prefrontal cortex. Discover how to teach emotional naming.",
      date: "May 28, 2026",
      readTime: "4 min read",
      color: '#FEF3C7',
    },
    {
      id: 'safe-anger-outlets',
      title: "Safe Outlets for Kids' Anger: Why Venting Games Work",
      excerpt: "Anger produces intense physical energy. Suppressing it can backfire. Discover how interactive releases safely discharge emotional stress.",
      date: "May 20, 2026",
      readTime: "4 min read",
      color: '#ECE9FC',
    },
  ];

  // Schema Markup for Search Engines (AEO/GEO optimization)
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "MoodBuddy Parenting & Emotional Intelligence Blog",
    "description": "Scientific, parenting guides for co-regulation, tantrums, and child emotional vocabulary.",
    "publisher": {
      "@type": "Organization",
      "name": "MoodBuddy",
      "logo": {
        "@type": "ImageObject",
        "url": "https://moodbuddy.brilworks.com/assets/images/icon.png"
      }
    },
    "url": "https://moodbuddy.brilworks.com/blog"
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Inject SEO / AEO Meta Tags on Web platform */}
      {Platform.OS === 'web' && (
        <Head>
          <title>MoodBuddy Blog - Parenting, Child Co-Regulation & Anger Management Tips</title>
          <meta name="description" content="Access parenting blogs and articles on child co-regulation, calming temper tantrums, naming feelings, and directing kids' anger outbursts safely." />
          <meta name="keywords" content="child tantrums, co-regulation parenting, name it to tame it, kids anger outlets, child emotional intelligence" />
          <meta property="og:title" content="MoodBuddy Parenting & Emotional Intelligence Blog" />
          <meta property="og:description" content="Science-backed guides to helping children handle anger, anxiety, and big feelings." />
          <meta property="og:url" content="https://moodbuddy.brilworks.com/blog" />
          <meta property="og:type" content="website" />
          <script type="application/ld+json">
            {JSON.stringify(jsonLdSchema)}
          </script>
        </Head>
      )}

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Parenting & EQ Resources 📚</Text>
          <Text style={styles.subtitle}>
            Read simple, science-backed guides on co-regulation, temper tantrums, and healthy emotional development.
          </Text>
        </View>

        {/* Blog Post List */}
        <View style={styles.list}>
          {blogs.map((blog) => (
            <Card
              key={blog.id}
              color={Colors.white}
              onPress={() => router.push(`/blog/${blog.id}` as any)}
              style={styles.blogCard}
            >
              <View style={[styles.colorTab, { backgroundColor: blog.color }]} />
              <View style={styles.cardInfo}>
                <View style={styles.metaRow}>
                  <Text style={styles.metaText}>{blog.date}</Text>
                  <Text style={styles.metaText}>•</Text>
                  <Text style={styles.metaText}>{blog.readTime}</Text>
                </View>
                <Text style={styles.blogTitle}>{blog.title}</Text>
                <Text style={styles.blogExcerpt}>{blog.excerpt}</Text>
                <Text style={styles.readMore}>Read Article ➔</Text>
              </View>
            </Card>
          ))}
        </View>

        {/* Footer Actions */}
        <View style={styles.footerRow}>
          <Button
            title="Back to Landing Page"
            onPress={() => router.push('/landing')}
            color={Colors.primary}
            style={styles.backBtn}
          />
        </View>
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
    gap: 16,
    paddingBottom: Platform.OS === 'web' ? 120 : 140,
    alignSelf: 'center',
    width: '100%',
    maxWidth: 650,
  },
  header: {
    marginTop: 10,
    marginBottom: 8,
  },
  title: {
    fontSize: 26,
    fontWeight: '900',
    color: Colors.text,
  },
  subtitle: {
    fontSize: 15,
    color: Colors.textSecondary,
    fontWeight: '600',
    marginTop: 4,
    lineHeight: 22,
  },
  list: {
    gap: 16,
    marginTop: 8,
  },
  blogCard: {
    padding: 0,
    overflow: 'hidden',
    flexDirection: 'row',
  },
  colorTab: {
    width: 14,
    height: '100%',
    borderRightWidth: 3,
    borderColor: Colors.border,
  },
  cardInfo: {
    flex: 1,
    padding: 16,
    gap: 8,
  },
  metaRow: {
    flexDirection: 'row',
    gap: 6,
  },
  metaText: {
    fontSize: 12,
    fontWeight: '800',
    color: Colors.textSecondary,
  },
  blogTitle: {
    fontSize: 18,
    fontWeight: '900',
    color: Colors.text,
    lineHeight: 24,
  },
  blogExcerpt: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.text,
    lineHeight: 20,
  },
  readMore: {
    fontSize: 13,
    fontWeight: '900',
    color: Colors.primary,
    marginTop: 4,
  },
  footerRow: {
    marginTop: 16,
  },
  backBtn: {
    alignSelf: 'stretch',
  },
});
