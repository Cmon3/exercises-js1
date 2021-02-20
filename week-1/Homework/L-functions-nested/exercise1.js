/*function getAgeInDays(age) {
    return age * 365;
  }
  
  function createCreeting(name, age) {
    var ageInDays = getAgeInDays(age);
    var message =
      "My Name is " + name + " and I was born over " + ageInDays + " days ago!";
    return message;
  }*/

function percentage(students, mentors) {
    let total = students + mentors;
    let pstudents = "Percentage of students: " + Math.round(students / total * 100) + "%";
    let pmentors = "Percentage of mentors: " + Math.round(mentors / total * 100) + "%";
    console.log(pstudents, pmentors);
}

percentage (32, 45);

function letmessage (pstudents, pmentors) {
    let message = "Percentage of" ;
    console.log(message);

}

