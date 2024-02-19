/**
 * @description This function does a linear search of an array for a given value. It
 * divides the array into two subarrays based on the middle element and recurrently
 * searches one of the subarrays until the value is found or it is determined that
 * the value is not present at any index of the array.
 * 
 * @param { array } arr - The `arr` function parameter represents the array that
 * contains `x`.
 * 
 * @param {  } x - The `x` input parameter is the element to be searched within the
 * array passed as a parameter to the function. This function will search through
 * that array for an occurrence of that value at any position within it starting from
 * the first element to the last and return `true` if found or false if not.
 * 
 * @param { integer } start - The "start" parameter specifies the starting point for
 * the search. It is used to determine the left half of the search range (the half
 * before the midpoint).
 * 
 * @param { integer } end - The end input parameter is used to determine the highest
 * index within an array where a target value may be located. It limits the scope of
 * search as the algorithm repeats search (...) or mid - 1 recursively for subarrays
 * formed by elements beginning with start and ending at mid or earlier if target not
 * found.
 * 
 * @returns { array } The `search` function returns a boolean value that indicates
 * whether or not the given array contains the specified `x` element. Here's the
 * description of its output:
 * 
 * If `arr`, `x`, `start`, and `end` are given parameters respectively denoting an
 * array of numbers to search within; a target number to look for within the array;
 * a beginning index value of where to start searching from; and a terminating index
 * value marking where to stop looking (inclusive); then the function searches through
 * the input array using a binary-division approach which iterates towards reducing
 * the search area half its initial size each time around while also repeatedly
 * traversing along that reduced area to check if an item match has occurred at the
 * current center of the remaining area. When it locates or establishes (using
 * recursivity) the existence of such an item within the designated interval --
 * irrespective of its exact location among these search bounds as only mere existency
 * here needs be ascertained through comparison -- within those search ranges that
 * were shrunk to a localized half size compared earlier on; it immediately outputs
 * "true" indicating true value which corresponds also true positives for presence
 * within the designated segment if there are no more recursive calls pending; should
 * however the search term fall completely beyond the interval [3], either of three
 * potential outcomes might occur instead: a "false" would mark its absence[3].
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
