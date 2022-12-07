const { day6 } = require("./day6");

let input = `mjqjpqmgbljsphdztnvjfqwrcgsmlb`;

test("day6", () => {
    const result = day6(input);
    expect(result.partOne).toBe(`data starts at index 7`);
    expect(result.partTwo).toBe(`message starts at index 19`);
});