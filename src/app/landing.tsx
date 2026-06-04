import React from 'react';
import { StyleSheet, Text, View, ScrollView, Platform, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter, Link } from 'expo-router';
import { Colors } from '@/constants/Colors';
import { Card } from '@/components/Card';
import { Button } from '@/components/Button';

export default function LandingPage() {
  const router = useRouter();

  const handleOpenApp = () => {
    router.replace('/');
  };

  const handleOpenPrivacy = () => {
    router.push('/privacy');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Navigation Bar */}
        <View style={styles.navBar}>
          <Text style={styles.logoText}>MoodBuddy</Text>
          <View style={styles.navLinksContainer}>
            <Link href={'/blog' as any} asChild>
              <Button
                title="Parenting Blog"
                onPress={() => {}}
                color={Colors.moods.happy.color}
                style={styles.navBtn}
                textStyle={styles.navBtnText}
              />
            </Link>
            <Button
              title="Launch Web App"
              onPress={handleOpenApp}
              color={Colors.moods.calm.color}
              style={styles.navBtn}
              textStyle={styles.navBtnText}
            />
          </View>
        </View>

        {/* Hero Section */}
        <View style={styles.heroSection}>
          <Text style={styles.heroTitle}>Help Your Child Navigate Big Feelings!</Text>
          <Text style={styles.heroSub}>
            MoodBuddy is a playful, co-regulation companion that teaches children ages 4-10 how to understand and manage anger, fear, and sadness through interactive play.
          </Text>

          <View style={styles.heroActions}>
            <Button
              title="Try Web Demo Now"
              onPress={handleOpenApp}
              color={Colors.primary}
              style={styles.heroBtn}
            />
          </View>
        </View>

        {/* Visual Mockup Cards (Neo-brutalist) */}
        <View style={styles.featuresGrid}>
          <Card color={Colors.moods.happy.color} style={styles.featureCard}>
            <Text style={styles.featureEmoji}>Case Solver</Text>
            <Text style={styles.featureTitle}>Emotion Detective</Text>
            <Text style={styles.featureText}>
              Interactive story cases that present real-world playground challenges. Children make choices and learn positive coping outcomes.
            </Text>
          </Card>

          <Card color={Colors.moods.calm.color} style={styles.featureCard}>
            <Text style={styles.featureEmoji}>Deep Breathing</Text>
            <Text style={styles.featureTitle}>The Calming Balloon</Text>
            <Text style={styles.featureText}>
              Guides kids through slow breathing cycles (Inhale, Hold, Exhale) using expanding animations to cool down the nervous system.
            </Text>
          </Card>

          <Card color={Colors.moods.angry.color} style={styles.featureCard}>
            <Text style={styles.featureEmoji}>Safe Outlets</Text>
            <Text style={styles.featureTitle}>Anger Volcano</Text>
            <Text style={styles.featureText}>
              Validates the high physical energy of anger. Children tap the volcano to release steam, cooling it down into a green flower garden.
            </Text>
          </Card>
        </View>

        {/* Download Badges (Mock) */}
        <Card color={Colors.white} style={styles.downloadCard}>
          <Text style={styles.downloadTitle}>Download the App for iOS & Android</Text>
          <Text style={styles.downloadSub}>Take MoodBuddy with you on tablets and phones for offline play!</Text>
          <View style={styles.badgeRow}>
            <Button
              title="App Store (iOS)"
              onPress={() => Linking.openURL('https://apps.apple.com')}
              color={Colors.white}
              style={styles.badgeBtn}
            />
            <Button
              title="Play Store (Android)"
              onPress={() => Linking.openURL('https://play.google.com')}
              color={Colors.white}
              style={styles.badgeBtn}
            />
          </View>
        </Card>

        {/* For Parents Section */}
        <Card color="#E0F2FE" style={styles.parentCard}>
          <Text style={styles.parentBadge}>PARENT & TEACHER CORNER</Text>
          <Text style={styles.parentTitle}>Designed for Co-Regulation</Text>
          <Text style={styles.parentText}>
            MoodBuddy isn't just a distraction tool. It is built around co-regulation principles. Our Parent Hub provides science-backed articles and logs to help adults partner with kids during moments of high emotional distress.
          </Text>
          <Link href={'/blog' as any} asChild>
            <Button
              title="Read Our Parenting Guides & Blog"
              onPress={() => {}}
              color={Colors.white}
              style={styles.parentBlogBtn}
            />
          </Link>
        </Card>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>© 2026 MoodBuddy. All rights reserved.</Text>
          <View style={styles.footerLinks}>
            <Text style={styles.footerLink} onPress={handleOpenPrivacy}>Privacy Policy (COPPA Compliant)</Text>
            <Link href={'/blog' as any} asChild>
              <Text style={styles.footerLink}>Parenting Blog</Text>
            </Link>
            <Text style={styles.footerLink} onPress={handleOpenApp}>Dashboard</Text>
          </View>
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
    gap: 24,
    alignSelf: 'center',
    width: '100%',
    maxWidth: 800,
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 3,
    borderColor: Colors.border,
    marginBottom: 8,
  },
  navLinksContainer: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
  },
  logoText: {
    fontSize: 22,
    fontWeight: '900',
    color: Colors.text,
  },
  navBtn: {
    minWidth: 100,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  navBtnText: {
    fontSize: 14,
  },
  heroSection: {
    alignItems: 'center',
    paddingVertical: 20,
    gap: 16,
  },
  heroTitle: {
    fontSize: 36,
    fontWeight: '900',
    color: Colors.text,
    textAlign: 'center',
    lineHeight: 44,
  },
  heroSub: {
    fontSize: 16,
    color: Colors.textSecondary,
    fontWeight: '700',
    textAlign: 'center',
    lineHeight: 24,
    maxWidth: 600,
  },
  heroActions: {
    marginTop: 8,
  },
  heroBtn: {
    paddingHorizontal: 32,
    paddingVertical: 14,
  },
  featuresGrid: {
    gap: 16,
  },
  featureCard: {
    padding: 20,
  },
  featureEmoji: {
    fontSize: 22,
    fontWeight: '900',
    color: Colors.text,
    marginBottom: 6,
  },
  featureTitle: {
    fontSize: 20,
    fontWeight: '900',
    color: Colors.text,
    marginBottom: 8,
  },
  featureText: {
    fontSize: 14,
    color: Colors.text,
    fontWeight: '600',
    lineHeight: 20,
  },
  downloadCard: {
    padding: 24,
    alignItems: 'center',
  },
  downloadTitle: {
    fontSize: 20,
    fontWeight: '900',
    color: Colors.text,
    textAlign: 'center',
  },
  downloadSub: {
    fontSize: 13,
    color: Colors.textSecondary,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 6,
    marginBottom: 16,
  },
  badgeRow: {
    flexDirection: 'row',
    gap: 12,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  badgeBtn: {
    minWidth: 150,
  },
  parentCard: {
    padding: 24,
  },
  parentBadge: {
    fontSize: 11,
    fontWeight: '900',
    color: '#0284C7',
    marginBottom: 6,
  },
  parentTitle: {
    fontSize: 22,
    fontWeight: '900',
    color: Colors.text,
    marginBottom: 8,
  },
  parentText: {
    fontSize: 14,
    color: Colors.text,
    fontWeight: '600',
    lineHeight: 22,
  },
  parentBlogBtn: {
    marginTop: 14,
    alignSelf: 'flex-start',
  },
  footer: {
    borderTopWidth: 3,
    borderColor: Colors.border,
    paddingVertical: 20,
    marginTop: 20,
    alignItems: 'center',
    gap: 8,
  },
  footerText: {
    fontSize: 12,
    fontWeight: '700',
    color: Colors.textSecondary,
  },
  footerLinks: {
    flexDirection: 'row',
    gap: 16,
  },
  footerLink: {
    fontSize: 12,
    fontWeight: '800',
    color: Colors.primary,
    textDecorationLine: 'underline',
  },
});
