import { greetings } from './Greeting'

describe('Greetings', () => {
  test('Requirement 1: Write a method greet(name) that interpolates name in a simple greeting', () => {
    expect(greetings('Bob')).toBe('Hello, Bob.')
  })
  test('Requirement 2: Handle nulls and undefineds by introducing a stand-in', () => {
    expect(greetings()).toBe('Hello, my friend.')
  })
  test('Requirement 3: When name is all uppercase, then the method should shout back to the user', () => {
    expect(greetings('JERRY')).toBe('HELLO, JERRY.')
  })
  test('Requirement 4: When name is an array of two names, then both names should be printed', () => {
    const values = ['Jill', 'Jane']
    expect(greetings(values)).toBe('Hello, Jill and Jane.')
  })
  test('Requirement 5: When name represents more than two names, separate them with commas and close with a comma and "and"', () => {
    const values = ['Amy', 'Brian', 'Charlotte']
    expect(greetings(values)).toBe('Hello, Amy, Brian and Charlotte.')
  })
  test('Requirement 6: Allow mixing of normal and shouted names by separating the response into two greetings', () => {
    const values = ['Amy', 'BRIAN', 'Charlotte']
    expect(greetings(values)).toBe('Hello, Amy and Charlotte. AND HELLO BRIAN!')
  })
  test('Requirement 7: If any entries in name are a string containing a comma, split it as its own input', () => {
    const values = ['Bob', 'Charlie, Dianne']
    expect(greetings(values)).toBe('Hello, Bob, Charlie and Dianne.')
  })
})
