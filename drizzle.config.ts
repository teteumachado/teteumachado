import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  schema: './packages/database/source/schemas/index.ts',
  out: './packages/database/source/migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
})
