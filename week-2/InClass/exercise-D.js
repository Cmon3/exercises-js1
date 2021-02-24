const input = "happy";

function inputChecker(input) {
    if (input === "happy") {
      return `Good job, you're doing great!`;
    } else if (input === "sad") {
      return `Every cloud has a silver lining`;
    } else if (typeof input === "number") {
      return `Beep beep boop`;
    } else {
      return `I'm sorry, I'm still learning about feelings!`;
    }
  }

console.log(inputChecker(input));