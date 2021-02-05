import { values } from '../../utils/Greeting.testinfo'
import {
  buildStringNames,
  convertDoubleNamesToArray,
  getPhraseFromNames,
  getSymbolsForPhrase,
  nameIsEmpty,
  nameIsUppercase,
} from './Greeting.service'

describe('Greetings unit tests:', () => {
  test('should return false if name is not uppercase', () => {
    expect(nameIsUppercase(values.stringName)).toBe(false)
  })
  test('should return true if name is empty', () => {
    expect(nameIsEmpty()).toBe(true)
  })
  test('should return names separated by commas and the last by "and" if array contain mutiple names', () => {
    expect(buildStringNames(values.arraySingleNames.value)).toBe(
      values.arraySingleNames.expect
    )
  })
  describe('Get symbols for build the correct phrase depending on whether its uppercase or not', () => {
    test('should return the object symbols in lowercase and with a dot at the end of the sentence.', () => {
      const symbols = {
        text: 'Hello, ',
        separatedWord: 'and ',
        lastSymbol: '.',
      }
      expect(getSymbolsForPhrase(values.stringName)).toEqual(symbols)
    })
    test('should return the object symbols in uppercase and with a exclamation at the end of the sentence.', () => {
      const symbols = {
        text: ' AND HELLO ',
        separatedWord: 'AND ',
        lastSymbol: '!',
      }
      expect(getSymbolsForPhrase(values.stringName.toUpperCase())).toEqual(
        symbols
      )
    })
  })
  describe('Convert double names to array', () => {
    test('should return an array multiple names if the string contain a ","', () => {
      expect(
        convertDoubleNamesToArray(values.stringNamesWithCommas.value)
      ).toStrictEqual(values.stringNamesWithCommas.expect)
    })
    test('should return an array with multiple names if the array contain a string with ","', () => {
      expect(
        convertDoubleNamesToArray(values.arrayNamesWithCommas.value)
      ).toStrictEqual(values.arrayNamesWithCommas.expect)
    })
  })
  describe('Get phrase builded from string/string[] names', () => {
    test('should return a phrase depending of the uppercase', () => {
      expect(
        getPhraseFromNames(values.arrayNamesWithCommasUppercase.value)
      ).toBe(values.arrayNamesWithCommasUppercase.expect)
    })
  })
})
