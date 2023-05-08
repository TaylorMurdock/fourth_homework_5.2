//Verbal Questions
// 1. What is the difference between a parameter and an argument?
// 2. Within a function, what is the difference between return and console.log?

//1. a parameter is a placeholder for a value that the function needs to operate. an argument is the concrete value that is passed into the function.
//2. a console.log outputs data to the terminal for debugging while the return method will send the output back to what called the function


// Palindrome
// Write a function checkPalindrome that accepts a single argument, a string. The function should return true (Boolean) if the string is a palindrome, false if it is not. Make sure your function will give the correct answer for words with capital letters.
//REALLY STRUGGLED HERE

function checkPalindrome(str) {
    // convert the string to lowercase to ignore case sensitivity
    str = str.toLowerCase();

    // loop through the string, checking if the characters match in reverse order
    for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
        return false; // if characters don't match, string is not a palindrome
        }
    }
    return true; // if loop finishes without finding any mismatches, string is a palindrome
}

// Sum Array
// Write a function sumArray that takes an array as an argument. The array should contain numbers. The function should return the sum of the numbers in the array. Use a for loop within the function to iterate over the array and sum the contents. Use a variable such as
// let sum = 0;
// that will accumulate value within the loop. Expected result:
// console.log(sumArray([1, 2, 3, 4, 5, 6]));
// => 21
    
function sumArray (arr = [1, 2, 3, 4, 5, 6]) { //  Write a function sumArray that takes an array as an argument, array should contain numbers 1-6
    let sum = 0  // initializing a variable called sum and assigning it a value of 0
    for (i=0; i<arr.length; i+=1) {  // a loop starting with the first index and running one by one for however long the arr is 
        sum += arr[i] // adding the current element of the arry to the running total of sum(0) aka sum = sum + arr[i]
    }
    return sum; // takes the result of the loop above and replaces the value of sum
}
 console.log(sumArray())
