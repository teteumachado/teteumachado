<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# teteumachado

Personal portfolio of Matheus Machado (indie hacker). pnpm monorepo with Turborepo.

## Commands

| Command | What |
|---|---|
| `pnpm dev` | Start both apps in parallel |
| `pnpm build` | Build all packages |
| `pnpm lint` | Lint all |
| `pnpm format` | Prettier all |
| `pnpm typecheck` | tsc all |
| `pnpm db:generate` / `db:push` / `db:studio` / `db:migrate` | Drizzle ORM |
| `pnpm dlx shadcn@latest add <component> -c apps/web` | Add shadcn component |

## Architecture

- **`apps/web`** — Next.js 16 App Router, `base-nova` style, uses `@base-ui/react` (not Radix). Icons: Tabler. Animations: Framer Motion.
- **`apps/api`** — Fastify, `tsx watch` dev, path alias `@config` for env zod schema. `@workspace/database` for Drizzle ORM.
- **`packages/ui`** — Shared shadcn components (button, card, carousel, scroll-area). UI imports via `@workspace/ui/components/<name>`.
- **`packages/database`** — Drizzle ORM + `pg` pooling. Schema in `source/schemas/index.ts`. Requires `DATABASE_URL` env.
- **`packages/transactional`** — Email templates (proprietary license).
- **`docs/`** — gitignored superpowers-generated docs.

## Conventions

- No semicolons, single quotes, trailing commas es5 (Prettier enforced).
- Pre-commit: `pnpm exec lint-staged` (runs eslint --fix on staged `*.{ts,tsx,js,jsx,mjs}`).
- Zod for env validation everywhere (`@config` in API, `source/index.ts` in database).
- `pnpm@10.33.4`, Node >=20.
- UI package must be transpiled: already configured in `next.config.ts` via `transpilePackages`.
- Fonts: Montserrat (sans), Geist Mono (mono), Merriweather (serif).
