import { findPhraseInArray } from '../find-phrase-in-array';

describe('findPhraseInArray function test suite', () => {
  const inputData = [
    'stwórz',
    'sobie',
    'tutaj',
    'więcej',
    'wyrazów',
    'TUTAJ',
    'cos',
    'hej',
    'mama',
    'RATATUJ',
    'Jacek',
    'wujek',
    'młody',
    'stwórz',
    'stary',
  ];

  test('Find elements without differentiating between uppercase and lowercase letters', () => {
    const inputArr = inputData;
    const input = 'tut';

    const outcome = findPhraseInArray(inputArr, input);

    const expectedOutcome = [[2, 'tutaj'], [5, 'TUTAJ']];

    expect(outcome)
      .toStrictEqual(expectedOutcome);
  });

  test('Throw an error if the input array is empty or phrase has no chars', () => {
    const inputArr: string[] = [];
    const inputPhrase = 'test';

    const output1 = () => findPhraseInArray(inputArr, inputPhrase);

    const expectedOutcome = Error(
      'The array cannot be empty and the phrase cannot be an empty string.');

    expect(output1)
      .toThrow(expectedOutcome);

    const inputArr2 = inputData;
    const inputPhrase2 = '  ';

    const output2 = () => findPhraseInArray(inputArr2, inputPhrase2);

    expect(output2)
      .toThrow(expectedOutcome);
  });
});


