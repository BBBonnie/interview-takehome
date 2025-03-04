
/* Compare two times if the second time is earlier */
export const compareTwoTimesCheckTheSecondTimeIsEarlier = (
    time1: string,
    time2: string): boolean => {
    const result = new Date(time1).getTime() < new Date(time2).getTime();
    console.log(`Running compareTwoTimesCheckTheSecondTimeIsEarlier,\ntime-1: ${time1}, time-2: ${time2}`, result);
    return result;
}

/* Example of Question */
//Please generate a 6 digit random number string
export const generateSixDigitRandomNumberString = (): string => {

    const randomNumber = Math.floor(Math.random() * 900000) + 100000;
    console.log('Running generateSixDigitRandomNumberString,\nRandomNumber:', randomNumber);
    return `${randomNumber}`;
};


/* Write a function that takes in an array of numbers and returns the largest number in the array.*/
export const findLargestNumberInArray = (array: number[]): number => {
    let largestNumber = array[0];
    for (let i = 1; i < array.length; i++) {
      if (array[i] > largestNumber) { // compare each element and update global large
        largestNumber = array[i];
      }
    }
    console.log('Running findLargestNumberInArray,\nLargestNumber:', largestNumber);
    return largestNumber;
 
}

/*Write a function that takes in an array of numbers and returns the sum of all of the odd numbers in the array.*/
export const sumOfOddNumbersInArray = (array: number[]): number => {
    return 0;
}

/*Given an array of strings, return the longest one in the array.*/
export const longestStringInArray = (array: string[]): string => {
    return '';
}

/* Given an input of string(Assume that the input string only contains letters, no numbers or special characters),write a function that returns the number of vowels in the string. */
export const countVowelsInString = (string: string): number => {
    return 0;
}

/* Write a function that reverse the input string. For example: “Animal” to “laminA”. */
export const reverseString = (string: string): string => {
    return '';
}

/* Given two integers, write a function that takes returns the smallest common divisor of these two numbers.*/
export const smallestCommonDivisor = (number1: number, number2: number): number => {
    return 0;
}

/*Given a word, return if this word is palindromes. For example, ‘level’, ‘civic’, ‘kayak’ are palindromes because they reads the same way forwards and backwards.*/
export const isPalindrome = (string: string): boolean => {
    let start = 0;
    let end = string.length - 1;
  
    while (start < end) { // 2 pointers
        if (string[start] != string[end]) { 
            console.log(`Running isPalindrome,\nPalindrome`, false);
            return false;

        }
        start++;
        end--;
    }
    console.log(`Running isPalindrome,\nPalindrome`, true);
    return true;
}

/*Given an array of numbers, return a new array with all the even numbers doubled.*/
export const doubleEvenNumbersInArray = (array: number[]): number[] => {
    return [];
}

/*Given two arrays of numbers, write a function that returns a new array containing all the numbers that are common to both arrays in ascending order.*/
export const commonNumbersInTwoArrays = (array1: number[], array2: number[]): number[] => {
    return [];
}

/*Given a string, write a function that returns the most common letter in the string.*/
export const mostCommonLetterInString = (string: string): string => {
    return '';
}


const main = (async () => {
    /* Compare two times if the second time is earlier */
    compareTwoTimesCheckTheSecondTimeIsEarlier('2020-01-01 00:00:00', '2020-01-01 00:00:01');
    compareTwoTimesCheckTheSecondTimeIsEarlier('2020-01-01 00:00:01', '2020-01-01 00:00:00');
    generateSixDigitRandomNumberString();
    const a = [3, 2, 9, 1];
    findLargestNumberInArray(a);

    const d = 'aabaa';
    const e = 'abaa';
    isPalindrome(d);
    isPalindrome(e);


})();