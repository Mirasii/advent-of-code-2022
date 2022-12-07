const { readFileSync } = require("fs");
const { day1 } = require("./day1/day1.js");
const { day6 } = require("./day6/day6.js");

const daysToRun = [
    day1,
    day6
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
