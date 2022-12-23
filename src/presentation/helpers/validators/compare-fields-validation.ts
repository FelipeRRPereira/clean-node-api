import { InvalidParamError } from '../../errors'
import { Validation } from './validation'

export class CompareFieldsValidation implements Validation {
  private readonly fieldName: string
  private readonly fieldToCompareName: string

  constructor (fieldName: string, fieldToCampareName: string) {
    this.fieldName = fieldName
    this.fieldToCompareName = fieldToCampareName
  }

  validate (input: any): Error {
    if (!input[this.fieldName] !== input[this.fieldToCompareName]) {
      return new InvalidParamError(this.fieldName)
    }
  }
}