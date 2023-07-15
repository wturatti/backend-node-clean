import { QueryFailedError } from 'typeorm'
import { DefaultError } from '@/domain/errors/default-error'
import { HttpResponse } from '@/presentation/protocols'
import { DatabaseConnection } from '@/domain/errors/generic'
import { badRequest, serverError, notFound } from './index'

export class ApplicationError {
  constructor(
    private readonly extraInformations: Record<string, any>,
    private readonly error: Error | DefaultError,
  ) {}

  handle(): HttpResponse {
    if (this.error instanceof DefaultError) {
      if (this.error.statusCode === 404) {
        return notFound(this.error)
      }
      return badRequest(this.error)
    }

    if (this.error instanceof QueryFailedError) {
      return serverError(new DatabaseConnection())
    }

    return serverError(this.error)
  }
}
