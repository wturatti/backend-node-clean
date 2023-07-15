import { DefaultController } from '@/presentation/controller/default'
import { Controller } from '@/presentation/protocols'

export const makeDefaultController = (): Controller => {
  const loginController = new DefaultController()
  return loginController
}
