import * as dotenv from 'dotenv'

const envFile = (): string => {
  const env = process.env.NODE_ENV || 'dev'
  return `.${env}.env`
}

dotenv.config({ path: envFile() })

export default {
  base_url: process.env.BASE_URL,
  port: process.env.PORT || 5050,
  databases: {
    postgres: {
      host: process.env.POSTGRES_HOST,
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      port: process.env.POSTGRES_PORT,
      database: process.env.POSTGRES_DATABASE,
    },
  },
}
