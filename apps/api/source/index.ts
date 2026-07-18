import Fastify from 'fastify'
import { env } from '@config'
import { authPlugin } from './plugins/auth.js'

const app = Fastify()

app.get('/health', async () => {
  return { status: 'ok' }
})

await app.register(authPlugin)

app.listen({ port: env.PORT }, () => {
  console.log(`api listening on port ${env.PORT}`)
})
