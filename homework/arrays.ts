/* getArrayLength should return length of the given as a parameter array
 * hint <T> is a generic type, for more details visit https://www.typescriptlang.org/docs/handbook/generics.html */
export function getArrayLength<T>(array: T[]): number {
  const returnedArrayLength: number = array.length;
  return returnedArrayLength;
}

/* filerNumbersLessThan should return new array of numbers less than given number
 *  for example with parameters [1,2,3,4,5] and 3 result should be [1,2] */
export function filerNumbersLessThan(
  array: number[],
  lessThan: number
): number[] {
  array.splice(array.length - lessThan, lessThan);
  return array;
}
const arrayToTrim: number[] = [1, 4, 5, 6, 8];

console.log(filerNumbersLessThan(arrayToTrim, 2));

/* filerNumbersBiggerThan should return new array of numbers bigger than given number
 *  for example with parameters [1,2,3,4,5] and 3 result should be [4,5] */

export function filerNumbersBiggerThan(
  array: number[],
  biggerThan: number
): number[] {
  array.splice(array[-1], biggerThan);
  return array;
}
const arrayToTrim2: number[] = [1, 4, 5, 6, 8];
console.log(filerNumbersBiggerThan(arrayToTrim2, 2));
/* addToEachArrayItem should add given number to each array elem
 * for example with parameters [1,2,3] and 3 the result should be [4,5,6]
 * hint: use map */
export function addToEachArrayItem(array: number[], add: number): number[] {
  return array.map((elem) => elem + add);
}

const arrayToTrim3: number[] = [1, 4, 5, 6, 8];
console.log(addToEachArrayItem(arrayToTrim3, 4));
/* multiplyEachArrayItem should multiply by given number each array elem
 * for example with parameters [1,2,3] and 3 the result should be [3,6,9]
 * hint: use map */
export function multiplyEachArrayItem(
  array: number[],
  multiply: number
): number[] {
  return array.map((elem) => elem * multiply);
}

const arrayToMultiply: number[] = [3, 6, 8, 9];

console.log(multiplyEachArrayItem(arrayToMultiply, 5));

/* getSumOfAllArrayItems return sum of all array items
 * for example with parameters [1,2,3,4] the result should be 10
 * hint: use reduce */
export function getSumOfAllArrayItems(array: number[]): number {
  const sumOfAllArrayItems = array.reduce((elem, a) => elem + a, 0);
  return sumOfAllArrayItems;
}

const arrayToSum: number[] = [1, 2, 3, 4, 5];
console.log(
  `Sum of all items in array: ${arrayToSum} is equal to: `,
  getSumOfAllArrayItems(arrayToSum)
);
