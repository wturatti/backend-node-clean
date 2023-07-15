import { Router } from 'express'
import { adaptRoute } from '@/main/adapters/express-route-adapter'
import { makeDefaultController } from '@/main/factories/controllers/default'

export default (router: Router): void => {
  router.get('/home', adaptRoute(makeDefaultController()))
}
