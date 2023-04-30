import 'dotenv/config'
import { z } from 'zod'

const envSchema = z.object({
  PORT: z.coerce.number().default(3333),
  RABBITMQ_URL: z.string(),
})

const _env = envSchema.safeParse(process.env)

if (_env.success === false) {
  console.error('Invalid enviroment variables.', _env.error.format())

  throw new Error('Invalid enviroment variables.')
}

export const env = _env.data
