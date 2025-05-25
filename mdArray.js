//3.
l
  et names = ["Genevieve", "Juan", "Luna", "Gabriel", "Elise"];
let ages = [24, 65, 21, 5, 9];

let multiArray = [];
for (let i = 0; i < names.length; i++) {
  multiArray.push([names[i], ages[i]]);
}

console.log("Restructured Multi-Dimensional Array:");
for (let i = 0; i < multiArray.length; i++) {
  console.log(multiArray[i]);
}
