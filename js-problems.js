// // ==================== find vowels
// const findVowels = (str) => {
//   str = str.replace(" ", "");
//   console.log(str);
//   const sentenceList = str.split("");
//   let vowelCounter = 0;
//   sentenceList.map((letter) => {
//     if (
//       letter === "a" ||
//       letter === "e" ||
//       letter === "o" ||
//       letter === "i" ||
//       letter === "u"
//     ) {
//       vowelCounter++;
//     }
//   });
//   return vowelCounter;
// };

// console.log(findVowels("aeiou"));

// // ==================== find vowels using reduce

// const findVowelsReduce = (str) => {
//   str = str.replace(" ", "");
//   console.log(str);
//   const sentenceList = str.split("");
//   const count = sentenceList.reduce((acc, currVal) => {
//     if (
//       currVal === "a" ||
//       currVal === "e" ||
//       currVal === "o" ||
//       currVal === "i" ||
//       currVal === "u"
//     ) {
//       acc += 1;
//     }
//     return acc;
//   }, 0);
//   return count;
// };

// console.log(findVowelsReduce("helloo world"));

// ==================== sum of squares

// const sumOfSquares = (digitsList) => {
//   console.log(...digitsList);
//   return digitsList.reduce((acc, currVal) => (acc += currVal * currVal), 0);
// };

// console.log(sumOfSquares([1, 2, 3]));

// ==================== find minimum

// const findMinimum = (numberList) => {
//   return Math.min(...numberList);
// };

// console.log(findMinimum([1, 5, -2, 55, -9]));

// ==================== convert to camelCase and snake-case

// const convertCase = (sentence) => {
//   const sentenceList = sentence.split(" ");
//   const [first, ...rest] = sentenceList;
//   const restOfTheArrayCamelcase = rest.reduce((acc, currVal) => {
//     const firstLetter = currVal.slice(0, 1).toUpperCase();
//     const restLetters = currVal.slice(1, currVal.length).toLowerCase();
//     acc += firstLetter + restLetters;
//     return acc;
//   }, "");

//   const snakeCaseArray = rest.join("_").toLowerCase();
//   return {
//     camelCase: first + restOfTheArrayCamelcase,
//     ["snake-case"]: `${first}_${snakeCaseArray}`,
//   };
// };

// console.log(convertCase("this is makRANd here"));

// ==================== reverse a string without built-in method

// const strReverse = (stringForReversal) => {
//   stringForReversal = stringForReversal.split("");
//   return stringForReversal.reduce((acc, currVal) => currVal + acc, "");
// };

// console.log(strReverse("makrand"));

// ==================== find mediant
// 3,4,5,6,7, 0 ,0 // Odd - center // 5
// 3,4,5,9,6,7 // Even - center two digits mean (5+9)/2

// const findMedian = (digitList) => {
//   digitList = digitList.sort((a, b) => a - b);
//   console.log(digitList);
//   // ODD

//   if (digitList.length % 2 !== 0) {
//     const centerIndex = Math.round(digitList.length / 2) - 1;
//     console.log(centerIndex, ":--centerIndex--");
//     return digitList[centerIndex];
//   } else {
//     // EVEN
//     const centerIndex = Math.round(digitList.length / 2) - 1;
//     console.log(centerIndex, ":--centerIndex--");
//     const meanOfTwoCenter =
//       (digitList[centerIndex] + digitList[centerIndex + 1]) / 2;
//     return meanOfTwoCenter;
//   }
// };

// console.log(findMedian([1, 11, 3, 5, 9, 7]));

// ==================== find count of elements {1: 4, 2: 2, 3: 1, 4: 1, 55: 3, 66: 1}

// const findCount = (numberList) => {
//   return numberList.reduce((acc, currVal) => {
//     acc[currVal] = (acc[currVal] || 0) + 1;
//     // if (acc[currVal]) {
//     //   acc[currVal] += 1;
//     // } else {
//     //   acc[currVal] = 1;
//     // }
//     return acc;
//   }, {});
// };

// console.log(findCount([1, 2, 3, 4, 1, 1, 1, 55, 55, 55, 66, 22, 2]));

// ==================== find frequently recurring number
// const findMostRepeatingNumber = (numberList) => {
//   const numberCount = numberList.reduce((acc, currVal) => {
//     acc[currVal] = (acc[currVal] || 0) + 1;
//     return acc;
//   }, {});

//   console.log(numberCount);
//   let greatest = 0;
//   let value = 0;
//   for (let i in numberCount) {
//     if (numberCount[i] > greatest) {
//       greatest = numberCount[i];
//       value = i;
//     }
//   }
//   return value;
// };

// console.log(
//   findMostRepeatingNumber([1, 2, 3, 4, 1, 1, 1, 55, 55, 55, 55, 55, 66, 22, 2])
// );

// ==================== find factorial

// const factorial = (factNumber) => {
//   if (factNumber === 0) {
//     return 1;
//   }

//   return factorial(factNumber - 1) * factNumber;
// };

// console.log(factorial(3));

// ==================== find fibbo

// const fibbo = (fibNumber) => {
//   if (fibNumber === 1) {
//     return 1;
//   }

//   return fibNumber * fibbo(fibNumber - 1);
// };

// console.log(fibbo(4));

// ==================== Repeat string

// const repeatString = (stringToRepeat, times) => {
//   return stringToRepeat.repeat(times);
// };

// console.log(repeatString("Abc", 5));

// ==================== Truncate string
// const truncateString = (stringToRepeat, times) => {
//   return stringToRepeat.slice(0, times).padEnd(stringToRepeat.length, ".");
// };

// console.log(truncateString("this is makrand and siddhi", 16));

// ==================== Number range generator

// const generateNumberRange = (start, end) => {
//   const range = [];

//   while (start <= end) {
//     range.push(start);
//     start++;
//   }
//   return range;
// };

// console.log(generateNumberRange(85, 99));

// ==================== Number range generator - Recursive

// const range = [];
// const generateNumberRangeRecursive = (start, end) => {
//   if (start === end) {
//     return range;
//   }
//   range.push(start);
//   return generateNumberRangeRecursive(start + 1, end);
// };

// console.log(generateNumberRangeRecursive(85, 109));

// const generateHex = () => {
//   let hexStr = "#";
//   for (let i = 0; i < 6; i++) {
//     hexStr += Math.floor(Math.random() * 255).toString(16);
//   }
//   return hexStr.slice(0, 7);
// };

// console.log(generateHex());

// ==================== Empty object checker

// const isObjEmpty = (obj) => {
//   if (obj && Object.keys(obj).length === 0) {
//     return "Empty";
//   }
//   return "Full";
// };

// console.log(isObjEmpty({}));
// console.log(isObjEmpty({ test: 1 }));
// console.log(isObjEmpty({}));

// ==================== Obj to Array and back

// const objToArrayAndViceVersa = (obj) => {
//   let lists = Object.entries(obj);
//   console.log(lists, ":--lists--");

//   // one line solution for arr to obj
//   //   console.log(Object.fromEntries(lists), ":---vice versa");
//   return lists.reduce((acc, currVal) => {
//     let [key, val] = currVal;
//     acc[key] = val;
//     return acc;
//   }, {});
// };

// let myObj = {
//   name: "Makrand",
//   lastName: "Gurav",
//   age: 36,
// };
// console.log(objToArrayAndViceVersa(myObj));

// ==================== calculate days between dates

// const differenceDates = (startDate, endDate) => {
//   let date1 = new Date(startDate);
//   let date2 = new Date(endDate);
//   let mul = 24 * 60 * 60 * 1000;
//   console.log((date2 - date1) / mul);
// };

// console.log(differenceDates("2024-08-08", "2024-08-28"));

// ==================== calculate age

// const calcAge = (birthDate) => {
//   const getYear = new Date(birthDate).getFullYear();
//   const getCurrYear = new Date().getFullYear();
//   const getMonth = new Date(birthDate).getMonth() + 1;
//   const getCurrMonth = new Date().getMonth() + 1;
//   const age = getCurrYear - getYear;
//   console.log(age, ":---age");

//   if (getMonth === getCurrMonth || getMonth < getCurrMonth) {
//     return age;
//   } else {
//     return age - 1;
//   }
// };

// console.log(calcAge("1988-04-02"));

// ==================== text based bar chart

// const generateTextChart = (pointers) => {
//   pointers.map((singlePoint, i) => {
//     let star = "";
//     for (let i = 1; i <= singlePoint; i++) {
//       star += "*";
//     }
//     console.log(singlePoint + ":" + star);
//   });
// };

// console.log(generateTextChart([5, 9, 3, 18]));

// ==================== validate credit card

// const validateCreditCard = (ccNumber) => {
//   // reverse digits
//   ccNumber = ccNumber.trim().replaceAll(" ", "").split("").reverse();
//   //   console.log(ccNumber.join(""));
//   const oddOperation = ccNumber.reduce((acc, currVal, currIndex) => {
//     // console.log(currVal, ":---currVal---", acc, typeof acc, ":--acc--");
//     if (currIndex % 2 != 0) {
//       currVal *= 2;
//       //   console.log(currVal, ":---Modded currVal---");
//       if (currVal > 9) {
//         currVal = parseInt(currVal) - 9;
//       }
//     }

//     acc += parseInt(currVal);
//     return acc;
//   }, 0);
//   //   console.log(Number(oddOperation) % 10, ":---oddOperation--");
//   return Number(oddOperation) % 10 === 0;
// };

// console.log(validateCreditCard("4539 1488 0343 6467"));
// // 07124123830816429658
// // 07343383087429658

// ==================== check Anagram

// const isAnagram = (str1, str2) => {
//   let result = str1.split("");
//   let result2 = str2.split("");
//   let res1 = result.sort().join("");
//   let res2 = result2.sort().join("");

//   return res1 === res2;
// };

// console.log(isAnagram("makrand", "dnarkam"));
// console.log(isAnagram("makrand", "siddhi"));

// ==================== Find Dups in an array

// const findDups = (alphaArr) => {
//   return alphaArr.reduce((acc, currVal) => {
//     // if (arr.includes(currVal) && inx != )
//     acc[currVal] = (acc[currVal] || 0) + 1;

//     return acc;
//   }, []);
// };

// console.log(findDups(["a", "b", "a", "c", "d", "p", "d"]));

// ==================== print 2MM3WWW when given MWWMW
// function processInput(string1) {
//   //COMPLETE THIS FUNCTION
//   const splitString = string1.split("");
//   const reducerOp = splitString.reduce((acc, currVal) => {
//     acc[currVal] = (acc[currVal] || 0) + 1;
//     return acc;
//   }, []);

//   return Object.assign({}, reducerOp);
// }

// console.log(processInput("MWWMW"));

// ==================== Rotate LEft (Circular array)

// const implementCircularArr = (arr, numRotatations) => {
//   console.log(arr, ":--original--");
//   while (numRotatations > 0) {
//     // console.log(arr, "---arr");
//     let shifted = arr.shift();
//     // console.log(shifted, "---shifted");
//     arr.push(shifted);
//     // console.log(arr, "---arr after shift");
//     numRotatations--;
//   }
//   return arr;
// };

// console.log(implementCircularArr([1, 2, 3, 4, 5], 9));



