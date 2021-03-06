// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

function nXhundert (number) {
    return number * 100;
}

var numbersxhundert = numbers.map(nXhundert);
console.log(numbersxhundert);

var numbersxhundert1 = numbers.map(function nXhundert(number) {
    return number * 100;
});

var numbersxhundert2 = numbers.map(function (number) {
    return number * 100;
});

var numbersxhundert3 = numbers.map(number => {
    return number * 100;
});

var numbersxhundert4 = numbers.map(number => number * 100);

console.log(numbersxhundert1);
console.log(numbersxhundert2);
console.log(numbersxhundert3);
console.log(numbersxhundert4);
