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


    
