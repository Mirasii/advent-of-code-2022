function day4(input) {
    var sectionPairs = input.replaceAll('\r', '').split('\n');
    var fullyContained = 0;
    var overlap = 0;
    for (var pair of sectionPairs) {
        var elf1 = pair.split(',')[0].split('-');
        elf1 = {
            "start": parseInt(elf1[0]),
            "end": parseInt(elf1[1])
        }
        var elf2 = pair.split(',')[1].split('-');
        elf2 = {
            "start": parseInt(elf2[0]),
            "end": parseInt(elf2[1])
        }
        var lowestStart = elf1.start < elf2.start ? 'elf1' : (elf1.start == elf2.start ? 'both' : 'elf2');
        var highestEnd = elf1.end > elf2.end ? 'elf1' : (elf1.end == elf2.end ? 'both' : 'elf2');
        if (lowestStart == highestEnd || highestEnd == 'both' || lowestStart == 'both') {
            fullyContained++;
        }
        if ((elf1.start <= elf2.end && elf2.end <= elf1.end)
            || (elf2.start <= elf1.end && elf1.end <= elf2.end))
            overlap++;

    }
    return {
        "partOne": fullyContained,
        "partTwo": overlap
    }
}

module.exports = {
    day4,
};
