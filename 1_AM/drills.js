const assert = require("assert")

// Feel free to look things up online!

const reverse = function(str) {
  // TODO - write a function which reverses the string
  let split = str.split("");
  let reverse = split.reverse();
  const reversestr = reverse.join("");

  return reversestr
}



const factorial = function(n) {
  // TODO - write a function which returns the factorial of a positive integer
  // For example, 5! = 5 * 4 * 3 * 2 * 1 = 120
  if(n == 0 || n == 1){
      return 1;
  }else{
      return n * factorial(n-1);
  }
}
let n = 5;
answer = factorial(n)

const announceDate = function() {
  // TODO - write a function which returns the current date in the following format:
  // "Today's date is January 7th, 2016. It is eleven thirty-seven in the morning."
  const today = new Date();

  const months = ["January", "February", "March", "April", "May", "June"];
  var month = today.getMonth();
  var day = today.getDate();
  var year = today.getFullYear();

  console.log(`Today's date is ${months[month]} ${day}th, ${year}`);
}

const shiftRight = function(str, num) {
  // TODO - write a function which shifts a string `num` characters to the right
  // Example = shiftThree("Hello") === "lloHe"
 var ans = str.substring(num, str.length) + str.substring(0, num);
 return ans;
}


const tokenize = function(str) {
  // TODO - write a function which converts a multi-word string into an array of words
  const splitby = str.split();
  console.log(splitby);
  return splitby
}


const uniqueOnes = function(array) {
  // TODO - write a function which returns the inputted array without duplicate elements
let char = ['A', 'B', 'C', 'C'];
let uniqueChar = [...new Set(char)]

console.log(uniqueChar);
}

const zip = function(arr1, arr2) {
  // TODO - write a function which combines two arrays into an array of 2-element arrays and returns -1
  // if the two arrays are of unequal length
  // Example: zip([1, 2, 3], [5, 3, 1]) === [[1, 5], [2, 3], [3, 1]]
  if (arr1.length != arr2.length) {
    return -1
  } else {
    let numList = [];
    let i = 0;
    while (i < arr2.length) {
      numList.push([arr1[i], arr2[i]]);
      i++;
    }
    console.log(numList);
    return numList;
  }
}

const unzip = function(arr) {
  // TODO - Write a function which does the opposite of `zip()`
}

// Write tests here:

assert(1 < 2)
assert(1 + 2 == 3)
assert([2, 3][0] === 2)
//////Testing reverse*********************************
console.log(reverse("hello"))
assert(reverse("3df") === "fd3");
//////Testing factorial*******************************
console.log("The factorial of " + n + " is " + answer);
//////Testing Date************************************
announceDate();
//////Testing ShiftRight******************************
var str2 = "Hello";
console.log(shiftRight(str2, 2));
//////Testing Tokenize********************************
let input = "JavaScript sad face";
process.stdout.write(`Testing tokenize with \"${input}\"...`);
tokenize(input);
//////Testing UniqueChars*****************************
//////Testing Zip*************************************
input = "[1, 2, 3], [5, 3, 1]"
process.stdout.write(`Testing zip with ${input}...`);
zip([1, 2, 3], [5, 3, 1])



