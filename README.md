# DesignForge

DesignForge is a Vite, React, TypeScript, Tailwind CSS, and shadcn-ui design workspace. The current app includes a top project bar, central design canvas, asset library sidebar, and AI prompt bar shell.

## Codebase Map

- `src/main.tsx` mounts the React app.
- `src/App.tsx` wires React Query, toast providers, tooltips, and routes.
- `src/pages/Index.tsx` composes the main workspace.
- `src/components/TopNavigation.tsx` renders project actions and user/collaboration controls.
- `src/components/DesignCanvas.tsx` renders the editor canvas and toolbar state.
- `src/components/AssetLibrary.tsx` renders mock asset tabs and search UI.
- `src/components/AIPromptBar.tsx` renders the prompt input and simulated generation state.
- `src/components/ui/*` contains shadcn-ui/Radix primitives.
- `src/integrations/supabase/client.ts` creates the Supabase browser client.
- `src/index.css` and `tailwind.config.ts` define the design system.

## Prerequisites

- Node.js 18 or newer.
- npm 9 or newer.
- A Supabase project if you want persistence, auth, storage, or edge functions.

## Local Setup

1. Install dependencies:

   ```sh
   npm install
   ```

2. Create local environment variables:

   ```sh
   cp .env.example .env.local
   ```

3. Fill in `.env.local`:

   ```sh
   VITE_SUPABASE_URL=https://your-project-ref.supabase.co
   VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
   ```

4. Start the dev server:

   ```sh
   npm run dev
   ```

5. Open the app at:

   ```text
   http://localhost:8080
   ```

## Supabase Setup

This repo now includes the official Supabase JavaScript client dependency:

```sh
npm install @supabase/supabase-js
```

Create a Supabase project from the Supabase dashboard, then copy these values from Project Settings > API:

- Project URL -> `VITE_SUPABASE_URL`
- Publishable anon key -> `VITE_SUPABASE_ANON_KEY`

The browser client is exported from:

```ts
import { supabase } from "@/integrations/supabase/client";
```

Use the anon key only in frontend code. Never put the service role key in `.env.local` for this Vite app because Vite exposes `VITE_*` variables to the browser bundle.

The current UI does not yet read or write Supabase data. When persistence is added, create explicit tables and row-level security policies for projects, assets, collaborators, and generated outputs before calling Supabase from UI components.

## Available Scripts

```sh
npm run dev
```

Runs Vite on port `8080`.

```sh
npm run build
```

Creates a production build in `dist`.

```sh
npm run build:dev
```

Creates a development-mode build.

```sh
npm run lint
```

Runs ESLint across the repo.

```sh
npm run preview
```

Serves the production build locally.

## Production Build

Run:

```sh
npm run build
npm run preview
```

Deploy the generated `dist` directory to any static host that supports Vite apps. Configure the same `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` values in your hosting provider before building.

## Notes

- This project has both `package-lock.json` and `bun.lockb`. npm is the documented package manager because `package-lock.json` was updated with the Supabase dependency.
- `.env.local` is intentionally ignored by Git through the existing `*.local` rule.
- `npm install` currently reports audit findings from the dependency tree. Run `npm audit` to inspect them and `npm audit fix` only after reviewing the resulting package changes.
