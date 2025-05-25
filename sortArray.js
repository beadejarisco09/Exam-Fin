//2.
let numbers = [24, 65, 21, 5, 9, 32, 42, 80, 57];
let names = ["Zenvo", "Erica", "Jordie", "Alicia", "Redon"];

// Merge arrays (simple concatenation)
let mergedArray = numbers.concat(names);
console.log("Merged Array:", mergedArray);

// Sort numbers in reverse order
numbers.sort(function(a, b){return b - a});
console.log("Numbers (Reverse Sorted):", numbers);

// Sort names alphabetically
names.sort();
console.log("Names (Alphabetical Sorted):", names);
