import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Platform, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { useApp } from '@/context/AppContext';
import { Colors } from '@/constants/Colors';
import { Card } from '@/components/Card';
import { Button } from '@/components/Button';
import { MoodSelector } from '@/components/MoodSelector';

export default function EntryScreen() {
  const router = useRouter();

  if (Platform.OS === 'web') {
    return <LandingWebScreen router={router} />;
  }

  return <DashboardMobileScreen router={router} />;
}

// ==================== LANDING PAGE (WEB ONLY) ====================
function LandingWebScreen({ router }: { router: any }) {
  const handleOpenApp = () => {
    router.push('/dashboard');
  };

  const handleOpenPrivacy = () => {
    router.push('/privacy');
  };

  return (
    <SafeAreaView style={landingStyles.safeArea}>
      <ScrollView contentContainerStyle={landingStyles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Navigation Bar */}
        <View style={landingStyles.navBar}>
          <Text style={landingStyles.logoText}>MoodBuddy 🧸</Text>
          <Button
            title="Launch Web App"
            onPress={handleOpenApp}
            color={Colors.moods.calm.color}
            style={landingStyles.navBtn}
            textStyle={landingStyles.navBtnText}
          />
        </View>

        {/* Hero Section */}
        <View style={landingStyles.heroSection}>
          <Text style={landingStyles.heroTitle}>Help Your Child Navigate Big Feelings! 🌋🧘‍♀️</Text>
          <Text style={landingStyles.heroSub}>
            MoodBuddy is a playful, co-regulation companion that teaches children ages 4-10 how to understand and manage anger, fear, and sadness through interactive play.
          </Text>

          <View style={landingStyles.heroActions}>
            <Button
              title="Try Web Demo Now"
              onPress={handleOpenApp}
              color={Colors.primary}
              style={landingStyles.heroBtn}
            />
          </View>
        </View>

        {/* Visual Mockup Cards (Neo-brutalist) */}
        <View style={landingStyles.featuresGrid}>
          <Card color={Colors.moods.happy.color} style={landingStyles.featureCard}>
            <Text style={landingStyles.featureEmoji}>🕵️‍♂️ Case Solver</Text>
            <Text style={landingStyles.featureTitle}>Emotion Detective</Text>
            <Text style={landingStyles.featureText}>
              Interactive story cases that present real-world playground challenges. Children make choices and learn positive coping outcomes.
            </Text>
          </Card>

          <Card color={Colors.moods.calm.color} style={landingStyles.featureCard}>
            <Text style={landingStyles.featureEmoji}>🎈 Deep Breathing</Text>
            <Text style={landingStyles.featureTitle}>The Calming Balloon</Text>
            <Text style={landingStyles.featureText}>
              Guides kids through slow breathing cycles (Inhale, Hold, Exhale) using expanding animations to cool down the nervous system.
            </Text>
          </Card>

          <Card color={Colors.moods.angry.color} style={landingStyles.featureCard}>
            <Text style={landingStyles.featureEmoji}>🌋 Safe Outlets</Text>
            <Text style={landingStyles.featureTitle}>Anger Volcano</Text>
            <Text style={landingStyles.featureText}>
              Validates the high physical energy of anger. Children tap the volcano to release steam, cooling it down into a green flower garden.
            </Text>
          </Card>
        </View>

        {/* Download Badges (Mock) */}
        <Card color={Colors.white} style={landingStyles.downloadCard}>
          <Text style={landingStyles.downloadTitle}>Download the App for iOS & Android</Text>
          <Text style={landingStyles.downloadSub}>Take MoodBuddy with you on tablets and phones for offline play!</Text>
          <View style={landingStyles.badgeRow}>
            <Button
              title="🍎 App Store (iOS)"
              onPress={() => Linking.openURL('https://apps.apple.com')}
              color={Colors.white}
              style={landingStyles.badgeBtn}
            />
            <Button
              title="🤖 Play Store (Android)"
              onPress={() => Linking.openURL('https://play.google.com')}
              color={Colors.white}
              style={landingStyles.badgeBtn}
            />
          </View>
        </Card>

        {/* For Parents Section */}
        <Card color="#E0F2FE" style={landingStyles.parentCard}>
          <Text style={landingStyles.parentBadge}>PARENT & TEACHER CORNER</Text>
          <Text style={landingStyles.parentTitle}>Designed for Co-Regulation</Text>
          <Text style={landingStyles.parentText}>
            MoodBuddy isn't just a distraction tool. It is built around co-regulation principles. Our Parent Hub provides science-backed articles and logs to help adults partner with kids during moments of high emotional distress.
          </Text>
        </Card>

        {/* Footer */}
        <View style={landingStyles.footer}>
          <Text style={landingStyles.footerText}>© 2026 MoodBuddy. All rights reserved.</Text>
          <View style={landingStyles.footerLinks}>
            <Text style={landingStyles.footerLink} onPress={handleOpenPrivacy}>Privacy Policy (COPPA Compliant)</Text>
            <Text style={landingStyles.footerLink} onPress={handleOpenApp}>Dashboard</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// ==================== APP DASHBOARD (MOBILE ONLY) ====================
function DashboardMobileScreen({ router }: { router: any }) {
  const { childName, addMoodLog, detectivePoints, completedScenarios } = useApp();
  const [selectedMoodId, setSelectedMoodId] = useState<string | undefined>(undefined);

  const handleSelectMood = (moodId: string) => {
    setSelectedMoodId(moodId);
    addMoodLog(moodId as any);
  };

  const getEncouragementText = () => {
    if (!selectedMoodId) return '';
    const mood = Colors.moods[selectedMoodId as keyof typeof Colors.moods];
    if (selectedMoodId === 'angry') {
      return `It is totally okay to feel angry, ${childName}. Let's head over to the Calming Corner to cool down the volcano together!`;
    }
    if (selectedMoodId === 'sad') {
      return `Feeling sad is okay, ${childName}. Crying or taking slow breaths helps. Let's do some balloon breathing.`;
    }
    if (selectedMoodId === 'scared') {
      return `It's okay to feel scared, ${childName}. You are safe. Let's take some deep breaths to help your heart slow down.`;
    }
    return `Awesome! You are feeling ${mood.name} today. Share your joy with someone or solve a new detective story!`;
  };

  return (
    <SafeAreaView style={dashboardStyles.safeArea}>
      <ScrollView contentContainerStyle={dashboardStyles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Welcome Section */}
        <View style={dashboardStyles.header}>
          <Text style={dashboardStyles.welcomeText}>Hey, {childName}! 👋</Text>
          <Text style={dashboardStyles.subWelcomeText}>Welcome to your Mood Buddy dashboard!</Text>
        </View>

        {/* Emotion Check-in */}
        <Card color={Colors.white} style={dashboardStyles.checkInCard}>
          <MoodSelector onSelectMood={handleSelectMood} selectedMoodId={selectedMoodId} />
          
          {selectedMoodId && (
            <Card color={Colors.moods[selectedMoodId as keyof typeof Colors.moods].color} style={dashboardStyles.feedbackCard}>
              <Text style={dashboardStyles.feedbackText}>{getEncouragementText()}</Text>
              <View style={dashboardStyles.feedbackActions}>
                {['angry', 'sad', 'scared'].includes(selectedMoodId) ? (
                  <Button 
                    title="Go to Calming Corner ➔" 
                    onPress={() => router.push('/coping')} 
                    color={Colors.white} 
                  />
                ) : (
                  <Button 
                    title="Play Story Game ➔" 
                    onPress={() => router.push('/detective')} 
                    color={Colors.white} 
                  />
                )}
              </View>
            </Card>
          )}
        </Card>

        {/* Badges and Points Summary */}
        <View style={dashboardStyles.statsRow}>
          <Card color={Colors.moods.happy.color} style={dashboardStyles.statCard}>
            <Text style={dashboardStyles.statEmoji}>★</Text>
            <Text style={dashboardStyles.statValue}>{detectivePoints} pts</Text>
            <Text style={dashboardStyles.statLabel}>Detective Score</Text>
          </Card>
          
          <Card color={Colors.moods.calm.color} style={dashboardStyles.statCard}>
            <Text style={dashboardStyles.statEmoji}>🧩</Text>
            <Text style={dashboardStyles.statValue}>{completedScenarios.length} / 6</Text>
            <Text style={dashboardStyles.statLabel}>Cases Solved</Text>
          </Card>
        </View>

        {/* Daily Tip */}
        <Card color={Colors.primary} style={dashboardStyles.tipCard}>
          <Text style={dashboardStyles.tipTitle}>💡 Mood Tip of the Day</Text>
          <Text style={dashboardStyles.tipText}>
            When a feeling gets too big, it is like a cloud. It will pass! Try taking 3 balloon breaths to let it float away.
          </Text>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}

// ==================== STYLES ====================
const landingStyles = StyleSheet.create({
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

const dashboardStyles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scrollContent: {
    padding: 20,
    gap: 16,
    // Better padding at the bottom for mobile so contents are never cut off by bottom tabs (UI/UX fix)
    paddingBottom: 140,
    alignSelf: 'center',
    width: '100%',
    maxWidth: 600,
  },
  header: {
    marginTop: 10,
    marginBottom: 8,
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: '900',
    color: Colors.text,
  },
  subWelcomeText: {
    fontSize: 16,
    color: Colors.textSecondary,
    fontWeight: '600',
    marginTop: 4,
  },
  checkInCard: {
    padding: 16,
  },
  feedbackCard: {
    marginTop: 16,
    padding: 14,
    borderStyle: 'dashed',
  },
  feedbackText: {
    fontSize: 16,
    fontWeight: '800',
    color: Colors.text,
    lineHeight: 22,
    marginBottom: 12,
  },
  feedbackActions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  statsRow: {
    flexDirection: 'row',
    gap: 16,
    justifyContent: 'space-between',
  },
  statCard: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 16,
    marginVertical: 0,
  },
  statEmoji: {
    fontSize: 32,
    marginBottom: 4,
  },
  statValue: {
    fontSize: 20,
    fontWeight: '900',
    color: Colors.text,
  },
  statLabel: {
    fontSize: 12,
    color: Colors.textSecondary,
    fontWeight: '700',
    marginTop: 2,
  },
  tipCard: {
    padding: 18,
  },
  tipTitle: {
    fontSize: 18,
    fontWeight: '900',
    color: Colors.text,
    marginBottom: 6,
  },
  tipText: {
    fontSize: 14,
    color: Colors.text,
    fontWeight: '700',
    lineHeight: 20,
  },
});
