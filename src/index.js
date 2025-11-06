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
  let zeroCount = [];
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
