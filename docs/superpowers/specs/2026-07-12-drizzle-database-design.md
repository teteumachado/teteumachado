# Drizzle Database Package — Design

## Context

Monorepo (Turborepo + pnpm) com apps `api` (Fastify) e `web` (Next.js). O package `packages/database/` existe mas está vazio. `docker-compose.yml` já provê PostgreSQL.

## Objetivo

Adicionar Drizzle ORM ao monorepo como um workspace package `@workspace/database`, consumível por qualquer workspace.

## Estrutura

```
packages/database/
  source/
    index.ts          # exporta db client + schema
    schemas/
      index.ts        # re-exporta todos os schemas
    types/
      index.ts        # tipos compartilhados
  package.json
  tsconfig.json

drizzle.config.ts     # na raiz do monorepo
```

## Stack

- **ORM:** drizzle-orm
- **Driver:** pg (node-postgres)
- **Kit:** drizzle-kit (dev)
- **Banco:** PostgreSQL (via docker-compose)
- **Validação env:** zod (já usado no api)

## Conexão

Singleton do client Drizzle, construído a partir de env vars lidas com Zod:

- `DATABASE_URL` — connection string (ex: `postgres://user:pass@localhost:5432/db`)
- `DATABASE_MAX_CONNECTIONS` — pool size (default 10)

Exportado como `db` de `@workspace/database`.

## Schema

Schemas vazios iniciais em `source/schemas/`. Cada entidade em seu arquivo. `source/schemas/index.ts` re-exporta tudo para consumo externo.

## Migrations

`drizzle.config.ts` na raiz aponta para `packages/database/source/schemas/` como schema e `packages/database/source/migrations/` como output.

Scripts no `packages/database/package.json`:

- `db:generate` → `drizzle-kit generate`
- `db:push` → `drizzle-kit push` (dev)
- `db:studio` → `drizzle-kit studio`
- `db:migrate` → `drizzle-kit migrate`

## Integração com API

`apps/api` declara `"@workspace/database": "workspace:*"` nas dependencies. Handlers importam `db` e fazem queries Drizzle diretamente.

## Variáveis de Ambiente

`.env.example` na raiz (já tem POSTGRES_*) — adicionar `DATABASE_URL` como combinação das vars existentes.

```
DATABASE_URL=postgres://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}:${POSTGRES_PORT}/${POSTGRES_DATABASE}
```
