import { DefaultError } from '@/domain/errors/default-error'

export class UnauthorizedError extends DefaultError {
  constructor() {
    super('Action unauthorized, please verify your data')
    this.name = 'UnauthorizedError'
  }
}
