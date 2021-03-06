function abracaFunction(yourFunc) {
    console.log(
      "I am abracaFunction! Watch as I mutate an array of strings to your heart's content!"
    );
    const abracaArray = [
      "James",
      "Elamin",
      "Ismael",
      "Sanyia",
      "Chris",
      "Antigoni",
    ];
  
    const abracaOutput = yourFunc(abracaArray);
  
    return abracaOutput;
  }

  /*const result = abracaFunction(function (array) {
    return array.map(function (string) {
        return string.toUpperCase();
    });
  });*/

  const result = abracaFunction((names) => {
      return names.map((string) => string.toUpperCase());
  }); 


  console.log(result);