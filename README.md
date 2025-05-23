# Name Place Animal Thing Game

A modern web implementation of the classic "Name Place Animal Thing" game built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- Single-player gameplay
- Random letter generation
- Voice announcements in American English
- Timed rounds
- Responsive design
- Mobile-first approach

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Web Speech API
- Supabase (planned for future features)

## Getting Started

### Prerequisites

- Node.js 20.x or later
- npm 10.x or later

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd name-place-animal
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file:
```bash
cp .env.local.example .env.local
```

4. Start the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Development

### Project Structure

The project follows a modular architecture with components organized by feature:

```
src/
├── app/          # Next.js app router pages
├── components/   # React components
│   ├── game/     # Game-specific components
│   ├── ui/       # UI components
│   └── shared/   # Shared components
├── lib/          # Utilities and constants
└── styles/       # Global styles
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript compiler check

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Next.js team for the amazing framework
- The open-source community
