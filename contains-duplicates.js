//To do: Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

//To do: Example 1:

//To do: Input: nums = [1,2,3,1]
//To do: Output: true
//To do: Example 2:

//To do: Input: nums = [1,2,3,4]
//To do: Output: false
//To do: Example 3:

//To do: Input: nums = [1,1,1,3,3,4,3,2,4,2]
//To do: Output: true

function containsDupes(arr) {
  let numsMap = {};
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (numsMap[num]) {
      return true;
    } else {
      numsMap[num] = true;
    }
  }
  return false;
}

console.log(containsDupes([1, 2, 3, 1]), "true");
console.log(containsDupes([1, 2, 3, 4]), "false");
console.log(containsDupes([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]), "true");
