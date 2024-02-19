
/**
 * @description This function implements a binary search algorithm to find the index
 * of a given value "x" within an array "arr". It takes four arguments: arr (the input
 * array), x (the value to search for), start (the leftmost index of the search
 * interval), and end (the rightmost index of the search interval). The function
 * recursively divides the search interval into two sub-intervals based on the value
 * of mid = (start + end) / 2. If the array's value at index mid matches x , the
 * function returns true; if the array's value at index mid is greater than x , it
 * recursively calls itself with arr ,x ,start , and mid-1; otherwise it recursively
 * calls itself with arr ,x ,mid +1 ,end.
 * 
 * @param { array } arr - The arr parameter is passed by the caller of the search()
 * function to perform searching on that array.
 * 
 * @param { any } x - The function searches a sorted array `arr` for element `x`, and
 * `x` is the target to search for.
 * 
 * @param { number } start - The `start` input parameter determines the starting point
 * for searching elements less than or equal to the target element `x`. If `start >
 * end`, then `search` returns `false`. If `start` is equal to `end`, then the search
 * is successful because there is only one element at index `end` that matches `x`.
 * 
 * @param { number } end - The function searches for an element `x` within a sorted
 * array `arr`. It is called with four inputs:  `arr`, `x`, `start`, and `end`, where
 * `start` is the beginning index of the portion of the array to search and `end`
 * specifies the endpoint. However 'end' does not directly influence what or whether
 * elements are searched. Instead it provides context regarding the middle index
 * `mid`, established by calling Math.floor((start + end)/ 2)  When `end` approaches
 * the last index of `arr`, a greater portion of array is delegated to be examined
 * on each call of `search()`, increasing the probability that the first call will
 * successfully find the value; while passing end equal to start-1 prevents unnecessary
 * repeated iterations. Ultimately the correct 'start' position depends on if search
 * should begin before or after possible occurrences of x. Thus while end may provide
 * hints on how efficient a particular search attempt is likely to be based upon array
 * content and location relative to find it -- the search operation remains indifferent
 * with regard to that specific 'end'-determined aspect for that iteration since if
 * mid has no element x or lies past start and prior to an index bearing `x`, only
 * one (already established middle or half) can change based on current parameter evaluations.
 * 
 * @returns { boolean } This function implements a binary search algorithm that takes
 * an array and three values as inputs: the element to search for (x), the beginning
 * of the search range (start), and the end of the search range (end). The function
 * returns true if x is found within the search range; otherwise it returns false.
 * 
 * Starting from the beginning of the input array(start), the function repeatedly
 * divides the search range into two subranges using the middle index(mid =
 * Math.floor((start + end) / 2)), checks if x is present at the middle index mid ,
 * and recurcisvely searches either the subrange start to mid-1 or mid+1to end if the
 * mid index does not match x . This process concludes when the function discovers x
 * within the search range(return true), or the end of the input array is reached
 * without finding x (return false).
 * 
 * To sum up ,this function enables quick and effective location of an element inside
 * an array by using binary search to partition and restrict the research scope based
 * on a continuous assessment of whether the sought value "x" matches any element at
 * the center index of each subarray created recursively.
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
