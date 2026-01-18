# Love Map MBTI - Cozy Japanese Edition

## Overview
This project is a React-based "Love Map MBTI" (Ren'ai Type) personality quiz application. It aims to provide a warm, cozy, and Japanese-inspired user experience. The application determines the user's romantic personality type based on standard MBTI dimensions (EI, SN, TF, JP) and presents the results with a gentle, aesthetic design.

## Current Status
- **Environment**: Vite + React.
- **Issue**: The `index.html` file appears to be corrupted with a raw JavaScript snippet, preventing the app from loading.
- **Goal**: Restore the application, implement the full quiz logic, and apply the requested "cozy Japanese" design.

## Implementation Plan

### 1. Restore Environment
- Reset `index.html` to the standard Vite template structure to ensure the app mounts correctly.

### 2. Data Structure (`src/data/questions.js`)
- Create a complete set of 12 questions (3 for each dimension: E/I, S/N, T/F, J/P).
- Define 16 result types with "Love Map" titles (e.g., "Warm Kotatsu", "Spring Breeze") and descriptions suited to the Japanese dating aesthetic.

### 3. Application Logic (`src/App.jsx`)
- State management for:
  - Current question index.
  - accumulated scores (E vs I, S vs N, etc.).
  - Quiz status (Intro, In Progress, Result).
- `handleAnswer` function to update scores and progress.
- `calculateResult` function to determine the 4-letter type.

### 4. UI/UX Design ("Cozy Japanese Aesthetic")
- **Color Palette**:
  - Background: Cream/Beige (`#FAFAF5` or `#F5F5DC`)
  - Accents: Sakura Pink (`#FFD1DC`), Matcha Green (`#C5E1A5`), Earthy Brown (`#8D6E63`).
- **Typography**:
  - Clean, readable fonts.
  - Elegant headings (possibly Serif).
- **Layout**:
  - Centered card layout with soft shadows (`box-shadow: 0 4px 20px rgba(0,0,0,0.05)`).
  - Rounded corners (`border-radius: 20px`).
  - Smooth transitions between questions.

### 5. Components
- **Intro Screen**: Title, subtitle, "Start" button.
- **Question Screen**: Progress bar, question text, two answer options.
- **Result Screen**:
  - Personality Type Name (e.g., "INFJ - The Moonlit Guide").
  - Description of romantic style.
  - "Best Match" type.
  - "Retry" button.

## Next Steps
1.  Fix `index.html`.
2.  Generate question data.
3.  Build the React components.
4.  Style with CSS.
