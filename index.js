// Simple Algorithm

// 1. Finding Simple Interest... Write a program that finds the Simple Interest when Principal, Rate and Time is given
let p= 10000
let t=5
let r=2.65 

let simpleInterest= (p*t*r)/ 100
    console.log (simpleInterest)

//2. Write a program to determine if a number is even or odd number using the ternary operators...
let number=113
let numCheck= number%2==0? "This is an even number": "This is an odd number"
    console.log (numCheck)

//3.  Create an object with just name and age. Try to append a height to the object and show the object created.    
let person= {
    name: 'Timothy',
    age : 25,
}
let appendName = person.name;
    console.log(appendName)

let appendAge = person.age
    console.log(appendAge)

//4. Create an array that has three elements, try to use the POP(), the PUSH(), UNSHIFT() methods in array.
 let assignmentArray= ['dilligence', 'hardwork','dedication']
  assignmentArray.unshift('persistence')
    console.log(assignmentArray)

assignmentArray.pop()
    console.log(assignmentArray)

assignmentArray.push('tolerance')
    console.log(assignmentArray)

//5. Given a string, find the reverse form of that string. E.g given "book", your answer should be "koob" 


