let names = ["Manpreet", "Adrian", "Manuel", "Simon", "Keti"];

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

console.log(names.length);
names[1] = "Giorgio"
names[names.length - 1] = "Enia";
names.push("Marco");
names.unshift("Kris");

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

console.log(names.length);

