// Write a function:
//
// that, given an array `A` of `N` integers, returns the smallest positive integer
// (greater than 0) that does not occur in `A`.
//
// For example, given `A = [1, 3, 6, 4, 1, 2]`, the function should return `5`.
//
// Given `A = [1, 2, 3]`, the function should return `4`.
//
// Given `A = [−1, −3]`, the function should return `1`.
//
// Assume that:
//
// `N` is an integer within the range `[1..100,000]`;
// each element of array `A` is an integer within the range `[−1,000,000..1,000,000]`.



// Input is an array A with a set of integers n & n has to be greater than 1 but less than 100 000

      // Create a new, second array
      // Run through all elements of the initial A array
      // For each number, set the respective key in the second array to 'true'
      // Run through the second array and return the first key with value undefined
      // If no match is found, return 1, so it will work for an empty initial array as well

// Output will be the smallest and positive value of n & it does not appear in the array A

function findNumbers(values)  {

  let result = [];

  for (let i = 0; i < values.length; i++) {
    if (0 <= values[i]) {
      result[values[i]] = true;
    }
  }

  for (let i = 1; i <= result.length; i++) {
    if (undefined === result[i]) {
      return i;
    }
  }

  return 1

}

module.exports = findNumbers;
