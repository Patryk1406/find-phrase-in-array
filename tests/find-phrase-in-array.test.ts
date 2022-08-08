import { findPhraseInArray } from '../find-phrase-in-array';
import { inputData } from './data/data';

test('Find elements without differentiating between uppercase and lowercase letters', () => {
  expect(findPhraseInArray(inputData, 'tut'))
    .toStrictEqual([[2, 'tutaj'], [5, 'TUTAJ']]);
});

test('Throw an error if the input array is empty or phrase has no chars', () => {
  expect(() => findPhraseInArray([], 'test'))
    .toThrow(Error);

  expect(() => findPhraseInArray(inputData, '   '))
    .toThrow(Error);
});
