
let target = document.getElementById("site-title");

const countries = [34, "Three", 89];

console.log(countries.length);

countries[0] = "Two";
countries.push("Belgium");

console.log(countries.length);

console.log(countries[countries.length - 1]);

let country = countries.shift();


console.log(countries);
console.log(country);

