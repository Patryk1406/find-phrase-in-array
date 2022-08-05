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

const findPhraseInArray = (array: string[], phrase: string): [number, string][] => {
  const returnedArray: [number, string][] = [];
  const phraseInLowerCase = phrase.toLowerCase();
  for (let i = 0; i < array.length; i++) {
    const currentValue = array[i];
    if (currentValue.toLowerCase()
      .includes(phraseInLowerCase)) {
      returnedArray.push([i, currentValue]);
    }
  }
  return returnedArray;
};

const result = findPhraseInArray(inputData, 'ta');
console.log(result);
