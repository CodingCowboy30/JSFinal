function getOrdinal(n) {
    const s = ["th", "st", "nd", "rd"];
    const v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
}
console.log(getOrdinal(1035));
function getPlace(highScores, newScore) {
    // Find the position for the new score
    let position = highScores.length;
    for (let i = 0; i < highScores.length; i++) {
        if (newScore > highScores[i]) {
            position = i;
            break;
        }
    }

    // Convert position to human-readable format (1st, 2nd, 3rd, etc.)
    return `Your score is ${getOrdinal(position + 1)} highest.`;
}


console.log(getPlace([100, 90, 80, 70], 85)); 
console.log(getPlace([100, 90, 80, 70], 70)); 
console.log(getPlace([100, 90, 80, 70], 95)); 
console.log('Problem 6 Complete')
