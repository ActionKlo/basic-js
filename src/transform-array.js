import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  if (!Array.isArray(arr)) throw new Error('\'arr\' parameter must be an instance of the Array!')

  let disn = '--discard-next', 
      disp = '--discard-prev', 
      dn = '--double-next', 
      dp = '--double-prev',
      newArr = []

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == dp) {
      if (i != 0 && arr[i - 2] != disn) {
        newArr.push(arr[i - 1]);
      }
    } else if (arr[i] == dn) {
      if (i < arr.length - 1) {
        newArr.push(arr[i + 1]);
      }
    } else if (arr[i] == disp) {
      if (newArr.length != 0 && arr[i - 2] != disn) {
        newArr.pop();
      }
    } else if (arr[i] == disn) {
      i++
    } else {
      newArr.push(arr[i])
    }
  }

  return newArr
}
