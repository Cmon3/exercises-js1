/*
  BOOLEAN WITH COMPARISON OPERATORS
  ---------------------------------
  Using comparison operators complete the unfinished statements.
  The variables should have values that match the expected results.
*/

var studentCount = 16;
var mentorCount = 9;
var moreStudentsThanMentors = studentCount > mentorCount; // finish this statement

console.log("Are there more students than mentors?", moreStudentsThanMentors);

var roomMaxCapacity = 25;
var totalcount = mentorCount + studentCount;
var enoughSpaceInRoom = totalcount <= 25; // finish this statement

console.log(
  "Is there enough space in the room for all students and mentors?",
  enoughSpaceInRoom
);

var personA = "Daniel";
var personB = "Irina";
var sameName = personA === personB; // finish this statement

console.log("Do person A and person B have the the same name?", sameName);

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */




/* 
  EXPECTED RESULT
  ---------------
  Are there more students than mentors? true
  Is there enough space in the room for all students and mentors? true
  Do person A and person B have the the same name? false
*/
