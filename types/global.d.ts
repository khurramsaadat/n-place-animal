declare module 'json5';
declare module 'prop-types';

// Add any other global type declarations here
declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test';
    // Add other environment variables here
  }
} 