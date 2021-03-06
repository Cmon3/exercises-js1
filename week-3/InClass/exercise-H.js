let names = ["Manpreet", "Adrian", "Manuel", "Simon", "Keti"];

function findNames (name, names) {
    if (names.includes(name)) {
        return `Found me!` 
    }   else {
        return `Haven't found me :(`;
    }
}

console.log(findNames("Jose", names));