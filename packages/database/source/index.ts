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
