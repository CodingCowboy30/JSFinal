function duplicateElements(arr) {
    const counts = {};
    const duplicates = [];

    // Count occurrences of each number
    for (const num of arr) {
        counts[num] = (counts[num] || 0) + 1;
    }

    // For loop with nested IF statement looks for numbers that appear more than once
    for (const num in counts) {
        if (counts[num] > 1) {
            duplicates.push(Number(num));
        }
    }

    return duplicates;
}

// Example usage
console.log(duplicateElements([1, 2, 3, 2, 4, 5, 5, 6])); 
console.log(duplicateElements([10, 20, 10, 20, 30, 100, 101, 102, 3005, 10005, 100])); 
console.log(duplicateElements([1, 2, 3, 4])); 
console.log('Problem 8 Completed')
