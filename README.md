# IlarCo Challenge - NutriTrack

A nutrition dashboard built with React Native and TypeScript, based on the challenge mockup.

## Stack

- Expo SDK 57
- React Native 0.86
- TypeScript in strict mode
- React Native Paper for UI components and theming
- React Native SVG for the circular progress indicator and brand icon
- Roboto loaded through Expo Font

## Getting Started

```bash
npm install
npm start
```

To run the web preview:

```bash
npm run web
```

To validate TypeScript:

```bash
npm run typecheck
```

## Architecture

```text
src/
  components/   Reusable UI components for the dashboard
  data/         Typed mock data used by the dashboard
  screens/      Main screen composition
  theme/        Colors, typography, and React Native Paper theme
  types/        TypeScript interfaces for the nutrition domain
```

The implementation is intentionally focused on a single dashboard feature, without unnecessary navigation or global state.
