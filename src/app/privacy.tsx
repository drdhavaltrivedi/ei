import React from 'react';
import { StyleSheet, Text, View, ScrollView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Colors } from '@/constants/Colors';
import { Card } from '@/components/Card';
import { Button } from '@/components/Button';

export default function PrivacyPolicyPage() {
  const router = useRouter();

  const handleBack = () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.replace('/landing');
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Privacy Policy 🛡️🔒</Text>
          <Text style={styles.subtitle}>Last updated: June 4, 2026</Text>
        </View>

        {/* COPPA Compliant Notice */}
        <Card color="#FEF3C7" style={styles.coppaCard}>
          <Text style={styles.coppaTitle}>🍼 Kids & Parent Friendly (COPPA Compliant)</Text>
          <Text style={styles.coppaText}>
            We care deeply about children's safety. This app does NOT collect, upload, share, or transmit any personal data from children. Everything is saved locally on your device.
          </Text>
        </Card>

        {/* Sections */}
        <Card color={Colors.white} style={styles.card}>
          <Text style={styles.sectionTitle}>1. What Information Do We Collect?</Text>
          <Text style={styles.text}>
            We do <Text style={styles.bold}>NOT</Text> collect any personal information (such as name, email, phone number, location, or photos) from you or your child. 
          </Text>
          <Text style={styles.text}>
            Any names entered in the settings panel (e.g., child's first name) or daily check-in histories are saved strictly inside your device's native local database (<Text style={styles.code}>AsyncStorage</Text>) and never transmitted to our servers or any third-party systems.
          </Text>
        </Card>

        <Card color={Colors.white} style={styles.card}>
          <Text style={styles.sectionTitle}>2. Third-Party Advertisements & Trackers</Text>
          <Text style={styles.text}>
            MoodBuddy contains <Text style={styles.bold}>ZERO</Text> advertisements, behavioral trackers, or third-party analytics SDKs. Your child's interaction with the app is completely private, safe, and clean.
          </Text>
        </Card>

        <Card color={Colors.white} style={styles.card}>
          <Text style={styles.sectionTitle}>3. Data Storage & Management</Text>
          <Text style={styles.text}>
            All logs, settings, and points data stay on the phone, tablet, or web browser cache you are using. You can clear this data at any time by:
          </Text>
          <Text style={styles.bullet}>• Pressing "Reset All App Data" in the Parent Hub settings panel.</Text>
          <Text style={styles.bullet}>• Clearing your web browser's cookies/local storage.</Text>
          <Text style={styles.bullet}>• Uninstalling the mobile application.</Text>
        </Card>

        <Card color={Colors.white} style={styles.card}>
          <Text style={styles.sectionTitle}>4. Contact Us</Text>
          <Text style={styles.text}>
            If you have any questions or feedback about this privacy policy, please contact our support team at:
          </Text>
          <Text style={styles.bold}>support@moodbuddy.com</Text>
        </Card>

        {/* Action Button */}
        <Button
          title="Back to Landing Page"
          onPress={handleBack}
          color={Colors.primary}
          style={styles.backBtn}
        />
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
    paddingBottom: Platform.OS === 'web' ? 100 : 40,
    alignSelf: 'center',
    width: '100%',
    maxWidth: 600,
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
    fontSize: 13,
    color: Colors.textSecondary,
    fontWeight: '700',
    marginTop: 4,
  },
  coppaCard: {
    padding: 16,
  },
  coppaTitle: {
    fontSize: 16,
    fontWeight: '900',
    color: '#D97706',
    marginBottom: 6,
  },
  coppaText: {
    fontSize: 14,
    color: Colors.text,
    fontWeight: '700',
    lineHeight: 20,
  },
  card: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '900',
    color: Colors.text,
    marginBottom: 8,
  },
  text: {
    fontSize: 14,
    color: Colors.text,
    fontWeight: '600',
    lineHeight: 20,
    marginBottom: 8,
  },
  bullet: {
    fontSize: 13,
    color: Colors.text,
    fontWeight: '700',
    lineHeight: 18,
    marginLeft: 8,
    marginVertical: 2,
  },
  bold: {
    fontWeight: '900',
  },
  code: {
    fontWeight: '800',
    backgroundColor: '#F1F5F9',
    paddingHorizontal: 4,
    borderRadius: 4,
  },
  backBtn: {
    alignSelf: 'stretch',
    marginTop: 8,
  },
});
