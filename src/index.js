const { readFileSync } = require("fs");
const { day1 } = require("./day1/day1.js");
const { day6 } = require("./day6/day6.js");

const daysToRun = [
    day1,
    day6
    // add additional days here
];

daysToRun.forEach((day) => {
    const name = day.name;
    const input = readFileSync(`./src/inputs/${name}`).toString();
    console.log(`${name}:`, day(input));
});
