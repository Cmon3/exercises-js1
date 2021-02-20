let numberOfStudents = 15;
let numberOfMentors = 8;
let totalstudentsandmentors = numberOfStudents + numberOfMentors;

const preciseStudentsPercent = numberOfStudents * 100 / totalstudentsandmentors;
const roughStudentsPercent = Math.round(preciseStudentsPercent);

const preciseMentorsPercent = numberOfMentors * 100 / totalstudentsandmentors;
const roughMentorsPercent = Math.round(preciseMentorsPercent);

console.log(`Percentage students: ${roughStudentsPercent}%`);
console.log(`Percentage mentors: ${roughMentorsPercent}%`);