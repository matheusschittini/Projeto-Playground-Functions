// Questão 1

function compareTrue(bool1, bool2) {
  if (bool1 === true && bool2 === true) {
    return true;
  } return false;
}

// Questão 2

function calcArea(base, height) {
  const triangleArea = (base * height) / 2;
  return triangleArea;
}

// Questão 3

function splitSentence(string) {
  return string.split(' ');
}

// Questão 4

function concatName(arrayOfStrings) {
  return (`${arrayOfStrings[arrayOfStrings.length - 1]}, ${arrayOfStrings[0]}`);
}

// Questão 5

function footballPoints(wins, ties) {
  const winsPoints = 3 * wins;
  const tiesPoints = ties;
  return (winsPoints + tiesPoints);
}

// Questão 6

function findHighestNumber(array) {
  let highestNumber = array[0];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > highestNumber) {
      highestNumber = array[i];
    }
  }
  return highestNumber;
}
function highestCount(array) {
  const highestNumber = findHighestNumber(array);
  let counter = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === highestNumber) {
      counter += 1;
    }
  }
  return counter;
}

// Questão 7

function catAndMouse(mouse, cat1, cat2) {
  const distanceCat1Mouse = Math.abs(cat1 - mouse);
  const distanceCat2Mouse = Math.abs(cat2 - mouse);
  if (distanceCat1Mouse > distanceCat2Mouse) {
    return 'cat2';
  } if (distanceCat1Mouse === distanceCat2Mouse) {
    return 'os gatos trombam e o rato foge';
  } return 'cat1';
}

// Questão 8

function analyzeNumber(n) {
  let result;
  if (n % 3 === 0 && n % 5 === 0) {
    result = 'fizzBuzz';
  } else if (n % 3 === 0) {
    result = 'fizz';
  } else if (n % 5 === 0) {
    result = 'buzz';
  } else {
    result = 'bug!';
  } return result;
}

function fizzBuzz(array) {
  let returnedArray = [];
  for (let numbers of array) {
    returnedArray.push(analyzeNumber(numbers));
  }
  return returnedArray;
}

// Questão 9

function encode(string) {
  string = string.replace(/a/g, '1');
  string = string.replace(/e/g, '2');
  string = string.replace(/i/g, '3');
  string = string.replace(/o/g, '4');
  string = string.replace(/u/g, '5');
  return string;
}

function decode(string) {
  string = string.replace(/1/g, 'a');
  string = string.replace(/2/g, 'e');
  string = string.replace(/3/g, 'i');
  string = string.replace(/4/g, 'o');
  string = string.replace(/5/g, 'u');
  return string;
}

// Questão 10

function techList(array, name1) {
  if (array.length === 0) {
    return 'Vazio!';
  } const returnedArray = [];
  const sortedArray = array.sort();
  for (let techs of sortedArray) {
    const object = {
      tech: techs,
      name: name1,
    };
    returnedArray.push(object);
  }
  return returnedArray;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
