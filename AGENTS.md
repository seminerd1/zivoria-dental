# AGENTS.md

## Project overview
- This repository is a Vite + React landing site for a dental clinic. The main app shell lives in [src/App.jsx](src/App.jsx) and the page sections are organized under [src/components](src/components).
- Content is mostly data-driven: shared clinic data lives in [src/data/clinicData.js](src/data/clinicData.js), while bilingual copy is centralized in [src/LanguageContext.jsx](src/LanguageContext.jsx).
- The app entry points are [src/main.jsx](src/main.jsx) and [src/App.jsx](src/App.jsx).

## Working conventions
- Keep changes localized to existing components and reuse shared data structures where possible.
- Prefer updating the content source in the relevant data module or translation object instead of duplicating copy in multiple places.
- Preserve the existing animation and modal patterns, especially the use of the reveal wrapper and modal components already wired into the page.
- This project uses React 19 and motion/react; avoid introducing new state libraries or app-wide architectural changes unless explicitly needed.

## Build and verification
- Install dependencies with npm install.
- Start the local app with npm run dev.
- Verify changes with npm run build.
- Run npm run lint for TypeScript checks (it executes tsc --noEmit).
- There is no dedicated test suite configured in this workspace.

## Environment and config
- Copy [.env.example](.env.example) to .env.local and set GEMINI_API_KEY if AI-related flows are being exercised.
- The Vite config includes special HMR/watch handling for AI Studio; avoid changing it unless necessary.

## Editing guidance
- When adding or changing sections, prefer updating the relevant component and its backing data rather than hard-coding new content inline.
- Keep language and localization changes consistent in [src/LanguageContext.jsx](src/LanguageContext.jsx) so both English and Amharic content stay aligned.
- If a change affects the page structure, review [src/App.jsx](src/App.jsx) to ensure the new section is placed correctly in the flow.
