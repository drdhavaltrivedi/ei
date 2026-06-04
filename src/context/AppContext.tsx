import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Colors } from '../constants/Colors';

export interface MoodLog {
  id: string;
  date: string;
  mood: string;
  emoji: string;
  color: string;
}

interface AppContextType {
  childName: string;
  setChildName: (name: string) => void;
  moodHistory: MoodLog[];
  addMoodLog: (moodId: keyof typeof Colors.moods) => void;
  detectivePoints: number;
  addPoints: (points: number) => void;
  completedScenarios: string[];
  completeScenario: (scenarioId: string) => void;
  resetAllData: () => Promise<void>;
  loading: boolean;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const ASYNC_KEYS = {
  CHILD_NAME: 'moodbuddy_child_name',
  MOOD_HISTORY: 'moodbuddy_mood_history',
  POINTS: 'moodbuddy_points',
  COMPLETED_SCENARIOS: 'moodbuddy_completed_scenarios',
};

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [childName, _setChildName] = useState<string>('Buddy');
  const [moodHistory, setMoodHistory] = useState<MoodLog[]>([]);
  const [detectivePoints, setDetectivePoints] = useState<number>(0);
  const [completedScenarios, setCompletedScenarios] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Load data on mount
  useEffect(() => {
    const loadData = async () => {
      try {
        const storedName = await AsyncStorage.getItem(ASYNC_KEYS.CHILD_NAME);
        const storedHistory = await AsyncStorage.getItem(ASYNC_KEYS.MOOD_HISTORY);
        const storedPoints = await AsyncStorage.getItem(ASYNC_KEYS.POINTS);
        const storedScenarios = await AsyncStorage.getItem(ASYNC_KEYS.COMPLETED_SCENARIOS);

        if (storedName) _setChildName(storedName);
        if (storedHistory) setMoodHistory(JSON.parse(storedHistory));
        if (storedPoints) setDetectivePoints(parseInt(storedPoints, 10) || 0);
        if (storedScenarios) setCompletedScenarios(JSON.parse(storedScenarios));
      } catch (e) {
        console.error('Failed to load data from storage', e);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const setChildName = async (name: string) => {
    try {
      const cleanName = name.trim() || 'Buddy';
      _setChildName(cleanName);
      await AsyncStorage.setItem(ASYNC_KEYS.CHILD_NAME, cleanName);
    } catch (e) {
      console.error(e);
    }
  };

  const addMoodLog = async (moodId: keyof typeof Colors.moods) => {
    try {
      const moodConfig = Colors.moods[moodId];
      const newLog: MoodLog = {
        id: Math.random().toString(36).substring(7),
        date: new Date().toLocaleDateString(undefined, {
          month: 'short',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
        }),
        mood: moodConfig.name,
        emoji: moodConfig.emoji,
        color: moodConfig.color,
      };

      const updatedHistory = [newLog, ...moodHistory].slice(0, 50); // Keep last 50 entries
      setMoodHistory(updatedHistory);
      await AsyncStorage.setItem(ASYNC_KEYS.MOOD_HISTORY, JSON.stringify(updatedHistory));
    } catch (e) {
      console.error(e);
    }
  };

  const addPoints = async (points: number) => {
    try {
      const updatedPoints = detectivePoints + points;
      setDetectivePoints(updatedPoints);
      await AsyncStorage.setItem(ASYNC_KEYS.POINTS, String(updatedPoints));
    } catch (e) {
      console.error(e);
    }
  };

  const completeScenario = async (scenarioId: string) => {
    try {
      if (!completedScenarios.includes(scenarioId)) {
        const updatedScenarios = [...completedScenarios, scenarioId];
        setCompletedScenarios(updatedScenarios);
        await AsyncStorage.setItem(ASYNC_KEYS.COMPLETED_SCENARIOS, JSON.stringify(updatedScenarios));
      }
    } catch (e) {
      console.error(e);
    }
  };

  const resetAllData = async () => {
    try {
      await Promise.all([
        AsyncStorage.removeItem(ASYNC_KEYS.CHILD_NAME),
        AsyncStorage.removeItem(ASYNC_KEYS.MOOD_HISTORY),
        AsyncStorage.removeItem(ASYNC_KEYS.POINTS),
        AsyncStorage.removeItem(ASYNC_KEYS.COMPLETED_SCENARIOS),
      ]);
      _setChildName('Buddy');
      setMoodHistory([]);
      setDetectivePoints(0);
      setCompletedScenarios([]);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <AppContext.Provider
      value={{
        childName,
        setChildName,
        moodHistory,
        addMoodLog,
        detectivePoints,
        addPoints,
        completedScenarios,
        completeScenario,
        resetAllData,
        loading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
