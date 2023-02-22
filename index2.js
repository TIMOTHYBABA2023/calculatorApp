// 1. Write a Javescript for loop that will iterate from 0-15. 
//For each iteration, it willcheck if the current number is odd or even, 

for (let i=0; i<=15; i++){
    if (i%2===0) {
        console.log (i +" is an even number")
    }
    else {
        console.log(i +" is an odd number")
    }
}

// Create an object with just name and age. 
// Try to append a height to the object and 
// show the object created.

let person = {
    name: 'John',
    age:24
}
console.log(person);
person.height = 22.6
console.log(person);