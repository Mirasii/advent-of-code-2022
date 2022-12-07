const { day2 } = require("./day2");

let input = `A Y
B X
C Z`;

test("day2", () => {
    const result = day2(input);
    expect(result.partOne).toBe(15);
    expect(result.partTwo).toBe(12);
});
