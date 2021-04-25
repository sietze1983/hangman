function displayWordSoFar(word, guesses) {
  const lettersInWordArray = word.split("");

  let output = "";
  for (let index = 0; index < lettersInWordArray.length; index++) {
    const letterInWord = lettersInWordArray[index];
    const isLetterGuessed = guesses.includes(letterInWord);

    if (!isLetterGuessed) {
      output = output + "_ ";
    }

    if (isLetterGuessed) {
      output = output + letterInWord + " ";
    }
  }
  return output;
}

function isGameWon(word, guesses) {
  const lettersInWordArray = word.split("");

  for (let index = 0; index < lettersInWordArray.length; index++) {
    const letterInWord = lettersInWordArray[index];
    const letterGuessed = guesses.includes(letterInWord);
    if (!letterGuessed) {
      return false;
    }
  }

  return true;
}

function isGameLost(word, guesses) {
  const mistakeCount = countMistakes(word, guesses);

  const MAX_MISTAKE_COUNT = 7;
  if (mistakeCount >= MAX_MISTAKE_COUNT) {
    return true;
  } else {
    return false;
  }
}

function countMistakes(word, guesses) {
  let mistakeCount = 0;
  for (let index = 0; index < guesses.length; index++) {
    const guess = guesses[index];
    const isGuessCorrect = word.includes(guess);
    if (!isGuessCorrect) {
      mistakeCount = mistakeCount + 1;
    }
  }
  return mistakeCount;
}

module.exports = {
  displayWordSoFar: displayWordSoFar,
  isGameWon: isGameWon,
  isGameLost: isGameLost,
  countMistakes: countMistakes,
};