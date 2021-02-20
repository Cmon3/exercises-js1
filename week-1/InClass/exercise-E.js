// Here is example using the String interpolation to concat strings
const greetingStart = "Hello";
const name = "Simon";
const prefix = "Mr";

const greeting = `${greetingStart}, my name is ${name} and my name is ${name.length} letters long`;

// Here is an example using the plus operator to concat strings
const greetingStart2 = "Hello, my name is ";

const greeting2 = greetingStart2 + prefix + " " + name;

console.log(greeting);
console.log(greeting2); 