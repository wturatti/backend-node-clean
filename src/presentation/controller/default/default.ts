import { success } from '@/presentation/helpers'
import { Controller, HttpRequest, HttpResponse } from '@/presentation/protocols'

export class DefaultController implements Controller {
  constructor() {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    return success('Default controller')
  }
}
