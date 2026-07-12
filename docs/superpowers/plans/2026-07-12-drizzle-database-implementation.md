# Drizzle Database Package — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add Drizzle ORM as `@workspace/database` package consumable by any workspace.

**Architecture:** Single database workspace package with Drizzle ORM + pg driver. drizzle.config.ts at monorepo root. Scripts in root package.json.

**Tech Stack:** drizzle-orm, pg, drizzle-kit, PostgreSQL, Zod

## Global Constraints

- Node >= 20
- pnpm workspace
- TypeScript strict mode
- Single quotes, no semicolons per .prettierrc

---

### Task 1: Scaffold `packages/database/` workspace package

**Files:**
- Create: `packages/database/package.json`
- Create: `packages/database/tsconfig.json`
- Create: `packages/database/source/index.ts`
- Create: `packages/database/source/schemas/index.ts`
- Create: `packages/database/source/types/index.ts`

- [ ] **Create `packages/database/package.json`**

```json
{
  "name": "@workspace/database",
  "version": "0.0.0",
  "type": "module",
  "private": true,
  "main": "./source/index.ts",
  "types": "./source/index.ts",
  "exports": {
    ".": "./source/index.ts"
  },
  "scripts": {},
  "dependencies": {
    "drizzle-orm": "^0.43.0",
    "pg": "^8.14.0",
    "zod": "^4.4.3"
  },
  "devDependencies": {
    "@types/pg": "^8.11.0",
    "@workspace/eslint-config": "workspace:*",
    "@workspace/typescript-config": "workspace:*",
    "typescript": "^5"
  }
}
```

- [ ] **Create `packages/database/tsconfig.json`**

```json
{
  "extends": "@workspace/typescript-config/base.json",
  "compilerOptions": {
    "lib": ["ES2022"],
    "module": "ESNext",
    "moduleResolution": "bundler",
    "types": ["node"],
    "outDir": "dist"
  },
  "include": ["source"]
}
```

- [ ] **Create `packages/database/source/schemas/index.ts`** — empty re-export file for now:

```ts
// Schemas will be added here as tables are created
```

- [ ] **Create `packages/database/source/types/index.ts`** — shared types placeholder:

```ts
export type {}
```

- [ ] **Create `packages/database/source/index.ts`** — main entry point with drizzle connection singleton:

```ts
import { drizzle } from 'drizzle-orm/node-postgres'
import { Pool } from 'pg'
import { z } from 'zod'

import * as schema from './schemas'

const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  DATABASE_MAX_CONNECTIONS: z.coerce.number().default(10),
})

const env = envSchema.parse(process.env)

const pool = new Pool({
  connectionString: env.DATABASE_URL,
  max: env.DATABASE_MAX_CONNECTIONS,
})

export const db = drizzle(pool, { schema })

export type DB = typeof db

export { schema }
```

---

### Task 2: Create `drizzle.config.ts` at root

**Files:**
- Create: `drizzle.config.ts`

- [ ] **Create `drizzle.config.ts`**

```ts
import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  schema: './packages/database/source/schemas/index.ts',
  out: './packages/database/source/migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
})
```

---

### Task 3: Install dependencies across workspaces

**Files:**
- Modify: `package.json` (root — add drizzle-kit to devDependencies + scripts)
- Modify: `apps/api/package.json` (add @workspace/database dependency)

- [ ] **Add drizzle-kit to root devDependencies + db scripts**

Add to root `package.json`:
- `drizzle-kit` in devDependencies
- Scripts: `db:generate`, `db:push`, `db:studio`, `db:migrate`

```json
{
  "scripts": {
    "db:generate": "drizzle-kit generate",
    "db:push": "drizzle-kit push",
    "db:studio": "drizzle-kit studio",
    "db:migrate": "drizzle-kit migrate"
  },
  "devDependencies": {
    "drizzle-kit": "^0.30.0"
  }
}
```

- [ ] **Add @workspace/database to apps/api dependencies**

```json
{
  "dependencies": {
    "@workspace/database": "workspace:*"
  }
}
```

- [ ] **Run `pnpm install`**

```bash
pnpm install
```

---

### Task 4: Update env vars

**Files:**
- Modify: `.env.example` (root)
- Modify: `apps/api/.env.example`

- [ ] **Add DATABASE_URL to root `.env.example`**

```
DATABASE_URL=postgres://teteumachado:yourpassword@127.0.0.1:5432/teteumachado
```

- [ ] **Add DATABASE_URL to `apps/api/.env.example`**

```
PORT=8000
DATABASE_URL=postgres://teteumachado:yourpassword@127.0.0.1:5432/teteumachado
```

- [ ] **Start database and test connection**

```bash
docker compose up -d pg
pnpm db:push
```

---

### Task 5: Wire up database in `apps/api`

**Files:**
- Modify: `apps/api/source/index.ts`
- Modify: `apps/api/source/lib/config.ts`

- [ ] **Update `apps/api/source/lib/config.ts`** to include DATABASE_URL in env schema (already validated by database package, but keep API env validation clean):

No changes needed — database package handles its own env validation internally. API env schema stays focused on API vars.

- [ ] **Update `apps/api/source/index.ts`** to import db and verify connection on startup:

```ts
import Fastify from 'fastify'
import { env } from '@config'

const app = Fastify()

app.get('/health', async () => {
  return { status: 'ok' }
})

app.listen({ port: env.PORT }, () => {
  console.log(`api listening on port ${env.PORT}`)
})
```

---

### Task 6: Add `lint` script and ESLint config for database package

**Files:**
- Create: `packages/database/eslint.config.js`

- [ ] **Create `packages/database/eslint.config.js`**

```ts
import { config } from '@workspace/eslint-config/base'

export default config
```

- [ ] **Add lint script to `packages/database/package.json`**

```json
{
  "scripts": {
    "lint": "eslint"
  }
}
```

---

### Task 7: Verify everything works

- [ ] **Run lint across all packages**

```bash
pnpm lint
```

- [ ] **Run typecheck**

```bash
pnpm typecheck
```

- [ ] **Test db:push (if postgres is running)**

```bash
pnpm db:push
```
