                                                    //    CHAPTER-=35-TO-38
// Q.NO-1
// ANS-
// let date = new Date();
// document.write(date);
// -------------------

// Q.NO-2
// ANS-                                        
// function user(firstName, lastName) {
// let fullName = firstName+" "+lastName;
// console.log(" WellCome " + fullName + " WellCome! ")
// }
// let firstName = "Jawad";
// let lastName = "Hassan"
// user(firstName,lastName);
// -----------------------------------------------------

// Q.NO-3
// ANS-
// function ab(a,b) {
//     return(a+b);
// }
// let sum = ab(6,3)
// console.log(sum)
// -------------------
// function addNumbers() {
//     let number1 = parseFloat(prompt("Enter the first number:"));
//     let number2 = parseFloat(prompt("Enter the second number:"));
//     let sum = number1 + number2;
//     return sum;
//   }
//   let result = addNumbers();
//   document.write(" Sum: "+ result)
// ------------------------------------------------------------------

// Q.NO-4
// ANS-
// function calculate(num1, num2, operator) {
//     let result;
//     switch (operator) {
//       case '+':
//         result = num1 + num2;
//         break;
//       case '-':
//         result = num1 - num2;
//         break;
//       case '*':
//         result = num1 * num2;
//         break;
//       case '/':
//         if (num2 !== 0) {
//           result = num1 / num2;
//         } else {
//           result = "Division by zero is not allowed!";
//         }
//         break;
//       default:
//         result = "Invalid operator";
//     }
//     return result;
//   }
//   let num1 = parseFloat(prompt("Enter the first number:"));
//   let num2 = parseFloat(prompt("Enter the second number:"));
//   let operator = prompt("Enter the operator (+, -, *, /):");
//   let result = calculate(num1, num2, operator);
//   document.write(`Result: ${result}`);
//   ----------------------------------------------------------

// Q.NO-5
// ANS-
// function sqNum(number) {
//         let result = number * number;
//         return result;
//       }
//       let input = 9;
//       let square = sqNum(input);
//       console.log(input + " ka square: " + square);
// ---------------------------------------------------

// Q.NO-6
// ANS-
// function fac(number){
//     if (number === 0 || number ===1)
//     return 1;

// } else{
//     var result = 1;
//     for(i = 2; i < number; i++){
//         result *=i
//     }
// }
// -----------------------------------

// Q.NO-7
// ANS-

// function displayCounting(start,end) {
//     if (start <= end){
//         for(var i = start; i<=end; i++) {
//             console.log(i);
//         }
//     } else{
//         console.log("Start number should be less than or equal to end number.");
//     }
// }
// let start = 1;
// let end = 5;
// displayCounting(start,end);
// ----------------------------------------------------------------------------------

// Q.NO-8
// ANS-
// function calculateHypotenuse(base, perpendicular) {
//     function calculateSquare(num) {
//       return num * num;
//     }
//     let baseSquare = calculateSquare(base);
//     let perpendicularSquare = calculateSquare(perpendicular);
//     let hypotenuseSquare = baseSquare + perpendicularSquare;
//       let hypotenuse = Math.sqrt(hypotenuseSquare);
  
//     return hypotenuse;
//   }
//     let base = parseFloat(prompt("Enter the base of the right-angled triangle:"));
//   let perpendicular = parseFloat(prompt("Enter the perpendicular of the right-angled triangle:"));
//     let result = calculateHypotenuse(base, perpendicular);
//     document.write(`Hypotenuse of the right-angled triangle is: ${result}`);
//   ------------------------------------------------------------------------------------------------

// Q.NO-9
// ANS-
// i. Arguments as value

// function calculateRectangleArea(width, height) {
//         var area = width * height;
//         return area;
//       }
//       var area1 = calculateRectangleArea(8, 10);
//       console.log("Rectangle ka area (arguments as values): " + area1);

    //   ii. Arguments as variables

    // function calculateRectangleAreaWithVariables(width, height) {
    //     return width * height;
    //   }
    //   let userWidth = parseFloat(prompt("Enter the width of the rectangle:"));
    //   let userHeight = parseFloat(prompt("Enter the height of the rectangle:"));
      
    //   let areaWithVariables = calculateRectangleAreaWithVariables(userWidth, userHeight);
    //   console.log(`Area with variables: ${areaWithVariables}`);
// ------------------------------------------------------------------------------------------

// Q.NO-10
// ANS-
// function isPalindrome(str) {
//     const cleanedStr = str.replace(/[\W_]/g, '').toLowerCase();
//         return cleanedStr === cleanedStr.split('').reverse().join('');
//   }
//     const userInput = prompt("Enter a string to check if it's a palindrome:");
//   const isPalindromeResult = isPalindrome(userInput);
  
//   if (isPalindromeResult) {
//     console.log(`${userInput} is a palindrome.`);
//   } else {
//     console.log(`${userInput} is not a palindrome.`);
//   }
//   ---------------------------------------------------------------------------
  
// Q.NO-11
// ANS-
// function capitalizeWords(str) {
//     let words = str.split(' ');
//     let capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
//     let result = capitalizedWords.join(' '); 
//     return result;
//   }
//   let inputString = 'the quick brown fox';
//   let capitalizedString = capitalizeWords(inputString);
//   console.log(`Original String: ${inputString}`);
//   console.log(`Capitalized String: ${capitalizedString}`);
//   ----------------------------------------------------------------------------------------

// Q.NO-12
// ANS-
// function findLongestWord(str) {
//     const words = str.split(' ');
//     let longestWord = '';
//     let longestWordLength = 0;
//     for (const word of words) {
//       if (word.length > longestWordLength) {
//         longestWord = word;
//         longestWordLength = word.length;
//       }
//     }
//     return longestWord;
//   }
//   const inputString = 'Web Development Tutorial';
//   const longestWord = findLongestWord(inputString);
//   console.log(`Original String: ${inputString}`);
//   console.log(`Longest Word: ${longestWord}`);
// ------------------------------------------------------
//
// Q.NO-13
// ANS-
// function countOccurrences(str, letter) {
//     const lowerCaseStr = str.toLowerCase();
//     const lowerCaseLetter = letter.toLowerCase();
  
//     let count = 0;
  
//     for (let i = 0; i < lowerCaseStr.length; i++) {
//       if (lowerCaseStr[i] === lowerCaseLetter) {
//         count++;
//       }
//     }
//     return count;
//   }
//   const inputString = 'JSResourceS.com';
//   const specifiedLetter = 'o';
//   const occurrences = countOccurrences(inputString, specifiedLetter);
//   console.log(`Occurrences of '${specifiedLetter}' in '${inputString}': ${occurrences}`);
//   ----------------------------------------------------------------------------------------

// Q.NO-14
// ANS-
// function countOccurrences(str, letter) {
//     let lowerCaseStr = str.toLowerCase();
//     let lowerCaseLetter = letter.toLowerCase();
  
//     let count = 0;
  
//     for (let i = 0; i < lowerCaseStr.length; i++) {
//       if (lowerCaseStr[i] === lowerCaseLetter) {
//         count++;
//       }
//     }
  
//     return count;
//   }
  
//   let inputString = 'JSResourceS.com';
//   let specifiedLetter = 'o';
//   let occurrences = countOccurrences(inputString, specifiedLetter);
//   console.log(`Occurrences of '${specifiedLetter}' in '${inputString}': ${occurrences}`);
  

// ============================================================================================================================================================================