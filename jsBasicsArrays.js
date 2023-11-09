// Task #2

// Реализуйте и экспортируйте функцию getWeekends(), которая возвращает массив из двух элементов – названий выходных дней на английском. 
// Функция принимает на вход параметр – формат возврата. Всего есть два возможных значения:
// - 'long' – вернётся массив, содержащий значения saturday и sunday
// - 'short' – вернётся массив со значениями sat и sun

const getWeekends = (format) => {
    const weekends = ['saturday', 'sunday'];
    switch (format) {
      case 'long':
        return weekends;
      case 'short':
        for (let i = 0; i < weekends.length; i += 1) {
          weekends[i] = weekends[i].slice(0, 3);
        }
        return weekends;
      default:
        return weekends;
    }
  };


// Task #3

// Реализуйте и экспортируйте функцию swap(), которая меняет местами первый и последний элемент массива.
// Если массив содержит меньше двух элементов, то он возвращается как есть.

const swap = (array) => {
    if (array.length < 2) {
        return array;
    } else {
        const cash = array[0];
        const endIndex = array.length - 1;
        array[0] = array[endIndex];
        array[endIndex] = cash;
        return array;
    }
};


// Task #4

//  Реализуйте и экспортируйте по умолчанию функцию get(), которая извлекает из массива элемент по указанному индексу, если индекс существует,
//  либо возвращает значение по умолчанию. Исходный массив меняться не должен. Функция принимает на вход три аргумента:
//  - массив
//  - индекс
//  - значение по умолчанию (равно null)

const get = (array, index, param = null) => {
    if (index >= array.length) {
        return param;
    }
    return array[index];
};


// Task #5

// Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход массив и строковой префикс.
// Эта функция должна возвращать новый массив, в котором к каждому элементу исходного массива добавляется переданный префикс. 
// Функция предназначена для работы со строковыми элементами. После префикса должен добавляться пробел.

const addPrefix = (array, prefix) => {
  let prefixArray = [];
  for (let string of array) {
    prefixArray.push(`${prefix} ${string}`);
  }
  return prefixArray;
};


// Task #6

// Реализуйте и экспортируйте функцию reverse(), которая принимает на вход массив и располагает элементы исходного массива в обратном порядке.
// Функция должна мутировать переданный в нее массив. Новый массив из нее возвращать не надо.

const reverse = (array) => {
  for (let i = 0, j = array.length - 1; i < j; i += 1, j -= 1) {
    let temp = array[i];
    array[i] = array [j];
    array[j] = temp;
  }
  return array;
};


// Task #7

// Реализуйте и экспортируйте по умолчанию функцию. Она должна высчитывать сумму всех элементов массива, которые делятся без остатка на три:
// В случае пустого массива функция должна вернуть 0 (для этого в коде можно использовать guard expression).

const calculateSum = (array) => {
  if (array.length === 0) {
    return 0;
  }
  let sum = 0;
  for (const number of array) {
    if (number % 3 === 0) {
      sum += number;
    }
  }
  return sum;
};


// Task #8

// Реализуйте и экспортируйте по умолчанию функцию, которая высчитывает среднее арифметическое элементов переданного массива.
// В случае пустого массива функция должна вернуть значение null (используйте в коде для этого guard expression).

const sumAverage = (array) => {
  if (array.length === 0) {
    return null;
  }
  let sum = 0;
  for (const number of array) {
    sum += number;
  }
  return sum / array.length;
};

// Task #9

// Реализуйте функцию getSameParity(), которая принимает на вход массив чисел и возвращает новый, состоящий из элементов, 
// у которых такая же чётность, как и у первого элемента входного массива. Экспортируйте функцию по умолчанию.

const getSameParity = (array) => {
  const resultArray = [];
  if (array.length === 0) {
    return resultArray;
  }
  if (Math.abs(array[0]) % 2 === 0) {
    for (const num of array) {
      if (Math.abs(num) % 2 === 0) {
        resultArray.push(num);
      }
    }
  } else {
    for (const num of array) {
      if (Math.abs(num) % 2 !== 0) {
        resultArray.push(num);
      }
    }
  }
  return resultArray;
};


// Task #10

// Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход в виде массива кошелек с деньгами и 
// название валюты и возвращает сумму денег указанной валюты. Параметры функции:
// - массив, содержащий купюры разных валют с различными номиналами;
// - наименование валюты.

const getTotalAmount = (wallet, currency) => {
  let sum = 0;
  if (wallet.length === 0) {
    return sum;
  }
  for (const bill of wallet) {
    if (bill.slice(0, 3) !== currency) {
      continue;
    } else {
      sum += Number(bill.slice(3));
    }
  }
  return sum;
};


// Task #11

// Реализуйте и экспортируйте по умолчанию функцию, которая находит команду победителя для конкретной суперсерии. 
// Победитель определяется как команда, у которой больше побед (не количество забитых шайб) в конкретной серии. 
// Функция принимает на вход массив, в котором каждый элемент — это массив, описывающий счет в конкретной игре 
// (сколько шайб забила Канада и СССР). Результат функции – название страны: 'canada', 'ussr'. Если суперсерия 
// закончилась вничью, то нужно вернуть null.

const getSuperSeriesWinner = (scores) => {
  let ratio = 0;
  for (const score of scores) {
    ratio += Math.sign(score[0] - score[1]);
  }
  switch (Math.sign(ratio)) {
    case 0:
      return null;
    case -1:
      return 'ussr';
    case 1:
      return 'canada';
  }
};


// Task #12

// Реализуйте функцию buildDefinitionList(), которая генерирует HTML список определений (теги <dl>, <dt> и <dd>) и возвращает 
// получившуюся строку. При отсутствии элементов в массиве функция возвращает пустую строку. Параметр функции - cписок определений формата:
// const definitions = [
//   ['definition1', 'description1'],
//   ['definition2', 'description2']
// ]

const buildDefinitionList = (definitions) => {
  const resultArray = [];
  if (definitions.length === 0) {
    return '';
  }
  for (const definition of definitions) {
    resultArray.push(`<dt>${definition[0]}</dt><dd>${definition[1]}</dd>`);
  }
  return `<dl>${resultArray.join('')}</dl>`;
};


// Task #13

// Реализуйте и экспортируйте по умолчанию функцию, которая заменяет каждое вхождение указанных слов в предложении на последовательность $#%! и возвращает полученную строку. 
//    Аргументы:
//    - текст
//    - набор стоп слов
// Словом считается любая непрерывная последовательность символов, включая любые спецсимволы (без пробелов).

const makeCensored = (text, stopWordsList) => {
  const mask = '$#%!';
  let censoredText = [];
  for (const word of text.split(' ')) {
      if (stopWordsList.includes(word)) {
          censoredText.push(mask);
      } else {
          censoredText.push(word);
      }
  };
  return censoredText.join(' ');
};









