// Declare your function here
function createLongGreeting(name, age){
    let longgreeting = "Hello, my name is " + name + " and my age is " + age + " years old";
    return longgreeting;
}

const greeting = createLongGreeting("Daniel", 30);

console.log(greeting);
