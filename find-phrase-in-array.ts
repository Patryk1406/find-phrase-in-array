export const findPhraseInArray = (array: string[], phrase: string): [number, string][] | string => {
  if (array.length === 0 || phrase.trim().length === 0) {
    throw new Error(
      'The array cannot be empty and the phrase cannot be an empty string.');
  }
  const phraseInLowerCase = phrase.toLowerCase();
  const returnedArray = array.map((element, index) => element.toLowerCase()
    .includes(phraseInLowerCase) ? [index, element] : null)
    .filter(el => el) as [number, string][];

  return returnedArray.length === 0 ? 'The element was not found' : returnedArray;
};
