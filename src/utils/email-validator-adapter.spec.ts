import { EmailValidatorAdapter } from './email-validator-adapter'

describe('EmailValidator adapter', () => {
  test('Should be return false if validator return false', () => {
    const sut = new EmailValidatorAdapter()
    const isValid = sut.isValid('invalid_email@mail.com')
    expect(isValid).toBeFalsy()
  })
})
