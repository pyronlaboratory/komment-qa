
/**
 * @description This is a binary search function that takes an array and three
 * parameters: start (index), end (index), and x (value to find). It returns true if
 * the value is found and false otherwise.
 * 
 * @param { object } arr - The `arr` function parameter is passed by the caller and
 * serves as the array to be searched for the specified `x` value.
 * 
 * @param { string } x - The `x` input parameter is the value to be searched for
 * within the array passed as `arr`.
 * 
 * @param { array } start - The start input parameter represents the starting point
 * of the binary search within the given array.
 * 
 * @param { number } end - The purpose of the `end` parameter is to indicate the index
 * at which the search should stop when searching from the right of `mid`.  It serves
 * as an upper boundary for the portion of the array that needs to be searched. When
 * `mid+1==end`, the function will return directly because the searched value is not
 * found within the portion between mid and end without conducting further searches.
 * 
 * @returns { boolean } This function is a recursive binary search algorithm that
 * takes an array and a target value as input. It repeatedly divides the array into
 * two subarrays until it finds the target value or determines that the target value
 * does not exist within the given range.
 * The output returned by this function depends on the value of 'x'. If 'x' is found
 * within the array and range searched (start to end), the output would be true;
 * otherwise(i.e if 'x' doesn't lie within the search array), it outputs false.
 */
const search = (arr, x, start, end) => {
  if (start > end) return false;
  let mid = Math.floor((start + end) / 2);
  if (arr[mid] === x) return true;
  if (arr[mid] > x) {
    return search(arr, x, start, mid - 1);
  } else {
    return search(arr, x, mid + 1, end);
  }
};
