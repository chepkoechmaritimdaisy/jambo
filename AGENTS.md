<!-- OPENSPEC:START -->
# OpenSpec Instructions

These instructions are for AI assistants working in this project.

Always open `@/openspec/AGENTS.md` when the request:
- Mentions planning or proposals (words like proposal, spec, change, plan)
- Introduces new capabilities, breaking changes, architecture shifts, or big performance/security work
- Sounds ambiguous and you need the authoritative spec before coding

Use `@/openspec/AGENTS.md` to learn:
- How to create and apply change proposals
- Spec format and conventions
- Project structure and guidelines

Keep this managed block so 'openspec update' can refresh the instructions.

<!-- OPENSPEC:END -->

# Agent Guidelines

## Commands
- **Development**: `cd jambo && npm run dev` (runs on localhost:3000)
- **Build**: `cd jambo && npm run build`
- **Lint**: `cd jambo && npm run lint`
- **Start**: `cd jambo && npm run start`
- **Single test**: No test framework configured yet

## Code Style
- **Imports**: Use absolute imports with `@/` prefix for src directory
- **Components**: Default exports for React components, use TypeScript interfaces
- **Styling**: Tailwind CSS v4 with custom color scheme (primary, background-dark, etc.)
- **Formatting**: ESLint with Next.js config, use Prettier if available
- **Types**: Strict TypeScript enabled, define types in `src/lib/types.ts`
- **Naming**: PascalCase for components, camelCase for variables/functions
- **Error Handling**: Use try-catch blocks, proper TypeScript error types

## Tech Stack
- Next.js 16 with App Router
- TypeScript (strict mode)
- Tailwind CSS v4 with custom theme
- Stripe for payments
- NextAuth for authentication
- Vercel Postgres for database
- Lucide React for icons

## Project Structure
- Main app in `jambo/` directory
- Pages in `src/app/` using App Router
- Components in `src/components/`
- Types and utilities in `src/lib/`
- Environment variables in `.env.local` (copy from `.env.example`)