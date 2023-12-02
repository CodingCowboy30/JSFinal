function averageStringLength(arr) {
    if (arr.length === 0) return 0; // Handle the case where the array is empty

    const totalLength = arr.reduce((sum, str) => sum + str.length, 0);
    return totalLength / arr.length;
}


const exampleArray = ['Jamming', 'Jumping', "jelly", 'Jumbotron', 'Megazord'];
console.log(averageStringLength(exampleArray)); 
console.log('Problem 4 Complete')
