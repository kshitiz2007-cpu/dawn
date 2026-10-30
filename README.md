# Dawn

Dawn is a syllabus-led learning workspace for UPSC preparation. The implementation is being built in phases; the current branch contains the initial Next.js application foundation and a data-safe student workspace shell.

## Local setup

- Node.js 20.9 or newer
- pnpm 11.25 or newer

```sh
pnpm install
Copy-Item .env.example .env.local
pnpm dev
```

Set `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` in `.env.local`. Use the Supabase publishable key only in browser-visible configuration. Never put a service-role secret in a `NEXT_PUBLIC_*` variable.

The dashboard intentionally shows a setup state until Supabase is configured. It does not display fabricated student progress or scores.

## Current implementation

- Next.js App Router with strict TypeScript and Tailwind CSS v4
- Responsive Dawn visual foundation and student workspace shell
- Cookie-based Supabase SSR and browser client factories
- Project audit and phased acceptance checklist in [docs/implementation-plan.md](docs/implementation-plan.md)

## Verification

```sh
pnpm typecheck
pnpm lint
pnpm build
```

The student workflows, syllabus schema, examination engine, class system, admin command center, and database policies remain future phases. The implementation checklist tracks what is complete and what is not.
