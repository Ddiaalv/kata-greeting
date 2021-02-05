import { nameType } from '../../Greeting/Greeting.types'

export const nameIsUppercase = (name?: string) => name === name?.toUpperCase()

export const nameIsEmpty = (name?: nameType): boolean =>
  name === null || name === undefined

export const getPhraseFromNames = (names: string[]): string => {
  let template = ''
  const lowerNames = names.filter((name) => !nameIsUppercase(name))
  const upperNames = names.filter((name) => nameIsUppercase(name))
  const UpperNamesHaveValues = upperNames.length === 0
  UpperNamesHaveValues
    ? (template = buildStringNames(lowerNames))
    : (template = buildStringNames(lowerNames) + buildStringNames(upperNames))
  return template
}

export const buildStringNames = (names: string[]): string => {
  const firstArrayName = names[0]
  const template = getSymbolsForPhrase(firstArrayName)
  const namesWithoutDoubleNames = convertDoubleNamesToArray(names)
  namesWithoutDoubleNames.forEach((value, index) => {
    const lastName = index === namesWithoutDoubleNames.length - 1
    const penultimateName = index === namesWithoutDoubleNames.length - 2
    if (lastName) {
      const namesHasOnlyOneUpperName = namesWithoutDoubleNames.length === 1
      if (namesHasOnlyOneUpperName) {
        template.text += value + template.lastSymbol
      } else {
        template.text += template.separatedWord + value + template.lastSymbol
      }
    } else if (penultimateName) {
      template.text += value + ' '
    } else {
      template.text += value + ', '
    }
  })
  return template.text
}

export const getSymbolsForPhrase = (name: string) => {
  const symbols = {
    text: '',
    separatedWord: '',
    lastSymbol: '',
  }
  if (nameIsUppercase(name)) {
    symbols.text = ' AND HELLO '
    symbols.separatedWord = 'AND '
    symbols.lastSymbol = '!'
  } else {
    symbols.text = 'Hello, '
    symbols.separatedWord = 'and '
    symbols.lastSymbol = '.'
  }
  return symbols
}

export const convertDoubleNamesToArray = (names: nameType) => {
  let tempArray: string[] = []
  if (Array.isArray(names)) {
    names.forEach((element) => {
      const temp = element.split(', ')
      tempArray = tempArray.concat(temp)
    })
  } else {
    tempArray = names.split(', ')
  }
  return tempArray
}
