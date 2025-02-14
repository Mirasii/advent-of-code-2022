const { day4 } = require("./day4");

let input = `2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8`;

test("day4", () => {
    const result = day4(input);
    expect(result.partOne).toBe(2);
    expect(result.partTwo).toBe(4);
});
