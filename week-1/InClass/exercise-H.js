
function concatenateStrings(firstS, secondS) {
    const concatenation = firstS + secondS; 
    // const concatenation = `${firstS}${secondS}`;
    return concatenation;
}

/*const concatenation = concatenateStrings("num1", "num2");
console.log(concatenation);
*/
console.log(concatenateStrings("num1","num2"));

function helloAge(name,birthYear) {
    let age = 2021 - birthYear;
    let output = "Hello" + " " + name + ", you are " + age + " " + "years old";
    return output;
}

console.log(helloAge("Simon",1987));