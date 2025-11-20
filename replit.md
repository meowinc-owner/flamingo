# FlamingoLab

## Overview
This is a FlamingoLab app - a React-based web application about flamingos, featuring educational content about different species, their anatomy, habitat, social behavior, and conservation status.

**Current State**: Imported from GitHub and configured for Replit environment. The app is a single-page application with React 19, Vite, TypeScript, and Tailwind CSS.

## Recent Changes
- **2025-11-20**: Performance optimizations and splash screen addition
  - Added sleek splash screen with flamingo logo animation that appears on every page load
  - Optimized all animations with GPU acceleration for smoother performance
  - Implemented throttled scroll listeners using requestAnimationFrame
  - Added CSS smooth scrolling and performance optimizations
  - Removed scroll lag through passive event listeners
  - Cleaned up redundant will-change properties

- **2025-11-20**: Initial GitHub import and Replit setup
  - Fixed Vite version compatibility (downgraded from 7.x to 6.x)
  - Configured Vite to bind to 0.0.0.0:5000 for Replit
  - Set up "Start application" workflow with webview
  - Installed dependencies successfully

## Project Architecture

### Frontend
- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS + PostCSS
- **Routing**: React Router v7
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Charts**: Recharts

### Backend
- **Framework**: Hono (minimal Cloudflare Workers backend)
- **Located at**: `src/worker/index.ts`

### Project Structure
```
src/
  react-app/          # Frontend React application
    components/       # React components (Hero, Navigation, etc.)
    pages/           # Page components
    App.tsx          # Main app component with routing
    main.tsx         # App entry point
    index.css        # Global styles
  worker/            # Cloudflare Workers backend (Hono)
  shared/            # Shared types between client/server
```

### Configuration Files
- `vite.config.ts` - Vite configuration (port 5000, host 0.0.0.0)
- `wrangler.json` - Cloudflare Workers configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration

## Development

### Running the App
The workflow "Start application" runs `npm run dev` which starts the Vite dev server on port 5000.

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run check` - TypeScript check + build + dry-run deployment

## User Preferences
None specified yet.

## Dependencies
- All dependencies are managed through npm
- Node.js 20 is installed
- No additional system packages required
