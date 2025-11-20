# FlamingoLab

## Overview
This is a FlamingoLab app - a React-based web application about flamingos, featuring educational content about different species, their anatomy, habitat, social behavior, and conservation status.

**Current State**: Successfully deployed to GitHub Pages at https://meowinc-owner.github.io/flamingo/. The app is a single-page application with React 19, Vite, TypeScript, and Tailwind CSS.

## Recent Changes
- **2025-11-20**: Successfully deployed to GitHub Pages
  - Fixed TypeScript build errors by moving worker configuration to `src/shared/`
  - Added `base: '/flamingo/'` to Vite config for correct asset loading on GitHub Pages subdirectory
  - Added `basename="/flamingo/"` to React Router to match GitHub Pages URL structure
  - Fixed Framer Motion display props to use style objects for proper type compatibility
  - Updated deploy script to use `dist/client` directory
  - Site now live and fully functional at https://meowinc-owner.github.io/flamingo/

- **2025-11-20**: Major performance optimizations - eliminated lag at top of page
  - Drastically reduced Hero section animations from 4 to 1 animated blob (75% reduction)
  - Converted 2 background blobs to static (no animation overhead)
  - Removed continuous animations: sparkles rotation, text glow, button shimmer, bouncing chevron
  - Reduced blob sizes from 600px to 400-500px for better performance
  
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
- **Routing**: React Router v7 (with basename for GitHub Pages)
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
    components/       # React components (Hero, Navigation, SplashScreen, etc.)
    pages/           # Page components
    App.tsx          # Main app component with routing and basename
    main.tsx         # App entry point
    index.css        # Global styles
  worker/            # Cloudflare Workers backend (Hono)
    index.ts         # Worker entry point
  shared/            # Shared types between client/server
    worker-configuration.d.ts  # TypeScript type definitions for Worker Env
```

### Configuration Files
- `vite.config.ts` - Vite configuration (port 5000, host 0.0.0.0, base: '/flamingo/')
- `wrangler.json` - Cloudflare Workers configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `tsconfig.json` - Main TypeScript configuration
- `tsconfig.app.json` - React app TypeScript configuration
- `tsconfig.worker.json` - Worker TypeScript configuration
- `tsconfig.node.json` - Node/build tools TypeScript configuration

## Deployment

### GitHub Pages
- **Live URL**: https://meowinc-owner.github.io/flamingo/
- **Deploy Command**: `npm run deploy`
- **Branch**: main (gh-pages branch auto-created and updated by gh-pages package)
- **Build Output**: `dist/client/` (published to gh-pages branch)

### Development

#### Running the App Locally
The workflow "Start application" runs `npm run dev` which starts the Vite dev server on port 5000.

#### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production (TypeScript + Vite)
- `npm run lint` - Run ESLint
- `npm run check` - TypeScript check + build + dry-run deployment
- `npm run deploy` - Build and deploy to GitHub Pages

## User Preferences
- Prefers free hosting solution (GitHub Pages)
- Appreciates performance optimizations and visual appeal
- Wants shimmer animations on buttons (re-added per request)

## Dependencies
- All dependencies are managed through npm
- Node.js 20+ required
- No additional system packages required

## Notes
- GitHub Pages requires subdirectory routing (`/flamingo/`) configured in both Vite (base) and React Router (basename)
- Deployment requires valid GitHub personal access token with `public_repo` scope
- The app uses gh-pages package for automated deployment to GitHub Pages
