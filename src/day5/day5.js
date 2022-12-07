function day5(input) {
    const rawData = input.replaceAll('\r', '').split("\n\n");
    const groupByFour = (array) => {
        const result = [];
        for (let i = 0; i < array.length; i += 4) {
            result.push(array.slice(i, i + 4));
        }
        return result;
    };

    var crateMatrix = rawData[0].split("\n");
    crateMatrix.pop();

    var crateMatrix = crateMatrix
        .map((a) => a.split(""))
        .map((a) => groupByFour(a))
        .map((a) => a.map((b) => b[1]))
        .reverse();
    //Transpose Matrix
    crateMatrix = crateMatrix[0].map((_, colIndex) => crateMatrix.map((row) => row[colIndex]));
    //Filter blanks
    crateMatrix = crateMatrix.map((a) => a.filter((b) => b !== " "));
    const moveRegex = /move (\d+) from (\d+) to (\d+)/;
    const moves = rawData[1]
        .trim()
        .split("\n")
        .map((a) => moveRegex.exec(a))
        .map((a) => [a[1], a[2], a[3]].map(Number));

    var originalMatrix = JSON.stringify(crateMatrix);
    //part1
    for (var move of moves) {
        var from = crateMatrix[move[1] - 1];
        var to = crateMatrix[move[2] - 1];
        for (var i = 1; i <= move[0]; i++) {
            to.push(from[from.length - 1]);
            from.pop();
        }
    }
    var topOfStacks1 = crateMatrix.reduce((topVals, crateArray) => topVals + crateArray[crateArray.length - 1], '');
    //reset matrix
    crateMatrix = JSON.parse(originalMatrix);
    //part2
    for (var move of moves) {
        var from = crateMatrix[move[1] - 1];
        var to = crateMatrix[move[2] - 1];
        var moving = Array.from((move[0] == 1 ? from[from.length - 1] : from.slice(from.length - move[0], from.length)));

        crateMatrix[move[2] - 1] = to.concat(moving)
        for (var i = 1; i <= move[0]; i++) {
            from.pop();
        }
    }
    var topOfStacks2 = crateMatrix.reduce((topVals, crateArray) => topVals + crateArray[crateArray.length - 1], '');

    return {
        "partOne": topOfStacks1,
        "partTwo": topOfStacks2
    }
}




module.exports = {
    day5,
};
