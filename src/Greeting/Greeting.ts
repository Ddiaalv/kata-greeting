import {
  nameIsEmpty,
  nameIsUppercase,
  getPhraseFromNames,
  convertDoubleNamesToArray,
} from '../domain/service/Greeting.service'
import { nameType } from './Greeting.types'

export const greetings = (name?: nameType): string => {
  if (nameIsEmpty(name)) {
    return 'Hello, my friend.'
  }
  if (Array.isArray(name)) {
    return getPhraseFromNames(name)
  }
  if (name?.includes(',')) {
    const doubleNamesSplitedToSingleInArray = convertDoubleNamesToArray(name)
    return getPhraseFromNames(doubleNamesSplitedToSingleInArray)
  }
  if (nameIsUppercase(name)) {
    return `HELLO, ${name}.`
  }
  return `Hello, ${name}.`
}
