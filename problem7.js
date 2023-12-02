function addToObj(personObj, key, value) {
    // Check if the key is a string
    if (typeof key !== 'string') {
        return 'Function must be called with a valid key.';
    }

    // Add or update the key with the value in the object
    personObj[key] = value;
}

// Example usage
let person = { name: 'John', age: 30 };
 console.log(person)
addToObj(person, 'age', 31); // Updates the age
console.log(person); 

addToObj(person, 'city', 'New York'); // Adds the city
console.log(person); 

let result = addToObj(person, 123, 'invalid'); // Invalid key
console.log(result); 
console.log(person); 
console.log('Problem 7 Completed') 
