let names = ["Manpreet", "Adrian", "Manuel", "Simon", "Keti"];
let names2 = ["Kimberly", "Enia", "Guido", "Henriette"];

let wholeclass = names.concat(names2);
let orderedwholeclass = wholeclass.sort();

console.log(orderedwholeclass);

function isInTheClass(name, names) {
    if (names.includes(name)) {
        return `${name} is at the class with ${names.join(", ")}`;
    }   else {
            return `${name} is not at the class with ${names.join(", ")}`;
    }
}

console.log(isInTheClass("Jose", orderedwholeclass));