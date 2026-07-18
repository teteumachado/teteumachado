import type { FastifyInstance } from 'fastify'
import { auth } from '@workspace/auth'
import { toNodeHandler } from 'better-auth/node'

const authHandler = toNodeHandler(auth)

export async function authPlugin(app: FastifyInstance) {
  app.all('/api/auth/*', async (request, reply) => {
    await authHandler(request.raw, reply.raw)
  })
}
