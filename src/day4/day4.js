function day4(input) {
    var sectionPairs = input.replaceAll('\r', '').split('\n');
    var fullyContained = 0;
    for (var pair of sectionPairs) {
        var elf1 = pair.split(',')[0].split('-');
        var elf2 = pair.split(',')[1].split('-');
        var lowestStart = parseInt(elf1[0]) < parseInt(elf2[0]) ? 'elf1' :
            (parseInt(elf1[0]) == parseInt(elf2[0]) ? 'both' : 'elf2');
        var highestEnd = parseInt(elf1[1]) > parseInt(elf2[1]) ? 'elf1' :
            (parseInt(elf1[1]) == parseInt(elf2[1]) ? 'both' : 'elf2');
        if (lowestStart == highestEnd || highestEnd == 'both' || lowestStart == 'both') {
            fullyContained++;
        }
    }
    return {
        "partOne": fullyContained,
        "partTwo": null
    }
}

module.exports = {
    day4,
};
