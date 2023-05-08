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


 //Prime
//  Step One
// Write a function called checkPrime that will test whether a number is Prime. The function will return true (Boolean) if Prime, false if not. Hint: Check every number up to the square root. To do this, try a for loop.

function checkPrime (num) {
    if (num <=1 ) {      // 1 is not a prime number and neg nums cant be prime so everything 1 and below is false
        return false;
    }

    const sqrt = Math.floor(Math.sqrt(num));  // takes the num and finds the sqrt then is rounded down which is then stored as sqrt
    for (let i = 2 ; i <= sqrt; i +=1) { // sets up a for loop that will run through every integer from 2 to the square root of the num
        if (num % i === 0){     // if a number divides evenly it is not a prime so return false
            return false;
        }
    }

    return true; // every prime choice has ben labeled false so everything else is true
}

console.log(checkPrime(7)); // true
console.log(checkPrime(10)); // false
console.log(checkPrime(1)); // false
console.log(checkPrime(-7)); // false


// Step Two
// Write another function called printPrimes that will print (console log) all the Primes up to an arbitrary limit. For example, if you invoke your function with printPrimes(97), it will print all the Prime numbers up to and including 97.
// This function can call on the previous checkPrime function.

function printPrimes(limit) {  // defines a function called printPrimes that takes in one argument, limit.
    for (let i = 2; i <= limit; i +=1) {  //for loop that starts at 2 and goes up to the limit specified in the function argument.
        if (checkPrime(i)) {  //This line calls the checkPrime function (which we defined in Step One) on each integer i from 2 to limit. If checkPrime(i) returns true the code inside the curly braces will be executed.
            console.log(i);
        }
    }
}

printPrimes(97); // calls to the printPrimes function and sets the limit to 97