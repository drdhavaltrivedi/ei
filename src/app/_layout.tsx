import { DarkTheme, DefaultTheme, ThemeProvider, Slot, usePathname } from 'expo-router';
import { useColorScheme, Platform } from 'react-native';

import { AnimatedSplashOverlay } from '@/components/animated-icon';
import AppTabs from '@/components/app-tabs';
import { AppProvider } from '@/context/AppContext';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const pathname = usePathname();

  // If on web, render landing and privacy standalone screens without the tabs wrapper
  const isStandaloneWebPage = Platform.OS === 'web' && (pathname === '/' || pathname === '/privacy' || pathname === '/landing');

  return (
    <AppProvider>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <AnimatedSplashOverlay />
        {isStandaloneWebPage ? (
          <Slot />
        ) : (
          <AppTabs />
        )}
      </ThemeProvider>
    </AppProvider>
  );
}
