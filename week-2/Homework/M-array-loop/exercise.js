/*
	Write a function that receives an array of string, and console.log all strings that start with letter 'T'
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
*/

function printWordsStartsT(arrWords) {
  let index = 0;
  while (index < arrWords.length) {
    if (arrWords[index][0] === "T") {
      console.log(arrWords[index]);
    } 
    index++;
  }
}

/*function printWordsStartWithT(wordArray) {
  for (let index = 0; index < wordsArray.length; index++) {
    if (wordsArray[index][0] === "T") {
      console.log(wordsArray[index]);
    }
    index++;
  }
}    

function printWordsStartWithT(wordsArray) {
  wordsArray.forEach(
    function(element, index) {
      if (element[0] === "T") {
        console.log(element);
    }
  }
  );
}*/

const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

printWordsStartsT(daysOfWeek);