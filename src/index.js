// Find second largest Num
const arr = [10, 5, 8, 20, 20, 15];

function findSecondLarges(arr) {
  const uniqueArr = [...new Set(arr)];
  uniqueArr.sort((a, b) => b - a);

  return uniqueArr[1];
}
console.log(findSecondLarges(arr));

// Do word reverse
const strArr = "My name is ritu";
const reverseedArr = strArr.split("").reverse().join("");
console.log("Reversed:", reverseedArr);

// Make 1st latter caps
const capitalisedWord = strArr
  .split(" ")
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");
console.log("Caps latter:", capitalisedWord);

// Move zero to end
const nums = [0, 1, 0, 3, 12];

// FInd max num
const maxNum = Math.max(...nums);
console.log("maxNum:", maxNum);

function moveZeroForward(nums) {
  let result = [];
  let zeroCount = 0;
  for (let num of nums) {
    if (num === 0) {
      zeroCount++;
    } else {
      result.push(num);
    }
  }
  console.log("Num:", result);

  for (let i = 0; i < zeroCount; i++) {
    result.push(0);
  }
  console.log("Result:", result);
}

moveZeroForward(nums);

// palindrome
const word = "madam";
console.log(word === word.split("").reverse().join(""));

// Check Prime Num

function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    } else {
      return true;
    }
  }
}

console.log("Result Prime NUM:", isPrime(6));
console.log("Result Prime NUM:", isPrime(9));

// Change Object value
const user = { name: "Ritu", age: 25, City: "Gurgaon" };
const newUser = structuredClone(user);
newUser.name = "Jhon";
newUser.age = 30;
console.log("New User:", newUser);

// Change Object Key

const { City: Country, ...rest } = user;

const user1 = { ...rest, Country };
console.log("New User 1:", user1);

// Sum of num
function sumOfNum(...num) {
  const total = num.reduce((a, b) => a + b, 0);
  return total;
}

console.log("New total:", sumOfNum(2, 3, 4, 5, 6));
const array = [1, 0, 9, 8, 7, 3, 0, 0];
// Move zero forward
function moveZeroForward(nums) {
  let result = [];
  let zeroCount = 0;

  for (let num of nums) {
    if (num === 0) {
      zeroCount++;
    } else {
      result.push(num);
    }
  }
  for (let i = 0; i < zeroCount; i++) {
    result.push(0);
  }
  return result;
}
console.log("test", moveZeroForward(array));
// Reserse Str
const strArr = "My name is ritu";

function reverseString(array) {
  return array
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ");
}

console.log("test 2:", reverseString(strArr));
// Capital str
function capsStr(array) {
  return array
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}
console.log("test 3:", capsStr(strArr));

// Array inside Array flaaten
const another_array = [1, 2, [3, 4], [2, [6, 7]]];

function flattenArray(array) {
  let result = [];

  for (let item of array) {
    if (Array.isArray(item)) {
      result = result.concat(flattenArray(item));
    } else {
      result.push(item);
    }
  }
  return result;
}
console.log("test 4:", flattenArray(another_array));

// SOrting Array
const users = [
  { name: "Ritu", age: 28 },
  { name: "Aman", age: 22 },
  { name: "Neha", age: 25 },
];

users.sort((a, b) => a.age - b.age);
console.log("Test 5:", users);

// Find Missing Num
const numValues = [1, 2, 4, 5];

function missingNum(nums) {
  const n = nums.length + 1;
  const total = (n * (n + 1)) / 2;
  const arraySum = nums.reduce((a, b) => a + b, 0);
  return total - arraySum;
}

console.log("Test 6:", missingNum(numValues));

// Find Repeated character

const arrName = "generation";

function countChar(array) {
  return array.split("").reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});
}
console.log("test 7:", countChar(arrName));

// Reducs Methods

// const callApi = (data) => {
//   return new Promise((res) => {
//     setTimeout(function () {
//       res(data);
//     }, 2000);
//   });
// };

// const ids = [1, 2, 3, 4, 5];

const arr = [
    {
      name: "xyz",
      age: 20,
    },
    {
      name: "pqr",
      age: 21,
    },
    {
      name: "abc",
      age: 20,
    },
  ];
  
  // const output = {
  //   20: ["xyz", "abc"],
  //   21: ["pqr"],
  // };
  
  const output = arr.reduce((acc, curr) => {
    if (!acc[curr.age]) {
      acc[curr.age] = [];
    }
    acc[curr.age].push(curr.name);
    return acc;
  }, {});
  
  console.log("Test:", output);
  
  // Find Max num
  const nummArray = [5, 2, 9, 1];
  const maxNum = nummArray.reduce((a, b) => (b > a ? b : a), nummArray[0]);
  
  console.log("Test ritu 3:", maxNum);
  
  const str = "apple";
  
  const result = str.split("").reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});
  console.log("test 5:", result);
  
  const arr2 = [[1, 2], [3, 4, [1, 2]], [5]];
  
  function flattenArray(array) {
    let result = [];
    for (let item of array) {
      if (Array.isArray(item)) {
        result = result.concat(flattenArray(item));
      } else {
        result.push(item);
      }
    }
    return result;
  }
  console.log("test 6:", flattenArray(arr2));
  
  // Remove duplicates
  const arr3 = [1, 2, 2, 3, 4, 4];
  const unique = arr3.reduce((acc, curr) => {
    if (!acc.includes(curr)) {
      acc.push(curr);
    }
    return acc;
  }, []);
  console.log("test", unique);
  
  // Convert Array to opject
  
  const arr6 = ["a", "b", "c"];
  
  const obj = arr6.reduce((acc, curr, index) => {
    acc[curr] = index;
    return acc;
  }, {});
  console.log("test 8", obj);
  
