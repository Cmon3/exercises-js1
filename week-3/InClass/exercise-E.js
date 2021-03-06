const birthYears = [1964, 2008, 1999, 2005, 1978, 1985, 1919];

/*birthyears.forEach(function (birthyear, age) {
    return ;
  });*/

 function calculateAge(birthyear) {
     return 2021 - birthyear;
 } 

const ages = birthYears.map(calculateAge);
      
console.log(ages);