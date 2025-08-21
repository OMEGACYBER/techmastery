# TechMastery Pro

A modern, interactive learning platform built with React, TypeScript, and Vite. TechMastery Pro provides an engaging way to learn technology concepts through interactive quizzes and AI-powered assistance.

## Features

- **Interactive Learning**: Engage with technology concepts through dynamic quizzes
- **AI Integration**: Powered by Google's Gemini AI for intelligent responses
- **Modern UI**: Clean, responsive design built with React and Tailwind CSS
- **TypeScript**: Full type safety and modern development experience
- **Vite**: Fast development and build tooling

## Tech Stack

- **Frontend**: React 19, TypeScript, Vite
- **Styling**: Tailwind CSS
- **AI**: Google Gemini API
- **Deployment**: Vercel (Serverless)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd TechMastery
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
# Add your GEMINI_API_KEY to .env
```

4. Start development server:
```bash
npm run dev
```

5. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Environment Variables

Create a `.env` file in the root directory:

```env
GEMINI_API_KEY=your_gemini_api_key_here
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## Deployment

This project is configured for deployment on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically detect the Vite configuration and deploy

## Project Structure

```
TechMastery/
├── components/          # React components
├── services/           # API services
├── types/              # TypeScript type definitions
├── constants.tsx       # App constants
├── App.tsx            # Main app component
├── vite.config.ts     # Vite configuration
└── vercel.json        # Vercel deployment config
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.
