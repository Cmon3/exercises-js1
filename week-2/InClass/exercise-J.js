function secondMatchesAmy(array) {
  if (array[1] === "Amy") {   /*.includes("Amy") ---- to select any that includes that*/
    return "Second index matched!";
  }
  return "Second index not matched";
}

console.log(secondMatchesAmy(["Sim", "Amy"]));
console.log(secondMatchesAmy(["Sim", "Am"]));