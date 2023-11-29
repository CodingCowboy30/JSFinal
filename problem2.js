function oddIndices(arr) {
    let result = [];
    for (let i = 1; i < arr.length; i += 2) {
        result.push(arr[i]);
    }
    return result;
}

const exampleArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(oddIndices(exampleArray));
console.log('Problem 2 Done')

// My function iterates over the input array, starting from index 1 , and increments by 2 each time to access the next odd index.
