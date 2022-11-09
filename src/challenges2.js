// Questão 11

function check0Or9(array) {
  for (let number of array) {
    if (number < 0 || number > 9) {
      return false;
    }
  }
  return true;
}

function moreThan3Times(array) {
  let counter;
  for (let i = 0; i < array.length; i += 1) {
    if (counter >= 3) {
      return false;
    }
    counter = 0;
    for (let i1 = 0; i1 < array.length; i1 += 1) {
      if (array[i] === array[i1]) {
        counter += 1;
      }
    }
  }
  return true;
}

function generatePhoneNumber(array) {
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  const cond1 = moreThan3Times(array);
  const cond2 = check0Or9(array);
  if (cond1 === true && cond2 === true) {
    return `(${array[0]}${array[1]}) ${array[2]}${array[3]}${array[4]}${array[5]}${array[6]}-${array[7]}${array[8]}${array[9]}${array[10]}`;
  } return 'não é possível gerar um número de telefone com esses valores';

}

// Questão 12

function checkCondition1(lineA, lineB, lineC) {
  const condLineA = (lineA < lineB + lineC);
  const condLineB = (lineB < lineA + lineC);
  const condLineC = (lineC < lineB + lineA);
  return condLineA && condLineB && condLineC;
}

function checkCondition2(lineA, lineB, lineC) {
  const condLineA = lineA > Math.abs(lineB - lineC);
  const condLineB = lineB > Math.abs(lineA - lineC);
  const condLineC = lineC > Math.abs(lineB - lineA);
  return condLineA && condLineB && condLineC;
}

function triangleCheck(lineA, lineB, lineC) {
  const condition1 = checkCondition1(lineA, lineB, lineC);
  const condition2 = checkCondition2(lineA, lineB, lineC);
  return condition1 && condition2;
}

// Questão 13

function hydrate(string) {
  const arrayDrinks = string.match(/\d+/g);
  let sum = 0;
  for (let i = 0; i < arrayDrinks.length; i += 1) {
    sum += parseInt(arrayDrinks[i], 10);
  }
  if (sum === 1) {
    return '1 copo de água';
  } return `${sum} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
