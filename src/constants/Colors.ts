export const Colors = {
  // Brand Neo-Brutalist Palette
  primary: '#A78BFA',      // Soft Lavender
  background: '#FAF8F5',   // Warm Sand Cream
  backgroundDark: '#121212',
  border: '#1E293B',       // Deep Ink
  shadow: '#1E293B',
  white: '#FFFFFF',
  text: '#1E293B',
  textSecondary: '#64748B',
  
  // Mood / Emotion colors
  moods: {
    happy: {
      id: 'happy',
      name: 'Happy',
      color: '#FCD34D', // Butter Yellow
      emoji: '😊',
      subtitle: 'Energetic & Sunny',
      description: 'You feel full of joy, smiling, and ready to share good vibes!',
    },
    angry: {
      id: 'angry',
      name: 'Angry',
      color: '#FB7185', // Soft Coral / Red
      emoji: '😡',
      subtitle: 'Fiery & Hot',
      description: 'You feel a tight squeeze in your body and a hot rush of energy. It is okay to feel angry!',
    },
    sad: {
      id: 'sad',
      name: 'Sad',
      color: '#60A5FA', // Soft Sky Blue
      emoji: '😢',
      subtitle: 'Rainy & Heavy',
      description: 'You might feel slow, heavy, or like crying. Sad feelings are like rain; they help us grow.',
    },
    scared: {
      id: 'scared',
      name: 'Scared',
      color: '#C084FC', // Playful Purple
      emoji: '😰',
      subtitle: 'Jittery & Alert',
      description: 'Your heart might beat fast, or you feel like hiding. Your body is trying to keep you safe.',
    },
    calm: {
      id: 'calm',
      name: 'Calm',
      color: '#2DD4BF', // Mint Teal
      emoji: '😌',
      subtitle: 'Cool & Peaceful',
      description: 'Your breathing is slow, your muscles are relaxed, and your mind is quiet.',
    },
  },

  // Game details
  badges: {
    color: '#F59E0B',
  }
} as const;

export type MoodType = keyof typeof Colors.moods;
