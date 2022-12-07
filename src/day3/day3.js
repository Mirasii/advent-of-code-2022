function day3(input) {
    rucksacks = input.replaceAll('\r', '').split('\n');
    var prioritySum = 0;
    for (var rucksack of rucksacks) {
        var comp1 = rucksack.slice(0, (rucksack.length / 2)).split('');
        var comp2 = rucksack.slice((rucksack.length / 2), rucksack.length).split('');
        const commonItems = new Set(comp1.filter(value => comp2.includes(value)));
        for (var item of commonItems) {
            prioritySum += parseInt(
                item === item.toUpperCase() ?
                    item.replace(/[a-zA-Z]/g, m => m.charCodeAt() - 38) :
                    item.replace(/[a-zA-Z]/g, m => m.charCodeAt() - 96)
            );
        }
    }
    return {
        "partOne": prioritySum
    }
}

module.exports = {
    day3,
    // Note: you can add helper functions for testing within .test.js here if you wish
};
