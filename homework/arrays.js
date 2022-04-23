"use strict";
exports.__esModule = true;
exports.getSumOfAllArrayItems = exports.multiplyEachArrayItem = exports.addToEachArrayItem = exports.filerNumbersBiggerThan = exports.filerNumbersLessThan = exports.getArrayLength = void 0;
/* getArrayLength should return length of the given as a parameter array
 * hint <T> is a generic type, for more details visit https://www.typescriptlang.org/docs/handbook/generics.html */
function getArrayLength(array) {
    var returnedArrayLength = array.length;
    return returnedArrayLength;
}
exports.getArrayLength = getArrayLength;
/* filerNumbersLessThan should return new array of numbers less than given number
 *  for example with parameters [1,2,3,4,5] and 3 result should be [1,2] */
function filerNumbersLessThan(array, lessThan) {
    array.splice(array.length - lessThan, lessThan);
    return array;
}
exports.filerNumbersLessThan = filerNumbersLessThan;
var arrayToTrim = [1, 4, 5, 6, 8];
console.log(filerNumbersLessThan(arrayToTrim, 2));
/* filerNumbersBiggerThan should return new array of numbers bigger than given number
 *  for example with parameters [1,2,3,4,5] and 3 result should be [4,5] */
function filerNumbersBiggerThan(array, biggerThan) {
    array.splice(array[-1], biggerThan);
    return array;
}
exports.filerNumbersBiggerThan = filerNumbersBiggerThan;
var arrayToTrim2 = [1, 4, 5, 6, 8];
console.log(filerNumbersBiggerThan(arrayToTrim2, 2));
/* addToEachArrayItem should add given number to each array elem
 * for example with parameters [1,2,3] and 3 the result should be [4,5,6]
 * hint: use map */
function addToEachArrayItem(array, add) {
    return array.map(function (elem) { return elem + add; });
}
exports.addToEachArrayItem = addToEachArrayItem;
var arrayToTrim3 = [1, 4, 5, 6, 8];
console.log(addToEachArrayItem(arrayToTrim3, 4));
/* multiplyEachArrayItem should multiply by given number each array elem
 * for example with parameters [1,2,3] and 3 the result should be [3,6,9]
 * hint: use map */
function multiplyEachArrayItem(array, multiply) {
    return array.map(function (elem) { return elem * multiply; });
}
exports.multiplyEachArrayItem = multiplyEachArrayItem;
var arrayToMultiply = [3, 6, 8, 9];
console.log(multiplyEachArrayItem(arrayToMultiply, 5));
/* getSumOfAllArrayItems return sum of all array items
 * for example with parameters [1,2,3,4] the result should be 10
 * hint: use reduce */
function getSumOfAllArrayItems(array) {
    var sumOfAllArrayItems = array.reduce(function (elem, a) { return elem + a; }, 0);
    return sumOfAllArrayItems;
}
exports.getSumOfAllArrayItems = getSumOfAllArrayItems;
var arrayToSum = [1, 2, 3, 4, 5];
console.log("Sum of all items in array: ".concat(arrayToSum, " is equal to: "), getSumOfAllArrayItems(arrayToSum));
