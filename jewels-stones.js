//To do: You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

//To do: Letters are case sensitive, so "a" is considered a different type of stone from "A".

//To do: Example 1:

//To do: Input: jewels = "aA", stones = "aAAbbbb"
//To do: Output: 3
//To do: Example 2:

//To do: Input: jewels = "z", stones = "ZZ"
//To do: Output: 0

//To do: Constraints:

//To do: 1 <= jewels.length, stones.length <= 50
//To do: jewels and stones consist of only English letters.
//To do: All the characters of jewels are unique.

function findJewels(jewels, stones) {
  const map = {};
  let count = 0;

  for (const jewel of jewels) {
    map[jewel] = true;
  }

  for (const stone of stones) {
    if (map[stone]) {
      count++;
    }
  }
  return count;
}

console.log(findJewels("aA", "aAAbbbb"), "-> 3");
console.log(findJewels("z", "ZZ"), "-> 0");
