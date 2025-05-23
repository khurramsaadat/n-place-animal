export const config = {
  app: {
    name: 'Name Place Animal Thing',
    url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  },
  game: {
    roundTime: Number(process.env.NEXT_PUBLIC_ROUND_TIME) || 60,
    minWordLength: Number(process.env.NEXT_PUBLIC_MIN_WORD_LENGTH) || 2,
  },
  supabase: {
    url: process.env.NEXT_PUBLIC_SUPABASE_URL,
    anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  },
} as const;

export type Config = typeof config; 