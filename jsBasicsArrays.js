// Task #2

// Реализуйте и экспортируйте функцию getWeekends(), которая возвращает
// массив из двух элементов – названий выходных дней на английском. 
// Функция принимает на вход параметр – формат возврата. 
// Всего есть два возможных значения:

// 'long' – вернётся массив, содержащий значения saturday и sunday
// 'short' – вернётся массив со значениями sat и sun

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

