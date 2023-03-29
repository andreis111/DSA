// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

// ///Solution 1:
// function count (string) {
//     let obj = {}
//    string.split(``).map(e => {
//   if (!obj[e]) {
//     obj[e]= 1
//    } else {
//    obj[e]= (obj[e]+1)
//    }
// })

//   return obj
//   }

// ///Solution 2:
// function count(string) {
//     let obj = {};
//     string.split(``).map((e) => (obj[e] = obj[e] + 1 || 1));

//     return obj;
// }

///Solution 3:
function count(string) {
  let countObj = {};
  for (const c of string) {
    if (countObj[c]) {
      countObj[c]++;
    } else {
      countObj[c] = 1;
    }
  }

  return countObj;
}
