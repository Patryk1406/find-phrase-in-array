import { findPhraseInArray } from '../find-phrase-in-array';

describe('findPhraseInArray function test suite', () => {
  const inputData: string[] = [
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
    const input = 'tut';

    const outcome = findPhraseInArray(inputData, input) as [number, string][];

    const expectedOutcome: [number, string][] = [[2, 'tutaj'], [5, 'TUTAJ']];

    expect(outcome)
      .toStrictEqual(expectedOutcome);
  });

  test('Throw an error if the input array is empty or phrase has no chars', () => {
    const inputArr: string[] = [];
    const inputPhrase = 'test';

    const output1: () => [number, string][] | string = () => findPhraseInArray(inputArr,
      inputPhrase);

    const expectedOutcome: Error = Error(
      'The array cannot be empty and the phrase cannot be an empty string.');

    expect(output1)
      .toThrow(expectedOutcome);

    const inputPhrase2 = '  ';

    const output2: () => [number, string][] | string = () => findPhraseInArray(inputData,
      inputPhrase2);

    expect(output2)
      .toThrow(expectedOutcome);
  });
});


