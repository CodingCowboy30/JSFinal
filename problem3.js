function numOddValues(arr) {
    return arr.reduce((count, num) => count + (num % 2 !== 0), 0);
}

const exampleArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 13, 29, 35, 32, 100, 353];
console.log(numOddValues(exampleArray)); 
console.log('Problem 3 Done')

// I have used the reduce method  to iterate over the array.  The function checks for odd numbers (by using num % 2 !== 0) and increments the count accordingly. The final count is returned, indicating the total number of odd values in the array.
