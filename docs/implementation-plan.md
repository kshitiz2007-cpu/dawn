# Dawn — implementation plan

## Phase 0: project audit

- [x] Confirm repository and branch.
- [x] Inspect existing code, routes, dependencies, database schema, and authentication.
- [x] Record conflicts and reusable modules.
- [x] Prepare phased implementation plan.

Audit result: this repository contains only a six-byte README. There are no existing routes, application components, dependency manifests, database migrations, or auth integration to preserve. The work starts from a clean foundation. No Supabase project configuration is present.

## Phase 1: foundation

- [ ] Establish Next.js App Router, strict TypeScript, and Tailwind CSS v4.
- [ ] Add semantic brand tokens and responsive page shell.
- [ ] Add student/admin route boundaries and accessible navigation primitives.
- [ ] Add Supabase SSR configuration using public URL and publishable key only.
- [ ] Verify type checking, lint, and production build.

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
