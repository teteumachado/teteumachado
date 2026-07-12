import Fastify from 'fastify'
import { env } from '@config'

const app = Fastify()

app.listen({ port: env.PORT }, () => {
  console.log(`api listening on port ${env.PORT}`)
})
