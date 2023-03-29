//To do: Given an array nums of size n, return the majority element.
//To do: The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
//To do: Example 1:
//To do: Input: nums = [3,2,3]
//To do: Output: 3
//To do: Example 2:
//To do: Input: nums = [2,2,1,1,1,2,2]
//To do: Output: 2

// ///Solution1:
// function majorityElement(nums) {
//     const map = {}

//     for (const num of nums) {
//         if (map[num]) {
//             map[num]++
//         } else {
//             map[num] = 1
//         }
//     }
//     let majorityEl = null;
//     let maxCount = 0

//     for (const el in map) {
//         if (map[el] > maxCount) {
//             majorityEl = el
//             maxCount = map[el]
//         }
//     }

//     if (maxCount > nums.length/2) {
//         return majorityEl
//     }
// }

// ///Solution2:
function majorityElement(nums) {
  let elem = {};

  for (const num of nums) {
    elem[num] = elem[num] + 1 || 1;
    if (elem[num] > nums.length / 2) {
      return num;
    }
  }
}

///Solution3:
// function majorityElement(nums) {
//     nums.sort((a,b) => a-b)
//     return nums[Math.floor(nums.length/2)]
// }

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));

[2, 2, 1, 1, 1, 2, 2][(1, 1, 1, 2, 2, 2, 2)];
