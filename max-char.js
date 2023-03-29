//To do: Given a string of characters, return the character that appears the most often.

//To do: No String or Array Methods (well brute force it first, but then no methods)!

function findMax(str) {
  const map = {};

  //loop through 'str' and create hashmap: if character exists increment, if doesnt exist create with value of 1
  for (const char of str) {
    if (map[char]) {
      map[char]++;
    } else {
      map[char] = 1;
    }
  }

  // default values for maxValue and maxProperty
  let maxValue = 0;
  let maxProperty = "";

  //loop through map and find the max value and it's property without array methods
  for (let key in map) {
    if (map[key] > maxValue) {
      maxValue = map[key];
      maxProperty = key;
    }
  }

  return maxProperty;
}

console.log(findMax("BOB"), "-> B");
console.log(findMax("georg"), "-> g");
console.log(findMax("Hello World!"), "-> l");
