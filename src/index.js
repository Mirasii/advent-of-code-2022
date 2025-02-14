const { readFileSync } = require("fs");
const { day1 } = require("./day1/day1.js");
const { day2 } = require("./day2/day2.js");
const { day3 } = require("./day3/day3.js");
const { day4 } = require("./day4/day4.js");
const { day5 } = require("./day5/day5.js");
const { day6 } = require("./day6/day6.js");
const { day7 } = require("./day7/day7.js");

const daysToRun = [
    day1,
    day2,
    day3,
    day4,
    day5,
    day6,
    day7
    // add additional days here
];

daysToRun.forEach((day) => {
    var start = new Date();
    const name = day.name;
    const input = readFileSync(`./src/inputs/${name}`).toString();
    const result = day(input);
    console.log(`${name}:\n${result.partOne}\n${result.partTwo}`);
    console.log(`operational runtime: ${new Date() - start}ms\n`)
});
