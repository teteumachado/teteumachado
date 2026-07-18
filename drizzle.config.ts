import { defineConfig } from 'drizzle-kit'

const {
  DATABASE_URL,
  POSTGRES_HOST = '127.0.0.1',
  POSTGRES_PORT = '5432',
  POSTGRES_USER = 'teteumachado',
  POSTGRES_PASSWORD = 'teteumachado',
  POSTGRES_DATABASE = 'teteumachado',
} = process.env

const url =
  DATABASE_URL ??
  `postgres://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}:${POSTGRES_PORT}/${POSTGRES_DATABASE}`

export default defineConfig({
  schema: './packages/database/source/schemas/index.ts',
  out: './packages/database/source/migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url,
  },
})
