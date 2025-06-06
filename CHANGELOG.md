# Changelog

All notable changes to this project will be documented in this file.

## [2024-03-23]

### Added
- Background music preloading functionality
- Simple play/pause toggle for background music
- Fixed comfortable volume level (15%) for background music
- Enhanced mobile menu with clean separators and subtle transitions
- Professional hover states and active indicators in mobile menu

### Changed
- Removed volume control slider from background music component
- Simplified mobile menu animations for better user experience
- Updated mobile menu separators to use clean gray lines
- Improved mobile menu interaction states

### Project Structure
```
n-place-animal
  .next/
    cache/
    server/
    static/
    types/
  public/
    music/
      background-music.mp3
    sounds/
  src/
    app/
      api/
      leaderboard/
      rules/
      training/
    components/
      game/
      training/
      ui/
    hooks/
    lib/
  types/
  .eslintrc.json
  .gitignore
  CHANGELOG.md
  eslint.config.mjs
  instructions.md
  netlify.toml
  next-env.d.ts
  next.config.mjs
  next.config.ts
  package-lock.json
  package.json
  postcss.config.js
  postcss.config.mjs
  README.md
  tailwind.config.js
  tsconfig.json
```

## [2024-03-19]

### Project Initialization
- Created Next.js 14 project with TypeScript and Tailwind CSS
- Set up initial project structure
- Added game-specific components structure

### Directory Structure
```
name-place-animal/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── game/
│   │   │   ├── GameBoard.tsx
│   │   │   ├── LetterDisplay.tsx
│   │   │   ├── Timer.tsx
│   │   │   └── InputFields.tsx
│   │   ├── ui/
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   └── shared/
│   ├── lib/
│   │   ├── utils.ts
│   │   └── constants.ts
│   └── styles/
├── public/
│   └── assets/
├── .env.local.example
└── README.md
```

### Added
- Project initialization with Next.js 14
- TypeScript configuration
- Tailwind CSS setup
- Basic project structure
- Game-specific component templates

### Technical Details
- Next.js version: 14.x
- TypeScript version: 5.x
- Tailwind CSS version: 3.x
- Node.js version: 20.x

### Commands Used
```bash
- npm run dev (Development server)
```

## [2024-03-09] - Enhancement: Hint System and Repository Setup

### Added
- Modified HintPanel component to show exactly 3 hints per category
- Added period at the end of hint lists
- Implemented comma-separated format for hints
- Set up GitHub repository at https://github.com/khurramsaadat/name-place.git

### Changed
- Updated hint display format to: "Category: Hint1, Hint2, Hint3."
- Improved hint loading and error handling
- Enhanced fallback system for when hints are not available

### Project Structure
```
name-place-animal/
├── .cursor/
│   └── rules/
│       └── khurram-rules.mdc
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── search/
│   │   │       └── route.ts
│   │   ├── leaderboard/
│   │   │   └── page.tsx
│   │   ├── rules/
│   │   │   └── page.tsx
│   │   ├── training/
│   │   │   └── page.tsx
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── game/
│   │   │   ├── GameBoard.tsx
│   │   │   ├── GameResults.tsx
│   │   │   ├── InputFields.tsx
│   │   │   ├── LetterDisplay.tsx
│   │   │   └── Timer.tsx
│   │   ├── training/
│   │   │   ├── HintPanel.tsx
│   │   │   └── ProgressTracker.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   └── Hero.tsx
│   └── lib/
│       ├── config.ts
│       └── utils.ts
├── public/
├── CHANGELOG.md
├── README.md
├── instructions.md
├── netlify.toml
├── package.json
└── package-lock.json
```

### Technical Details
- Next.js 14 with App Router
- TypeScript for type safety
- Tailwind CSS for styling
- DuckDuckGo API integration for hints
- Mobile-first responsive design

### Git Commands Used
```bash
git add .
git commit -m "Initial commit: Basic UX for Name Place Animal Thing game"
git branch -M main
git push -u origin main
```

## [2024-02-20] - Initial Setup

### Added
- Initial project structure with Next.js 14.2.29
- Basic game components and UI elements
- Training mode implementation
- Leaderboard page
- Rules page
- Background music component
- Search functionality
- TypeScript configuration
- ESLint setup
- Tailwind CSS integration
- Netlify deployment configuration

### Directory Structure
```
n-place-animal/
├── .next/
├── public/
│   └── music/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── search/
│   │   ├── leaderboard/
│   │   ├── rules/
│   │   └── training/
│   ├── components/
│   │   ├── game/
│   │   ├── training/
│   │   └── ui/
│   ├── hooks/
│   └── lib/
├── .eslintrc.json
├── .gitignore
├── CHANGELOG.md
├── README.md
├── next.config.mjs
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── tsconfig.json
```

### Technical Details
- Next.js version: 14.2.29
- React version: 18
- TypeScript version: 5
- Node.js compatibility: 18.x or higher
- Deployment target: Netlify

### Security Updates
- Fixed critical security vulnerabilities in Next.js
- Updated all dependencies to their latest secure versions
- Implemented proper security headers

### Configuration
- Set up static HTML export for Netlify
- Configured Tailwind CSS with proper theme support
- Added ESLint rules for code quality
- Set up TypeScript strict mode

## [2024-02-20] - Tailwind CSS Migration

### Changed
- Updated Tailwind CSS configuration
- Updated PostCSS configuration to use `@tailwindcss/postcss`
- Simplified globals.css to use new Tailwind CSS import syntax
- Removed deprecated Tailwind directives and configurations
- Converted @apply directives to standard CSS
- Updated package dependencies to latest versions

### Added
- Added `@tailwindcss/postcss` package
- Added proper CSS variable usage for theme colors

### Removed
- Removed deprecated Tailwind CSS configuration
- Removed unnecessary dependencies
- Removed outdated PostCSS plugins

### Directory Structure
```
n-place-animal/
├── .next/
├── public/
│   └── music/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── search/
│   │   ├── leaderboard/
│   │   ├── rules/
│   │   └── training/
│   ├── components/
│   │   ├── game/
│   │   ├── training/
│   │   └── ui/
│   ├── hooks/
│   └── lib/
├── postcss.config.js
├── tailwind.config.js
└── package.json
```

### Technical Details
- Node.js environment: Windows 11
- IDE: Cursor AI
- Next.js version: 14.2.29
- React version: 18 

## [2024-02-20] - Netlify Static Export Configuration

### Changed
- Updated Next.js configuration for static export
- Modified Netlify deployment settings
- Removed @netlify/plugin-nextjs in favor of static export
- Updated build configuration in netlify.toml

### Technical Details
- Set output to 'export' in next.config.mjs
- Changed publish directory to 'out'
- Added NETLIFY_NEXT_PLUGIN_SKIP environment variable
- Simplified build process for static deployment

## [2025-05-26] - Game UI Improvements

### Changed
- Removed auto-scroll behavior from both desktop and mobile views
- Updated GameBoard component to show both "Done" and "Play Again" buttons during active game
- Made Progress Tracker more compact with reduced padding/margins
- Removed Category Strengths section from Progress Tracker
- Updated Recent Games table with new columns (Time Used, Speed Bonus)
- Added mobile-friendly card view for Recent Games
- Added fade highlight animation for new game entries

### Added
- New fade highlight animation in Tailwind config
- Added timeUsed, speedBonus, and baseScore to GameResult interface

### Directory Structure
```
n-place-animal
  .next/
  public/
    music/
    sounds/
  src/
    app/
      api/
      leaderboard/
      rules/
      training/
      word-bank/
    components/
      game/
      training/
      ui/
    hooks/
    lib/
  types/
  .eslintrc.json
  .gitignore
  CHANGELOG.md
  eslint.config.mjs
  instructions.md
  netlify.toml
  next-env.d.ts
  next.config.mjs
  next.config.ts
  package-lock.json
  package.json
  postcss.config.js
  postcss.config.mjs
  README.md
  tailwind.config.js
  tsconfig.json
```

## [2024-05-26]

### Fixed
- Webpack cache issue causing build failures
- Cleaned up webpack cache to resolve file rename errors
- Updated Netlify and Next.js configurations for proper static deployment
  - Changed Next.js output directory to 'out'
  - Updated Netlify publish directory to match Next.js output
  - Ensured proper static export settings

### Project Structure
```
n-place-animal
  .next/
    cache/
      swc/
        plugins/
          v7_windows_x86_64_0.106.15/
      webpack/
        client-development/
        server-development/
    server/
      app/
        _not-found/
        favicon.ico/
        leaderboard/
        rules/
        training/
        word-bank/
      pages/
      vendor-chunks/
    static/
      chunks/
        app/
          _not-found/
          leaderboard/
          rules/
          training/
          word-bank/
        pages/
      css/
        app/
      development/
      media/
      webpack/
        app/
          leaderboard/
          training/
          word-bank/
    types/
      app/
        leaderboard/
        rules/
        training/
        word-bank/
  public/
    music/
    sounds/
  src/
    app/
      api/
        search/
      leaderboard/
      rules/
      training/
      word-bank/
    components/
      game/
      training/
      ui/
    hooks/
    lib/
  types/
  .eslintrc.json
  .gitignore
  CHANGELOG.md
  eslint.config.mjs
  instructions.md
  netlify.toml
  next-env.d.ts
  next.config.mjs
  next.config.ts
  package-lock.json
  package.json
  postcss.config.js
  postcss.config.mjs
  README.md
  tailwind.config.js
  tsconfig.json
```

### Commands Used
```powershell
# Clean webpack cache and restart dev server
Remove-Item -Recurse -Force .next/cache/webpack
npm run dev
```

## [2025-05-27]

### Changed
- Updated Footer component to match navbar links and make it more compact
  - Added navigation icons to match header
  - Reduced font sizes and spacing
  - Improved grid layout for navigation links
  - Updated social media links with proper hover effects
  - Made copyright text smaller
- Enhanced mobile navigation in Header component
  - Added frosted glass effect with backdrop blur
  - Implemented 2-column grid layout
  - Improved hover and active states
  - Added rounded corners and better spacing
  - Made menu button more modern with rounded design
  - Added smooth transitions and animations
  - Removed dividers for cleaner look
  - Added consistent purple theme colors

### Project Structure
```
n-place-animal
  public/
    music/
    sounds/
  src/
    app/
      api/
        search/
      leaderboard/
      rules/
      training/
      word-bank/
    components/
      game/
      training/
      ui/
    hooks/
    lib/
  types/
  .eslintrc.json
  .gitignore
  CHANGELOG.md
  eslint.config.mjs
  instructions.md
  netlify.toml
  next-env.d.ts
  next.config.mjs
  next.config.ts
  package-lock.json
  package.json
  postcss.config.js
  postcss.config.mjs
  README.md
  tailwind.config.js
  tsconfig.json
```

### Fixed
- Fixed conditional Hook usage in GameBoard.tsx by properly using useTrainingProgressContext at the top level
- Removed unused imports:
  - Removed useRef from layout.tsx
  - Removed useState from leaderboard/page.tsx
  - Removed PropsWithChildren from useTrainingProgress.ts
- Fixed unused variables:
  - Removed unused timeUsed and isTrainingMode props from GameResults.tsx
  - Fixed unused letter variable in word-bank/page.tsx by using the spread operator
- Added proper TypeScript types:
  - Added Category type in word-bank/page.tsx
  - Fixed type casting in the category selector
- Fixed ESLint warnings and improved code quality