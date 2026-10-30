# Dawn

Dawn is a syllabus-led learning workspace for UPSC preparation. The implementation is being built in phases; the current branch contains the Next.js foundation, a data-safe student workspace shell, and the first Supabase authentication routes.

## Local setup

- Node.js 20.9 or newer
- pnpm 11.25 or newer

```sh
pnpm install
Copy-Item .env.example .env.local
pnpm dev
```

Set `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` in `.env.local`. Use the Supabase publishable key only in browser-visible configuration. Never put a service-role secret in a `NEXT_PUBLIC_*` variable.

The workspace intentionally shows a setup state until Supabase is configured. It does not display fabricated student progress or scores. Email/password sign-in is available at `/login`; auth callback exchange is handled at `/auth/callback`. Authentication needs a configured Supabase project to be exercised end to end.

## Current implementation

- Next.js App Router with strict TypeScript and Tailwind CSS v4
- Responsive Dawn visual foundation and student workspace shell
- Cookie-based Supabase SSR and browser client factories
- Request-time auth token refresh through the Next.js 16 Proxy convention
- Email/password sign-in and PKCE callback exchange
- Project audit and phased acceptance checklist in [docs/implementation-plan.md](docs/implementation-plan.md)

## Verification

```sh
pnpm typecheck
pnpm lint
pnpm build
```

These checks pass locally. The student learning workflows, syllabus schema, examination engine, class system, admin command center, and database policies remain future phases. The implementation checklist tracks what is complete and what is not.
