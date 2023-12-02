function firstPunctuationIndex(str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '.' || str[i] === '?' || str[i] === '!') {
            return i;
        }
    }
    return "Sorry Nothing's Here";
}


console.log(firstPunctuationIndex('Hello, how are you, where you been?')); 
console.log(firstPunctuationIndex('No punctuation here'));
console.log('Problem 5 Complete')

// The function iterates over the characters of the string using a for loop. 
// During each iteration, it checks if the current character (str[i])  is a period, question mark, or exclamation mark.
// If it finds one of these punctuation marks, it immediately returns the index (i) of that character.
// If the loop completes without finding any of these punctuation marks, the function returns a string . 





