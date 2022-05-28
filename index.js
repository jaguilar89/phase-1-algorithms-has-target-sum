function hasTargetSum(array, target) {
  // Write your algorithm here
  const arrayCopy = array.slice();
  let sum = [];

  array.forEach((numberA, indexA) => {
    arrayCopy.forEach((numberB, indexB) => {
      if (numberA + numberB === target && indexA !== indexB) {
        sum.push(numberA + numberB)
      }
    })
  })
  return sum.includes(target) ? true : false
}

/* 
  Write the Big O time complexity of your function here:
  O(n + 3) => O(n)
*/

/* 
  Add your pseudocode here:
 declare variable, set eq to copy of array('arrayCopy')
 declare variable, set eq to empty array('sum')
 iterate through array
  for each element in array:
    iterate through all elements in arrayCopy:
      if array index and arrayCopy index are NOT equal AND the elements at those indexes add up to the target number:
        push the sum of both elements into 'sum' array
  
  evaluate the number in the 'sum' array and return true if it matches the target number, otherwise return false
*/

/*
  Add written explanation of your solution here:
In order to evaluate an array and check if any pairs of elements add up to a specified number. We need to create a copy of the original array
and evaluate both arrays in tandem, while doing so, we can add the elements of both arrays and see if the sum matches the target number.


original array = array1
array copy = array2

However, since the arrays are exact copies of each other, we also need to account for duplicate elements from each array. When an element of array1 matches up with its copy in array2,
we must not add them together, UNLESS their respective indexes are not also equal. Ie. [2, 2, 3, 3] with a target number of 4 should return true since the 1st element in array1 should be
added with the 2nd element in array2 even though they match.

While iterating through each element in array1, for each element in array1, we are also iterating through each element in array2.
In each iteration, we must evaluate and check for the following:
A. The sum of an element in array1 and an element in array2 matches the target number
          AND
B. Their respective indexes DO NOT match. To ensure that we are not adding 2 duplicate *elements* at the same indexes.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
