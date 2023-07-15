import 'module-alias/register'
import app from './config/app'

const bootstrap = async (): Promise<void> => {
  app.listen(3000, () => console.log(`Server running at: http://localhost:3000/api`))
}

bootstrap()
