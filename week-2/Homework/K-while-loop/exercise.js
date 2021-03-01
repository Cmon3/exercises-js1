/* Write a function that:

- Takes one number n as a parameter
- Adds all numbers from 0 to n. For example, if the input is 3, the output should be 0 + 1 + 2 + 3
- You should use a while loop

*/

let n = 10;

function sumTillNum(num){
	let counter = 0;
	let sum = 0;
	while (counter <= n) {
		sum += counter;
		counter += 1;
		} return sum;
}

/*function
for (let counter = 0, sum = 0; counter <= number; counter,"num", num);
} return sum;*/

console.log("Sum from 0 to " + n + " is: " + sumTillNum(n));
