# Dawn — implementation plan

## Phase 0: project audit

- [x] Confirm repository and branch.
- [x] Inspect existing code, routes, dependencies, database schema, and authentication.
- [x] Record conflicts and reusable modules.
- [x] Prepare phased implementation plan.

Audit result: the repository started with only a six-byte README. There were no existing routes, application components, dependency manifests, database migrations, or auth integration to preserve. The work starts from a clean foundation. No Supabase project configuration is present.

## Phase 1: foundation

- [x] Establish Next.js App Router, strict TypeScript, and Tailwind CSS v4.
- [x] Add semantic brand tokens and responsive student workspace shell.
- [x] Add accessible student navigation primitives; admin routes remain absent until permission enforcement exists.
- [x] Add Supabase SSR/browser clients and request-time cookie refresh using URL and publishable key only.
- [x] Add password sign-in and auth callback routes.
- [x] Verify type checking, source lint, and production build locally.
- [ ] Live-test authentication and complete role-gated student/admin boundaries after Supabase project configuration and role schema are available.

## Later phases

- [ ] Phase 2 — Student dashboard, drill, editorial, and topic recall.
- [ ] Phase 3 — Syllabus taxonomy and digital library.
- [ ] Phase 4 — Mock-test engine and analytics.
- [ ] Phase 5 — Live classes and recorded learning.
- [ ] Phase 6 — Admin command center and content workflows.
- [ ] Phase 7 — Database migrations, RLS, server actions, and audit trails.
- [ ] Phase 8 — Accessibility, responsive, performance, and security validation.
- [ ] Phase 9 — Production deployment and smoke checks.

## Acceptance rule

A phase is marked complete only after its implementation and verification criteria pass. Dashboard metrics must come from persisted data; preview fixtures must be explicitly labeled and never presented as production values.
