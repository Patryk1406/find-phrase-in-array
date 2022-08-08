export const findPhraseInArray = (array: string[], phrase: string): [number, string][] | string => {
  if (array.length === 0 || phrase.trim().length === 0) {
    throw new Error(
      'The array cannot be empty and the phrase cannot be an empty string.');
  }
  const phraseInLowerCase = phrase.toLowerCase();
  // @ts-ignore
  const returnedArray: [number, string][] = array.map((element, index) => {
    if (element.toLowerCase()
      .includes(phraseInLowerCase)) {
      return [index, element];
    }
  })
    .filter(el => el);
  //map'a zamiast for'a
  // for (let i = 0; i < array.length; i++) {
  //   const currentValue = array[i];
  //   if (currentValue.toLowerCase()
  //     .includes(phraseInLowerCase)) {
  //     returnedArray.push([i, currentValue]);
  //   }
  // }

  //nie ma komunikatu
  return returnedArray.length === 0 ? 'The element was not found' : returnedArray;
};
