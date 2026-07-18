import { drizzle } from 'drizzle-orm/node-postgres'
import { Pool } from 'pg'
import { z } from 'zod'

import * as schema from './schemas/index.js'

const rawUrlSchema = z.object({
  DATABASE_URL: z.string().url().optional(),
  DATABASE_MAX_CONNECTIONS: z.coerce.number().default(10),
  POSTGRES_HOST: z.string().default('127.0.0.1'),
  POSTGRES_PORT: z.coerce.number().default(5432),
  POSTGRES_USER: z.string().default('teteumachado'),
  POSTGRES_PASSWORD: z.string().default('teteumachado'),
  POSTGRES_DATABASE: z.string().default('teteumachado'),
})

const raw = rawUrlSchema.parse(process.env)

const databaseUrl =
  raw.DATABASE_URL ??
  `postgres://${raw.POSTGRES_USER}:${raw.POSTGRES_PASSWORD}@${raw.POSTGRES_HOST}:${raw.POSTGRES_PORT}/${raw.POSTGRES_DATABASE}`

const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  DATABASE_MAX_CONNECTIONS: z.coerce.number().default(10),
})

const env = envSchema.parse({ ...process.env, DATABASE_URL: databaseUrl })

const pool = new Pool({
  connectionString: env.DATABASE_URL,
  max: env.DATABASE_MAX_CONNECTIONS,
})

export const db = drizzle(pool, { schema })

export type DB = typeof db

export { schema }
