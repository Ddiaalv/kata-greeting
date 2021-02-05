export const values = {
  stringName: 'Bob',
  stringNamesWithCommas: {
    value: 'Charlie, Dianne',
    expect: ['Charlie', 'Dianne'],
  },
  arraySingleNames: {
    value: ['Amy', 'Brian', 'Charlotte'],
    expect: 'Hello, Amy, Brian and Charlotte.',
  },
  arrayNamesWithCommas: {
    value: ['Bob', 'Charlie, Dianne'],
    expect: ['Bob', 'Charlie', 'Dianne'],
  },
  arrayNamesWithCommasUppercase: {
    value: ['Amy', 'BRIAN', 'Charlotte'],
    expect: 'Hello, Amy and Charlotte. AND HELLO BRIAN!',
  },
}
